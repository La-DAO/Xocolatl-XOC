// Represents an individual asset with optional and mandatory properties.
export interface Asset {
  asset: string;
  walletBalance?: number;
  balance?: number;
  apy: number;
  collateral?: boolean;
  available?: number;
  debt?: number;
  apyType?: string;
}

// Props for a component displaying a table of supplied assets.
export interface SupplyTableProps {
  assets: Asset[];
  isSupplied: boolean;
  onAction: (asset: Asset) => void;
}

// Props for a component displaying a table of borrowed assets.
export interface BorrowTableProps {
  assets: Asset[];
  isBorrowed: boolean;
}

// Props for a modal component used to supply an asset.
interface SupplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  asset: Asset | null;
}
