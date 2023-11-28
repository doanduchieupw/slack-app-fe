import { Flex } from "@mantine/core";

const ClientPage = () => {
  return (
    <div className="w-full h-full">
      <Flex className="w-full h-full border rounded-md">
        <div className="flex-[1_0_0] border-r border-r-slate-500">NavBar</div>
        <div className="flex-[2_0_0] border-r border-r-slate-500">Main</div>
        <div className="flex-[1_0_0]">Aside</div>
      </Flex>
    </div>
  );
};

export default ClientPage;
