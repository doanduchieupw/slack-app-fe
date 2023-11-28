"use client";
import { Input, Modal, UnstyledButton } from "@mantine/core";
import { useDisclosure, useResizeObserver } from "@mantine/hooks";
import { IconSearch, IconX } from "@tabler/icons-react";
import { useRef } from "react";

const SearchBar = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const searchRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={searchRef}
      className="w-full h-[28px] bg-gray-600 px-2 rounded-sm"
    >
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        overlayProps={{
          backgroundOpacity: 0,
          blur: 0,
        }}
        yOffset={searchRef.current?.offsetTop}
        xOffset={searchRef.current?.offsetLeft}
        size={searchRef.current?.offsetWidth}
        styles={{
          inner: {
            justifyContent: "unset",
          },
          body: {
            padding: 0,
          },
        }}
        transitionProps={{
          transition: "slide-down",
          duration: 50,
          timingFunction: "linear",
        }}
      >
        <div className="border">
          <div>
            <Input
              placeholder="Type what you want to search for. Slack will do the rest."
              leftSection={<IconSearch size={16} />}
              rightSection={<IconX size={16} />}
            />
          </div>
          <div className="flex flex-col gap-3 p-2">
            <div>Recent searches</div>
            <div>Search for messages, people, files, and more</div>
            <div>Search for messages, people, files, and more</div>
            <div>Search for messages, people, files, and more</div>
            <div>Search for messages, people, files, and more</div>
            <div>Search for messages, people, files, and more</div>
          </div>
        </div>
      </Modal>
      <UnstyledButton
        className="flex justify-between items-center w-full h-full"
        onClick={open}
      >
        <span className="text-[13px]">Search new workspace</span>
        <IconSearch size={15} />
      </UnstyledButton>
    </div>
  );
};

export default SearchBar;
