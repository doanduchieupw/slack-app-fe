"use client";
import { Button, Divider, Flex, Text, TextInput, Title } from "@mantine/core";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "@mantine/form";
import { useRouter } from "next/navigation";
import Link from "next/link";

import GoogleIcon from "@images/logo/google-logo.svg";
import AppleIcon from "@images/logo/apple-logo.svg";
import { signupRequest } from "api/auth";
import { SignUpBody } from "types/auth";
import { setToken } from "@utils/cookies";
import {
  EmailRegex,
  EmailRegexError,
  PasswordLength,
  PasswordMessageError,
} from "@constant/validate";
import { TOKEN_KEY } from "@constant/auth";
import { ROUTE } from "@constant/route";

const CreateNewPage = () => {
  const router = useRouter();
  const signupForm = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (EmailRegex.test(value) ? null : EmailRegexError),
      password: (value) =>
        value.length >= PasswordLength ? null : PasswordMessageError,
    },
  });
  const mutation = useMutation({
    mutationFn: async (data: SignUpBody) => await signupRequest(data),
    onSuccess: (data) => {
      setToken(TOKEN_KEY.ACCESS, data.accessToken);
      setToken(TOKEN_KEY.REFRESH, data.refreshToken);
      router.push(ROUTE.GET_STARTED);
    },
    onError: (error) => {
      signupForm.setFieldError("email", (error as any).response.data.message);
    },
  });
  return (
    <div className="max-w-3xl w-full flex flex-col items-center mx-auto">
      {/* Heading */}
      <Flex direction="column" gap="md" align="center">
        <Title order={1} size={48}>
          First, enter your email
        </Title>
        <Text size="xl" fw={100} c="#454245" mb={32}>
          We suggest using the{" "}
          <Text fw={500} span inherit>
            email address you use at work.
          </Text>
        </Text>
      </Flex>
      {/* Sign up */}
      <form
        onSubmit={signupForm.onSubmit((data) => mutation.mutateAsync(data))}
        className="max-w-md w-full flex flex-col gap-4"
      >
        <TextInput
          type="email"
          size="md"
          placeholder="name@work-email.com"
          {...signupForm.getInputProps("email")}
        />
        <TextInput
          type="password"
          size="md"
          placeholder="Password"
          {...signupForm.getInputProps("password")}
        />
        <Button type="submit" size="md" fullWidth color="aubergine">
          Continue
        </Button>
        <Divider my="xs" label="OR" labelPosition="center" />

        <Button
          size="md"
          leftSection={<GoogleIcon className="w-4 h-4" />}
          variant="default"
          fw={400}
        >
          Continue With Google
        </Button>
        <Button
          size="md"
          leftSection={<AppleIcon className="w-4 h-4" />}
          variant="default"
          fw={400}
        >
          Continue With Apple
        </Button>
      </form>
      {/* Existing  */}
      <Flex direction="column" gap={2} align="center" mt={32}>
        <Text size="md" fw={100}>
          Already using Slack?
        </Text>
        <Link href={ROUTE.SIGN_IN} className="text-blue-600 hover:underline">
          Sign in to an existing workspace
        </Link>
      </Flex>
    </div>
  );
};

export default CreateNewPage;
