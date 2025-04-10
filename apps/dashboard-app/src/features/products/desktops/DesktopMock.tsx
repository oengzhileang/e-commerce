// productColumns.ts
import { ProductsType } from "../types/Product.type";
import { Space, Tag, TableColumnsType } from "antd";
import macBookImage from "@/assets/images/mac_book.png";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

export const Desktopscolumns: TableColumnsType<ProductsType> = [
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (image) => (
      <img
        src={image}
        alt="product"
        style={{ width: 50, height: 50, objectFit: "contain" }}
      />
    ),
  },
  {
    title: "Model",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Price ($)",
    dataIndex: "price",
    key: "price",
    render: (price) => `$${price.toFixed(2)}`,
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Stock",
    dataIndex: "stock",
    key: "stock",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => {
      let color = "green";
      if (status === "low stock") color = "orange";
      if (status === "out of stock") color = "red";
      return <Tag color={color}>{status.toUpperCase()}</Tag>;
    },
  },
  {
    title: "Tags",
    dataIndex: "tags",
    key: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          const color = tag === "bestseller" ? "gold" : "blue";
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <a>
          <EyeOutlined />
        </a>
        <a>
          <EditOutlined />
        </a>
        <a>
          <DeleteOutlined />
        </a>
      </Space>
    ),
  },
];

export const DesktopsMock: ProductsType[] = [
  {
    key: "1",
    name: "HP Pavilion Gaming",
    image: macBookImage,
    price: 799.99,
    category: "Desktop",
    stock: 3,
    status: "low stock",
    tags: ["gaming", "featured"],
  },
  {
    key: "2",
    name: "CyberPowerPC Gamer Xtreme VR",
    image: macBookImage,
    price: 1199.99,
    category: "Desktop",
    stock: 12,
    status: "in stock",
    tags: ["gaming", "VR-ready"],
  },
  {
    key: "3",
    name: "iBUYPOWER TraceMR",
    image: macBookImage,
    price: 899.99,
    category: "Desktop",
    stock: 0,
    status: "out of stock",
    tags: ["RGB", "featured"],
  },
  {
    key: "4",
    name: "Lenovo Legion T5",
    image: macBookImage,
    price: 1099.99,
    category: "Desktop",
    stock: 8,
    status: "in stock",
    tags: ["gaming", "performance"],
  },
  {
    key: "5",
    name: "Acer Aspire TC",
    image: macBookImage,
    price: 649.99,
    category: "Desktop",
    stock: 6,
    status: "low stock",
    tags: ["budget", "compact"],
  },
];
