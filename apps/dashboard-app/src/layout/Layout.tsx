import React, { useState } from "react";
import { Divider, Space, Typography } from "antd";
import {
  BellOutlined,
  MailOutlined,
  ShopOutlined,
  HomeOutlined,
  FileOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TeamOutlined,
  RiseOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import SearchBox from "@/components/SearchBox";
import { useNavigate, Outlet, useLocation } from "react-router-dom";

const { Header, Sider, Content } = Layout;
import type { MenuProps } from "antd";
import AvatarAdmin from "@/components/Avatar";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", "1", <HomeOutlined />),
  getItem("Products", "sub1", <ShopOutlined />, [
    getItem("Desktop", "2"),
    getItem("Laptop", "3"),
    getItem("Mouse", "4"),
    getItem("Keyboard", "5"),
  ]),
  getItem("Transaction", "6", <FileOutlined />),
  getItem("Customers", "6", <TeamOutlined />),
  getItem("Sale Report", "8", <RiseOutlined />),
];

const siderStyle: React.CSSProperties = {
  overflow: "auto",
  height: "100vh",
  position: "fixed", // Changed to "fixed" for better stickiness
  left: 0, // Use "left" instead of "insetInlineStart" for broader compatibility
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
};

const Layouttt = ({ children }: { children?: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    switch (e.key) {
      case "2":
        navigate("/products/desktops");
        break;
      case "3":
        navigate("/products/laptops");
        break;
      case "4":
        navigate("/products/keyboard");
        break;
      case "1":
        navigate("/");
        break;
      case "5":
        navigate("/transaction");
        break;
      case "6":
        navigate("/customers");
        break;
      case "7":
        navigate("/sale-report");
        break;
      default:
        navigate("/");
    }
  };

  const generateBreadcrumbItems = () => {
    const pathnames = location.pathname.split("/").filter((x) => x);
    const breadcrumbItems = [
      {
        href: "/",
        title: <HomeOutlined />,
      },
    ];

    pathnames.forEach((path, index) => {
      const href = `/${pathnames.slice(0, index + 1).join("/")}`;
      const title = path.charAt(0).toUpperCase() + path.slice(1);
      breadcrumbItems.push({
        href: index === pathnames.length - 1 ? "" : href,
        title: <span>{title}</span>,
      });
    });

    return breadcrumbItems;
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Ensure parent has height */}
      {/* Sidebar */}
      <Sider
        style={siderStyle}
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={200} // Optional: explicit width for consistency
      >
        <h1 className="text-white p-3">General</h1>
        <Menu
          onClick={onClick}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </Sider>
      <Layout
        style={{
          marginLeft: collapsed ? 80 : 200, // Adjust margin based on collapsed state
          transition: "margin-left 0.2s", // Smooth transition for collapsing
        }}
      >
        {/* Navbar */}
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
          }}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-5">
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "20px",
                  width: 60,
                  height: 60,
                }}
              />
              <SearchBox placeholder="Search product" />
            </div>
            <div className="mr-5">
              <Space split={<Divider type="vertical" />}>
                <Typography.Link className="space-x-3">
                  <MailOutlined className="bg-gray-200 text-white p-[10px] rounded-lg " />
                  <BellOutlined className="bg-gray-200 text-white p-[10px] rounded-lg " />
                </Typography.Link>
                <Typography.Link>
                  <div className="flex items-center gap-x-3">
                    <AvatarAdmin />
                    <div>
                      <p style={{ margin: 0 }}>Dracular Mihawk</p>
                      <p style={{ margin: 0 }}>Admin</p>
                    </div>
                  </div>
                </Typography.Link>
              </Space>
            </div>
          </div>
        </Header>

        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <Breadcrumb
            items={generateBreadcrumbItems()}
            style={{ marginBottom: 12 }}
          />
          <Outlet />
          <main
            style={{
              padding: 24,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </main>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Layouttt;
