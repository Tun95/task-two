import { useState } from "react";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  ShareAltOutlined,
  TeamOutlined,
  MenuOutlined,
  CloseOutlined,
  CalendarOutlined,
  FileTextOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;

function SideBar() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const sidebarWidth = collapsed ? 50 : 200; // Adjust the widths as needed

  return (
    <div className="side-bar">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={toggleCollapse}
        width={sidebarWidth}
        theme="light"
      >
        {/* Menu Icon */}
        <div className="menu_icon" onClick={toggleCollapse}>
          {collapsed ? (
            <MenuOutlined className="icon" />
          ) : (
            <CloseOutlined className="close_icon icon" />
          )}
        </div>

        {/* Sidebar content */}
        <Menu theme="light" mode="vertical" className="menu_items">
          <Menu.Item
            key="1"
            icon={
              <Link to="/">
                <HomeOutlined />
              </Link>
            }
          >
            {collapsed ? null : <Link to="/">Home</Link>}
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={
              <Link to="/">
                <TeamOutlined />
              </Link>
            }
          >
            {collapsed ? null : <Link to="/">Users</Link>}
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={
              <Link to="/">
                <CalendarOutlined />
              </Link>
            }
          >
            {collapsed ? null : <Link to="/">Calender</Link>}
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={
              <Link to="/">
                <ShareAltOutlined />
              </Link>
            }
          >
            {collapsed ? null : <Link to="/">Share</Link>}
          </Menu.Item>
          <Menu.Item
            key="5"
            icon={
              <Link to="/">
                <FileTextOutlined />
              </Link>
            }
          >
            {collapsed ? null : <Link to="/">Text</Link>}
          </Menu.Item>
          <Menu.Item
            key="6"
            icon={
              <Link to="/">
                <i className="fa-solid fa-book"></i>
              </Link>
            }
          >
            {collapsed ? null : <Link to="/">Text</Link>}
          </Menu.Item>
          <Menu.Item
            key="7"
            icon={
              <Link to="/">
                <HeartOutlined />
              </Link>
            }
          >
            {collapsed ? null : <Link to="/">Favorite</Link>}
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
}

export default SideBar;
