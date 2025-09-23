import React from "react";
import type { Metadata } from "next";

const title = "Explore $XOC Use Cases | Mexican DeFi Directory";
const description =
  "Discover modern, real-world $XOC use cases across lending, liquidity, payments, streaming, and governance.";

export const metadata: Metadata = {
  title,
  description,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function DirectoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
