import { Table, TableColumnsType } from "antd";
import { ProductsType } from "@/features/products/types/Product.type";
interface TablessProps {
  columns: TableColumnsType<ProductsType>;
  data: ProductsType[];
}

const Tabless: React.FC<TablessProps> = ({ columns, data }) => (
  <Table className="overflow-auto h-full" columns={columns} dataSource={data} />
);

export default Tabless;
