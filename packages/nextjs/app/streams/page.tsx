import React from "react";
import TokenConverter from "./components";

const StreamsPage: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "2rem",
      }}
    >
      <TokenConverter />
    </div>
  );
};

export default StreamsPage;
