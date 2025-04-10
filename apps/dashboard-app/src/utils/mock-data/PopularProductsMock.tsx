// productColumns.ts
import { Tag, TableColumnsType } from "antd";
// import macBookImage from "@/assets/images/mac_book.png";
import { ProductsType } from "@/features/products/types/Product.type";
export const columnsProductsMock: TableColumnsType<ProductsType> = [
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
    title: "Product",
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
    title: "Sales",
    dataIndex: "sales",
    key: "sales",
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
];

export const PopularProductMock: ProductsType[] = [];
