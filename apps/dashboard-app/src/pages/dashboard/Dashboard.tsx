import IncreaseSaleCard from "@/features/dashboard/IncreaseSaleCard";
import SaleTargetCard from "@/features/dashboard/SaleTargetCard";
import SaleThisYearCard from "@/features/dashboard/SaleThisYearCard";
import TotalCard from "@/features/dashboard/TotalCard";
import PopularProduct from "@/features/products/PopularProduct";

const Dashboard = () => {
  return (
    <div className="space-y-5">
      <h1 className=" text-xl font-semibold">Dashboard</h1>
      <div className="grid grid-cols-2 gap-x-5">
        <SaleTargetCard
          title="Sales target"
          progressNumber="231,032,444"
          targetNumber="500,000,00"
        />
        <div className="grid grid-cols-2 gap-5">
          <TotalCard title="Revenue" number="$81.000" />
          <TotalCard title="Customer" number="5.000" />
          <TotalCard title="Transactions" number="12.000" />
          <TotalCard title="Product" number="5.000" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-5">
        <SaleThisYearCard />
        <IncreaseSaleCard />
      </div>
      <PopularProduct />
    </div>
  );
};

export default Dashboard;
