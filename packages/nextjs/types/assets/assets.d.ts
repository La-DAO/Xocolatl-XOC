// Represents an individual asset with optional and mandatory properties.
export interface Asset {
  asset: string;
  walletBalance?: string;
  balance?: string;
  apy: string;
  collateral?: boolean;
  available?: string;
  debt?: string;
  apyType?: string;
}

// Props for a component displaying a table of supplied assets.
export interface SupplyTableProps {
  assets: Asset[];
  isSupplied: boolean;
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
