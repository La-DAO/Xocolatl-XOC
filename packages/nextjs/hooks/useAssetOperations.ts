import { useState } from "react";
import { Asset } from "@/types/assets/assets";

/**
 * Custom hook for managing asset operations.
 * Manages assets and user's assets (yourAssets), handles modal state, and performs actions (borrow or supply).
 * @param initialAssets Initial list of assets.
 * @param initialYourAssets Initial list of user's assets.
 * @returns Object with state variables and functions for asset operations.
 */
const useAssetOperations = (initialAssets: Asset[], initialYourAssets: Asset[]) => {
  // State variables for managing assets, user's assets, modal state, selected asset, transfer amount, and action type
  const [assets, setAssets] = useState<Asset[]>(initialAssets);
  const [yourAssets, setYourAssets] = useState<Asset[]>(initialYourAssets);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [transferAmount, setTransferAmount] = useState<number>(0);
  const [isAction, setIsAction] = useState(true); // True for borrow, false for supply

  /**
   * Opens the modal for the selected asset and action type.
   * @param asset The asset to operate on.
   * @param isAction Whether the action is borrow (true) or supply (false).
   */
  const openModal = (asset: Asset, isAction: boolean) => {
    setSelectedAsset(asset);
    setTransferAmount(asset.amount || asset.walletBalance || 0); // Initialize transfer amount
    setIsAction(isAction);
    setIsModalOpen(true);
  };

  /**
   * Closes the modal and resets selected asset state.
   */
  const closeModal = () => {
    setSelectedAsset(null);
    setIsModalOpen(false);
  };

  /**
   * Handles the confirmation of the action (borrow or supply) with the specified amount.
   * @param amount The amount to borrow or supply.
   */
  const handleConfirm = (amount: number) => {
    if (isAction) {
      handleAction(amount); // Perform borrow action
    } else {
      handleOppositeAction(amount); // Perform supply action
    }
  };

  /**
   * Handles the borrow action for the selected asset.
   * @param amount The amount to borrow.
   */
  const handleAction = (amount: number) => {
    if (!selectedAsset) return;

    if (selectedAsset.walletBalance !== undefined) {
      // Update for Supply
      const updatedAssets = assets.map(a => {
        if (a.asset === selectedAsset.asset) {
          return { ...a, walletBalance: (a.walletBalance || 0) - amount };
        }
        return a;
      });
      setAssets(updatedAssets);

      // Update for Your Assets
      const existingAssetInYourAssets = yourAssets.find(a => a.asset === selectedAsset.asset);
      if (existingAssetInYourAssets) {
        const updatedYourAssets = yourAssets.map(a => {
          if (a.asset === selectedAsset.asset) {
            return { ...a, balance: (a.balance || 0) + amount };
          }
          return a;
        });
        setYourAssets(updatedYourAssets);
      } else {
        const updatedYourAssets = [...yourAssets, { ...selectedAsset, balance: amount }];
        setYourAssets(updatedYourAssets);
      }
    } else {
      // Update for Borrow
      const updatedAssets = assets.map(a => {
        if (a.asset === selectedAsset.asset) {
          return { ...a, amount: (a.amount || 0) - amount };
        }
        return a;
      });
      setAssets(updatedAssets);

      // Update for Your Assets
      const existingAssetInYourAssets = yourAssets.find(a => a.asset === selectedAsset.asset);
      if (existingAssetInYourAssets) {
        const updatedYourAssets = yourAssets.map(a => {
          if (a.asset === selectedAsset.asset) {
            return { ...a, amount: (a.amount || 0) + amount };
          }
          return a;
        });
        setYourAssets(updatedYourAssets);
      } else {
        const updatedYourAssets = [...yourAssets, { ...selectedAsset, amount: amount }];
        setYourAssets(updatedYourAssets);
      }
    }

    closeModal(); // Close modal after action
  };

  /**
   * Handles the opposite action (repay or withdraw) for the selected asset.
   * @param amount The amount to repay or withdraw.
   */
  const handleOppositeAction = (amount: number) => {
    if (!selectedAsset) return;

    if (selectedAsset.walletBalance !== undefined) {
      // Update for Supply
      const updatedYourAssets = yourAssets
        .map(a => {
          if (a.asset === selectedAsset.asset) {
            return { ...a, balance: (a.balance || 0) - amount };
          }
          return a;
        })
        .filter(a => a.balance! > 0);
      setYourAssets(updatedYourAssets);

      // Update for Assets
      const existingAssetInAssets = assets.find(a => a.asset === selectedAsset.asset);
      if (existingAssetInAssets) {
        const updatedAssets = assets.map(a => {
          if (a.asset === selectedAsset.asset) {
            return { ...a, walletBalance: (a.walletBalance || 0) + amount };
          }
          return a;
        });
        setAssets(updatedAssets);
      } else {
        const updatedAssets = [...assets, { ...selectedAsset, walletBalance: amount }];
        setAssets(updatedAssets);
      }
    } else {
      // Update for Borrow
      const updatedYourAssets = yourAssets
        .map(a => {
          if (a.asset === selectedAsset.asset) {
            return { ...a, amount: (a.amount || 0) - amount };
          }
          return a;
        })
        .filter(a => a.amount! > 0);
      setYourAssets(updatedYourAssets);

      // Update for Assets
      const existingAssetInAssets = assets.find(a => a.asset === selectedAsset.asset);
      if (existingAssetInAssets) {
        const updatedAssets = assets.map(a => {
          if (a.asset === selectedAsset.asset) {
            return { ...a, amount: (a.amount || 0) + amount };
          }
          return a;
        });
        setAssets(updatedAssets);
      } else {
        const updatedAssets = [...assets, { ...selectedAsset, amount: amount }];
        setAssets(updatedAssets);
      }
    }

    closeModal(); // Close modal after action
  };

  /**
   * Updates the user's assets (yourAssets) with the provided updated assets.
   * @param updatedAssets The updated assets array.
   */
  const updateYourAssets = (updatedAssets: Asset[]) => {
    setYourAssets(updatedAssets);
  };

  // Return state variables and functions for asset operations
  return {
    assets,
    yourAssets,
    isModalOpen,
    selectedAsset,
    transferAmount,
    isAction,
    openModal,
    closeModal,
    handleConfirm,
    setTransferAmount,
    updateYourAssets,
  };
};

export default useAssetOperations;
