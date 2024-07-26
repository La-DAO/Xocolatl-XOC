import React, { useState } from "react";
import CollateralModal from "./modals/CollateralModalStatus";
import { Address } from "viem";

/**
 * Props for the CollateralToggle component.
 */
interface CollateralToggleProps {
  assetAddress: Address;
  initialUseAsCollateral: boolean;
}

/**
 * Component for toggling collateral status of a reserve asset.
 * @param {Address} assetAddress - The address of the asset.
 * @param {boolean} initialUseAsCollateral - Initial collateral status.
 */
const CollateralToggle: React.FC<CollateralToggleProps> = ({
  assetAddress,
  initialUseAsCollateral: initialCollateral,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [initialUseAsCollateral, setInitialUseAsCollateral] = useState(initialCollateral);

  const handleToggle = () => {
    setShowModal(true); // Open the modal when the checkbox is toggled
  };

  const handleConfirm = () => {
    setInitialUseAsCollateral(!initialUseAsCollateral);
  };

  return (
    <div>
      <input
        type="checkbox"
        className="toggle-checkbox rounded-lg bg-gray-200 checked:bg-blue-500 w-6 h-6"
        id={`collateralToggle-${assetAddress}`}
        checked={initialUseAsCollateral} // Reflect initial state
        onChange={handleToggle} // Open the modal on change
      />
      <label className="toggle-label ml-2 text-gray-700" htmlFor={`collateralToggle-${assetAddress}`}></label>
      {showModal && (
        <CollateralModal
          assetAddress={assetAddress}
          initialUseAsCollateral={initialUseAsCollateral}
          onClose={() => setShowModal(false)} // Close the modal
          onConfirm={handleConfirm} // Handle confirmation
        />
      )}
    </div>
  );
};

export default CollateralToggle;
