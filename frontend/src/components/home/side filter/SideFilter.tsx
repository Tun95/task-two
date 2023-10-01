import {
  FileTextOutlined,
  SearchOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  {
    key: "header",
    label: (
      <div className="menu-header f_flex">
        <span>Filters</span>
        <span className="selected-count">0 selected</span>
      </div>
    ),
  },

  { type: "divider" },
  getItem("Personal Information", "sub1", <FileTextOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),

  { type: "divider" },

  getItem("Education", "sub2", <FileTextOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),

  { type: "divider" },

  getItem("Work Experience", "sub3", <FileTextOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
  { type: "divider" },

  getItem("Activity Filter", "sub4", <FileTextOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
  { type: "divider" },

  getItem("Advanced Filter", "sub5", <FileTextOutlined />, [
    getItem(
      "Item 1",
      "g1",
      null,
      [getItem("Option 1", "1"), getItem("Option 2", "2")],
      "group"
    ),
    getItem(
      "Item 2",
      "g2",
      null,
      [getItem("Option 3", "3"), getItem("Option 4", "4")],
      "group"
    ),
  ]),
];

interface SideFilterProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}
function SideFilter(props: SideFilterProps) {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // Update the searchQuery state using setSearchQuery
    props.setSearchQuery(event.target.value);
  };
  return (
    <div className="side_filter">
      <div className="content">
        <div className="form_group ">
          <div className="search_box a_flex">
            <SearchOutlined className="icon" />
            <input
              type="search"
              placeholder="search by name, edu, exp or #tag"
              value={props.searchQuery}
              onChange={handleSearchInputChange}
            />
            <ExclamationCircleOutlined className="icon" />
          </div>
        </div>
        <div className="menu">
          <Menu
            onClick={onClick}
            className="menu_list"
            // style={{ width: "300px" }}
            
            mode="inline"
            items={items}
          />
        </div>
      </div>
    </div>
  );
}

export default SideFilter;
