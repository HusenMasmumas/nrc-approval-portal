import { Card } from "antd";
import CardDashboard from "./Card";
import PopularRadio from "./PopularRadio";
import Table from "./Table";
import UpdateRequest from "./UpdateRequest";

const Dashboard = () => {
  return (
    <div>
      <CardDashboard />

      <div className="grid grid-cols-4 gap-4 pt-[18px] font-NotoSansThai">
        <div className="col-span-3">
          <Card>
            <div className="text-[18px] pb-[15px] ">รายการล่าสุด</div>

            <Table />
          </Card>
        </div>

        <div className="col-span-1 bg-white drop-shadow-sm rounded-[5px]">
          <div className="m-[20px]  ">
            <UpdateRequest />
          </div>
        </div>
      </div>
      <PopularRadio />
    </div>
  );
};

export default Dashboard;
