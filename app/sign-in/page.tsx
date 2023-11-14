"use client";
import { Button, Divider, Flex, Text, TextInput, Title } from "@mantine/core";
import GoogleIcon from "@images/logo/google-logo.svg";
import AppleIcon from "@images/logo/apple-logo.svg";
import { useMutation } from "@tanstack/react-query";
import { signin } from "api/auth";
import { useForm } from "@mantine/form";
import { SignInRequest } from "types/auth";
import { useRouter } from "next/navigation";
import { setToken } from "@utils/cookies";
import Link from "next/link";

const SignInPage = () => {
  const router = useRouter();
  const signupForm = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length >= 6 ? null : "Password should be at least 6 characters",
    },
  });
  const mutation = useMutation({
    mutationFn: async (data: SignInRequest) => await signin(data),
    onSuccess: (data) => {
      setToken("accessToken", data.accessToken);
      setToken("refreshToken", data.refreshToken);
      router.push("/get-started");
    },
    onError: (error) => {
      signupForm.setFieldError("email", (error as any).response.data.message);
      signupForm.setFieldError(
        "password",
        (error as any).response.data.message
      );
    },
  });
  return (
    <div className="max-w-3xl w-full flex flex-col items-center mx-auto">
      {/* Heading */}
      <Flex direction="column" gap="md" align="center">
        <Title order={1} size={48}>
          Sign in to Slack
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
        <Button
          size="md"
          leftSection={<GoogleIcon className="w-4 h-4" />}
          variant="default"
          fw={400}
        >
          Sign In With Google
        </Button>
        <Button
          size="md"
          leftSection={<AppleIcon className="w-4 h-4" />}
          variant="default"
          fw={400}
        >
          Sign In With Apple
        </Button>
        <Divider my="xs" label="OR" labelPosition="center" />

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
          Sign In With Email
        </Button>
      </form>
      {/* Existing  */}
      <Flex direction="column" gap={2} align="center" mt={32}>
        <Text size="md" fw={100}>
          New to Slack?
        </Text>
        <Link href="/sign-in" className="text-blue-600 hover:underline">
          Create an account
        </Link>
      </Flex>
    </div>
  );
};

export default SignInPage;
