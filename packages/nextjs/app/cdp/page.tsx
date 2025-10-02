"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { NextPage } from "next";

// Lightweight skeletons for initial paint
const SectionSkeleton: React.FC = () => <div className="animate-pulse rounded-lg bg-base-200 h-24" />;

// Dynamically import heavy components to reduce initial JS
const CDPStats = dynamic(() => import("~~/app/cdp/components/CDPStats"), {
  ssr: false,
  loading: () => <SectionSkeleton />,
});

const Deposits = dynamic(() => import("~~/app/cdp/components/Deposits"), {
  ssr: false,
  loading: () => <SectionSkeleton />,
});

const CDPInfo = dynamic(() => import("./components/CDPInfo"), {
  ssr: false,
  loading: () => <SectionSkeleton />,
});

// Dashboard component that shows the user's lending and borrowing data
const CDP: NextPage = () => {
  return (
    <div className="flex flex-col">
      <Suspense fallback={<SectionSkeleton />}>
        <CDPStats />
      </Suspense>
      <div className="grid gap-4 w-4/5 m-auto mt-4">
        <Suspense fallback={<SectionSkeleton />}>
          <Deposits />
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<SectionSkeleton />}>
          <CDPInfo />
        </Suspense>
      </div>
    </div>
  );
};

export default CDP;
