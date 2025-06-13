import React from "react";
import Flows from "./components/Flows";
import TokenConverter from "./components/Supertokens";

const StreamsPage: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "2rem",
      }}
    >
      <TokenConverter />
      <Flows />
    </div>
  );
};

export default StreamsPage;
