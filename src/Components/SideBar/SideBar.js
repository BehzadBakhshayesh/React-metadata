import React,{Fragment} from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { HomeOutlined,ShoppingCartOutlined,UserOutlined, BarChartOutlined } from "@ant-design/icons";
import "./SideBar.scss";

const menuItems = [
  {
    id: 1,
    title: "داشبورد",
    route: "/",
    icon: <HomeOutlined />,
  },
  {
    id: 2,
    title: "سفارش ها",
    route: "/orders",
    icon: <ShoppingCartOutlined />,
  },
  {
    id: 3,
    title: "مشتریان",
    route: "/customers",
    icon: <UserOutlined />,
  },
  {
    id: 4,
    title: "گزارش ها",
    route: "/reports",
    icon: <BarChartOutlined />,
  },
];

const SideBar = () => {
  return (
    <>
      <div className="SideBar">
        <Menu
          className="Menu"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
        >
          {menuItems.map(({ id, title, route, icon }) => (
            <Fragment key={id}>
              <Menu.Item key={id} icon={icon}>
                <Link to={route}>{title}</Link>
              </Menu.Item>
            </Fragment>
          ))}
        </Menu>
      </div>
    </>
  );
};

export default SideBar;
