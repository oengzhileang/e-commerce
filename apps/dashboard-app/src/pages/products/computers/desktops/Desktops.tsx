import Tabless from "@/components/Table";
import {
  Desktopscolumns,
  DesktopsMock,
} from "@/features/products/desktops/DesktopMock";
import SearchBox from "@/components/SearchBox";
import { Button } from "antd";
const Desktops = () => {
  return (
    <div className="space-y-5">
      <h1 className="text-xl font-semibold">Desktops</h1>
      <div className="flex justify-between">
        <SearchBox placeholder="Search computer" />
        <Button type="primary">New Product +</Button>
      </div>
      <Tabless columns={Desktopscolumns} data={DesktopsMock} />
    </div>
  );
};

export default Desktops;
