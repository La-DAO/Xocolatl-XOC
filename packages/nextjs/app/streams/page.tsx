import React from "react";
import TokenConverter from "./components";

const StreamsPage: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <TokenConverter />
    </div>
  );
};

export default StreamsPage;
