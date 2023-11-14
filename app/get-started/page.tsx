"use client";
import {
  Avatar,
  Button,
  Checkbox,
  Flex,
  Text,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import SlackLogo from "@images/logo/slack-logo.svg";
import IllustrationLanding from "@images/get-started/illustration-landing.svg";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@utils/axios";

const workspace = [
  {
    name: "Sales",
    membersCount: 12,
    icon: "https://upload.wikimedia.org/wikipedia/commons/b/b1/VAN_CAT.png",
  },
  {
    name: "New Workspace",
    membersCount: 5,
    icon: "https://cdn.britannica.com/25/172925-050-DC7E2298/black-cat-back.jpg",
  },
  {
    name: "Marketing",
    membersCount: 2,
    icon: "https://ichef.bbci.co.uk/news/976/cpsprodpb/17207/production/_131472749_nannymcphee1.jpg",
  },
  {
    name: "Private Workspace",
    membersCount: 8,
    icon: "https://www.rover.com/blog/wp-content/uploads/2020/02/cat-4008189_640.jpg",
  },
];

const CreateNewPage = () => {
  const info = useQuery({
    queryKey: ["todos"],
    queryFn: () => {
      return axiosInstance.get("/api/workspace/my-list-workspace");
    },
  });
  console.log("😻 ~ file: page.tsx:44 ~ info ~ info:", info);
  return (
    <div>
      <div className="w-full flex flex-col items-center mx-auto bg-[#f9f6f1] pb-12">
        <header className="center py-10">
          <Flex direction="column" gap={16}>
            <SlackLogo className="h-6 object-cover" />
            <Flex className="bg-white rounded-full px-4 py-1" gap={8}>
              <Text size="sm" fw={100}>
                Confirmed as <Text span>doanduchieu12@gmail.com</Text>
              </Text>{" "}
              <UnstyledButton fz={14} fw={100}>
                Change
              </UnstyledButton>
            </Flex>
          </Flex>
        </header>
        <div className="max-w-3xl w-full">
          <Flex>
            <Flex direction="column" gap={16} pr={32}>
              <Title order={1} fz={44} fw={700} lts={-0.25} pr={24} mb={12}>
                Create a new Slack workspace
              </Title>
              <Text fz={18} fw={300}>
                Slack gives your team a home — a place where they can talk and
                work together. To create a new workspace, click the button
                below.
              </Text>
              <Button size="md" fullWidth color="aubergine">
                Create a Workspace
              </Button>
              <Checkbox
                size="xs"
                defaultChecked
                fz={13}
                fw={300}
                c="gray.7"
                label="It’s okay to send me marketing communications about Salesforce, including Slack. I can unsubscribe at any time."
              />
              <Text fz={13} fw={100} lts={0.25} c="gray.7">
                By continuing, you’re agreeing to our Main Services Agreement,
                User Terms of Service, and Slack Supplemental Terms. Additional
                disclosures are available in our Privacy Policy and Cookie
                Policy.
              </Text>
            </Flex>
            <IllustrationLanding className="shrink-0" />
          </Flex>
        </div>
      </div>
      <div className="relative w-full py-12">
        <Flex direction="column" align="center" maw={600} mx="auto">
          <Title order={4}>Open a workspace</Title>
          <div className="border rounded-md w-full">
            <div className="border-b p-4">
              <Text fz={15}>
                Workspaces for <Text span>doanduchieu12@gmail.com</Text>
              </Text>
            </div>
            {workspace.map((item, index) => (
              <div
                key={index}
                className="group hover:bg-[#f8f8f8] hover:cursor-pointer"
              >
                <div className="relative p-4">
                  <Flex>
                    <Avatar size="lg" src={item.icon} radius="sm" />
                    <Flex direction="column" ml={8}>
                      <Text>{item.name}</Text>
                      <Text>{item.membersCount} members</Text>
                    </Flex>
                  </Flex>
                  <Text className="group-hover:block group-hover:text-[#0b4c8c] hidden absolute right-16 top-1/2 -translate-y-1/2">
                    Open
                  </Text>
                  <IconArrowRight className="group-hover:text-[#0b4c8c] group-hover:right-7 absolute right-8 top-1/2 -translate-y-1/2 duration-100" />
                </div>
                <hr className="border-t ml-4" />
              </div>
            ))}
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default CreateNewPage;
