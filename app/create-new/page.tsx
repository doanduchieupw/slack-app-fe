"use client";
import { Button, Divider, Input, Text, Title } from "@mantine/core";
import GoogleIcon from "@images/logo/google-logo.svg";
import AppleIcon from "@images/logo/apple-logo.svg";

const CreateNewPage = () => {
  return (
    <div className="max-w-3xl w-full flex flex-col items-center mx-auto">
      <div>
        <Title order={1} size={48}>
          First, enter your email
        </Title>
        <Text>We suggest using the email address you use at work.</Text>
      </div>
      <div className="max-w-md w-full flex flex-col gap-4">
        <Input placeholder="name@work-email.com" />
        <Input placeholder="Password" />
        <Button fullWidth color="aubergine">
          Continue
        </Button>
        <Divider my="xs" label="OR" labelPosition="center" />

        <Button
          leftSection={<GoogleIcon className="w-4 h-4" />}
          variant="default"
        >
          Continue With Google
        </Button>
        <Button
          leftSection={<AppleIcon className="w-4 h-4" />}
          variant="default"
        >
          Continue With Apple
        </Button>
      </div>
    </div>
  );
};

export default CreateNewPage;
