import { ActionIcon, Flex } from "@mantine/core";
import {
  IconArrowLeft,
  IconArrowRight,
  IconClockHour3,
  IconHelpOctagon,
} from "@tabler/icons-react";
import SearchBar from "./search";
import {
  TOP_NAV_HISTORY_WIDTH,
  TOP_NAV_SEARCH_MAX_WIDTH,
  TOP_NAV_SEARCH_MIN_WIDTH,
} from "./constant";

const TopNav = () => {
  return (
    <div className="flex justify-between items-center flex-1 gap-2 pr-1">
      <Flex w={TOP_NAV_HISTORY_WIDTH} justify="flex-end">
        <ActionIcon.Group>
          <ActionIcon variant="transparent" color="gray" size="sm">
            <IconArrowLeft />
          </ActionIcon>
          <ActionIcon variant="transparent" color="gray" size="sm">
            <IconArrowRight />
          </ActionIcon>
        </ActionIcon.Group>
        <ActionIcon variant="transparent" color="white" size="sm">
          <IconClockHour3 />
        </ActionIcon>
      </Flex>
      <Flex
        style={{
          flex: "2 1 0",
          maxWidth: `${TOP_NAV_SEARCH_MAX_WIDTH}px`,
          minWidth: `${TOP_NAV_SEARCH_MIN_WIDTH}px`,
        }}
      >
        <SearchBar />
      </Flex>
      <div className="flex justify-end flex-[1_0_0]">
        <ActionIcon variant="transparent" color="gray" size="sm">
          <IconHelpOctagon />
        </ActionIcon>
      </div>
    </div>
  );
};

export default TopNav;
