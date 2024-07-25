import React, { useEffect, useState } from "react";
import useWriteContract from "@/hooks/useWriteContract";
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
const CollateralToggle: React.FC<CollateralToggleProps> = ({ assetAddress, initialUseAsCollateral }) => {
  const { handleSetUserUseReserveAsCollateral, isError, error, data } = useWriteContract();
  const [useAsCollateral, setUseAsCollateral] = useState(initialUseAsCollateral);

  useEffect(() => {
    setUseAsCollateral(initialUseAsCollateral);
  }, [initialUseAsCollateral]);

  const toggleCollateral = async () => {
    try {
      await handleSetUserUseReserveAsCollateral(assetAddress, !useAsCollateral);
      setUseAsCollateral(!useAsCollateral);
    } catch (err) {
      console.error("Error toggling collateral:", err);
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        className="toggle-checkbox"
        id={`collateralToggle-${assetAddress}`}
        checked={useAsCollateral}
        onChange={toggleCollateral}
      />
      <label className="toggle-label" htmlFor={`collateralToggle-${assetAddress}`}></label>
      {isError && <p className="text-red-500">Error occurred while setting collateral: {error?.message}</p>}
      {data && <p className="text-green-500">Transaction successful: {JSON.stringify(data)}</p>}
    </div>
  );
};

export default CollateralToggle;
