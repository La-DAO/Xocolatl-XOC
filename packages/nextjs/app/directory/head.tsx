export default function Head() {
  const title = "Explore $XOC Use Cases | Mexican DeFi Directory";
  const description = "Discover modern, real-world $XOC use cases across lending, liquidity, payments, streaming, and governance.";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
}


