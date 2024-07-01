import { NextPage } from "next";
import Borrows from "~~/app/lending/components/Borrows";
import ProfileStats from "~~/app/lending/components/ProfileStats";
import Supplies from "~~/app/lending/components/Supplies";

const Dashboard: NextPage = () => {
  return (
    <div className="flex flex-col">
      <ProfileStats />
      <div className="grid grid-cols-2 gap-4 w-4/5 m-auto mt-4">
        <Supplies />
        <Borrows />
      </div>
    </div>
  );
};

export default Dashboard;
