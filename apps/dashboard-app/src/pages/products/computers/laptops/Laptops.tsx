import Tabless from "@/components/Table";
import {
  Laptopcolumns,
  LaptopsMock,
} from "@/features/products/laptops/LaptopMock";
import SearchBox from "@/components/SearchBox";
import { Button } from "antd";
const Laptops = () => {
  return (
    <div className="space-y-5">
      <h1 className="text-xl font-semibold">Laptops</h1>
      <div className="flex justify-between">
        <SearchBox placeholder="Search computer" />
        <Button type="primary">New Product +</Button>
      </div>
      <Tabless columns={Laptopcolumns} data={LaptopsMock} />
    </div>
  );
};

export default Laptops;
