"use client";

import React from "react";
import About from "./components/About";
import { NextPage } from "next";
import CDPStats from "~~/app/cdp/components/CDPStats";
import Deposits from "~~/app/cdp/components/Deposits";

// Dashboard component that shows the user's lending and borrowing data
const CDP: NextPage = () => {
  return (
    <div className="flex flex-col">
      <CDPStats />
      <div className="grid gap-4 w-4/5 m-auto mt-4">
        <Deposits />
        <About />
      </div>
    </div>
  );
};

export default CDP;
