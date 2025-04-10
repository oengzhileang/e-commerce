// productColumns.ts
import { ProductsType } from "../types/Product.type";
import { Space, Tag, TableColumnsType } from "antd";
import macBookImage from "@/assets/images/mac_book.png";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

export const Laptopcolumns: TableColumnsType<ProductsType> = [
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

export const LaptopsMock: ProductsType[] = [
  {
    key: "1",
    name: "Dell XPS 13",
    image: macBookImage,
    price: 999.99,
    category: "Laptop",
    stock: 15,
    status: "in stock",
    tags: ["bestseller", "ultrabook"],
  },
  {
    key: "2",
    name: "Apple MacBook Pro M3",
    image: macBookImage,
    price: 1999.99,
    category: "Laptop",
    stock: 0,
    status: "out of stock",
    tags: ["new", "premium"],
  },
  {
    key: "3",
    name: "Asus ROG Zephyrus G14",
    image: macBookImage,
    price: 1499.99,
    category: "Laptop",
    stock: 7,
    status: "low stock",
    tags: ["gaming", "bestseller"],
  },
  {
    key: "4",
    name: "Microsoft Surface Laptop 5",
    image: macBookImage,
    price: 1299.99,
    category: "Laptop",
    stock: 10,
    status: "in stock",
    tags: ["ultrabook", "touchscreen"],
  },
  {
    key: "5",
    name: "Acer Swift X",
    image: macBookImage,
    price: 1099.99,
    category: "Laptop",
    stock: 5,
    status: "low stock",
    tags: ["creator", "lightweight"],
  },
];
