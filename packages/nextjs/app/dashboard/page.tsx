import ProfileStats from "./_components/ProfileStats";
import { NextPage } from "next";

const Dashboard: NextPage = () => {
  return (
    <div className="flex flex-col">
      <ProfileStats />
    </div>
  );
};

export default Dashboard;
