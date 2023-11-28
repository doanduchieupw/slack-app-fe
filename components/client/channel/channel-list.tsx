import { Menu, UnstyledButton } from "@mantine/core";
import { WORKSPACE_MENU, WORKSPACE_NAME } from "./constant";

const ChannelList = () => {
  return (
    <div>
      <div>
        <Menu>
          <Menu.Target>
            <UnstyledButton>{WORKSPACE_NAME}</UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown>
            {WORKSPACE_MENU.map((workspace) => (
              <Menu.Item key={workspace}>{workspace}</Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      </div>
    </div>
  );
};

export default ChannelList;
