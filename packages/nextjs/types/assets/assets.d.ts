// Represents an individual asset with optional and mandatory properties.
export interface Asset {
  asset: string;
  walletBalance?: number;
  walletBalanceConverted?: number;
  balance?: number;
  amount?: number;
  amountConverted?: number;
  apy: number;
  apyType?: string;
  borrowRate: number;
  isIsolated?: boolean;
  collateral?: boolean;
  debt?: number;
  apyType?: string;
}

// Defines the base interface for common table properties.
interface AssetTableProps {
  assets: Asset[];
  onAction: (asset: Asset) => void;
  onCollateralToggle?: (asset: Asset) => void;
}

// Props for a component displaying a table of supplied assets.
export interface SupplyTableProps extends AssetTableProps {
  isSupplied: boolean;
}

// Props for a component displaying a table of borrowed assets.
export interface BorrowTableProps extends AssetTableProps {
  isBorrowed: boolean;
}

// For InfoTag component props
interface InfoTagProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}
