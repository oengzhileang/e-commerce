import Tabless from "@/components/Table";
import {
  columnsProductsMock,
  PopularProductMock,
} from "@/utils/mock-data/PopularProductsMock";
const PopularProduct = () => {
  return (
    <div className="space-y-5  rounded-lg border p-2">
      <h1 className="text-xl">Most Popular Products</h1>
      <Tabless columns={columnsProductsMock} data={PopularProductMock} />
    </div>
  );
};

export default PopularProduct;
