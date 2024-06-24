import Borrows from "./_components/Borrows";
import ProfileStats from "./_components/ProfileStats";
import { NextPage } from "next";

const Dashboard: NextPage = () => {
  return (
    <div className="flex flex-col">
      <ProfileStats />
      <div className="grid grid-cols-2 gap-4 w-3/5 m-auto mt-4">
        <Borrows />
        <Borrows />
        <Borrows />
        <Borrows />
      </div>
    </div>
  );
};

export default Dashboard;
