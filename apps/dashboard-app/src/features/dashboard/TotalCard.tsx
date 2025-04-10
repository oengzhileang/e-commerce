import React from "react";
import { RiseOutlined } from "@ant-design/icons";

interface TotalCardProps {
  title: string;
  number: string;
}
const TotalCard: React.FC<TotalCardProps> = (props) => (
  <div className="rounded-4xl border border-gray-200 p-5 bg-white">
    <div className="flex flex-col space-y-5">
      <div className="flex justify-between">
        <p>Total {props.title}</p>
        <RiseOutlined />
      </div>
      <div>
        <p>{props.number}</p>
      </div>
    </div>
  </div>
);

export default TotalCard;
