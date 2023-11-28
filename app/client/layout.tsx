"use client";
import { Flex } from "@mantine/core";
import TopNav from "@components/client/header/top-nav";
import { TAB_RAIL_WIDTH, TOP_NAV_HEIGHT } from "./constant";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-screen">
      <Flex style={{ height: `${TOP_NAV_HEIGHT}px` }}>
        <div style={{ width: `${TAB_RAIL_WIDTH}px` }}></div>
        <TopNav />
      </Flex>
      <Flex style={{ height: `calc(100% - ${TOP_NAV_HEIGHT}px)` }}>
        <div style={{ width: `${TAB_RAIL_WIDTH}px` }}>Menu</div>
        <div className=" w-full h-full pb-1 pr-1">
          <Flex className="w-full h-full border rounded-md">
            <div>NavBar</div>
            <div>Main</div>
            <div>Aside</div>
          </Flex>
        </div>
      </Flex>
    </div>
  );
};

export default ClientLayout;
