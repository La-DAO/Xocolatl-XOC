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
   * Updates assets or yourAssets based on the provided parameters.
   * @param list The list to update (assets or yourAssets).
   * @param assetKey The key to identify the asset (walletBalance or amount).
   * @param assetName The name of the asset.
   * @param amount The amount to update.
   * @param isAddition Whether to add (true) or subtract (false) the amount.
   */
  const updateAssetList = (
    list: Asset[],
    assetKey: "walletBalance" | "amount" | "balance",
    assetName: string,
    amount: number,
    isAddition: boolean,
  ): Asset[] => {
    return list.map(asset => {
      if (asset.asset === assetName) {
        return { ...asset, [assetKey]: isAddition ? (asset[assetKey] || 0) + amount : (asset[assetKey] || 0) - amount };
      }
      return asset;
    });
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
   * Handles the borrow or supply action for the selected asset.
   * @param amount The amount to borrow or supply.
   */
  const handleAction = (amount: number) => {
    if (!selectedAsset) return;

    const assetKey = selectedAsset.walletBalance !== undefined ? "walletBalance" : "amount";

    setAssets(prevAssets => updateAssetList(prevAssets, assetKey, selectedAsset.asset, amount, false));
    setYourAssets(prevYourAssets => {
      const updatedYourAssets = updateAssetList(
        prevYourAssets,
        assetKey === "walletBalance" ? "balance" : "amount",
        selectedAsset.asset,
        amount,
        true,
      );
      if (!prevYourAssets.find(a => a.asset === selectedAsset.asset)) {
        updatedYourAssets.push({ ...selectedAsset, [assetKey === "walletBalance" ? "balance" : "amount"]: amount });
      }
      return updatedYourAssets;
    });

    closeModal(); // Close modal after action
  };

  /**
   * Handles the repay or withdraw action for the selected asset.
   * @param amount The amount to repay or withdraw.
   */
  const handleOppositeAction = (amount: number) => {
    if (!selectedAsset) return;

    const assetKey = selectedAsset.walletBalance !== undefined ? "walletBalance" : "amount";

    setYourAssets(prevYourAssets =>
      updateAssetList(
        prevYourAssets,
        assetKey === "walletBalance" ? "balance" : "amount",
        selectedAsset.asset,
        amount,
        false,
      ),
    );
    setAssets(prevAssets => {
      const updatedAssets = updateAssetList(prevAssets, assetKey, selectedAsset.asset, amount, true);
      if (!prevAssets.find(a => a.asset === selectedAsset.asset)) {
        updatedAssets.push({ ...selectedAsset, [assetKey]: amount });
      }
      return updatedAssets;
    });

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
