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

// Defines the base interface for common modal properties.
interface ModalProps {
  asset: Asset | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (amount: number) => void;
}

// Props for a modal used to supply an asset.
export interface SupplyModalProps extends ModalProps {
  transferAmount: number;
  setTransferAmount: (amount: number) => void;
}

// Props for a modal used to borrow an asset.
export interface BorrowModalProps extends ModalProps {
  borrowAmount: number;
  setBorrowAmount: (amount: number) => void;
}

// For InfoTag component props
interface InfoTagProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}
