"use client";

import React, { useState } from "react";
import AssetsToSupply from "./components/AssetsToSupply";
import YourSupplies from "./components/YourSupplies";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Lending = () => {
  const [isYourSuppliesVisible, setIsYourSuppliesVisible] = useState(true);
  const [isAssetsToSupplyVisible, setIsAssetsToSupplyVisible] = useState(true);

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-4">
        {/* Your Supplies */}
        <div className="table-background rounded-xl p-8 flex flex-col">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="general-text-color">Your supplies</h1>
              {isYourSuppliesVisible}
            </div>
            <button
              onClick={() => setIsYourSuppliesVisible(prev => !prev)}
              className="general-text-color focus:outline-none"
            >
              {isYourSuppliesVisible ? (
                <FontAwesomeIcon icon={faChevronUp} />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} />
              )}
            </button>
          </div>
          {isYourSuppliesVisible && <YourSupplies />}
        </div>

        {/* Assets to Supply */}
        <div className="table-background rounded-xl p-8 flex flex-col">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="general-text-color">Assets to supply</h1>
              {isAssetsToSupplyVisible && (
                <p className="subtitles-gray-color">Select the asset to deposit as collateral</p>
              )}
            </div>
            <button
              onClick={() => setIsAssetsToSupplyVisible(prev => !prev)}
              className="general-text-color focus:outline-none"
            >
              {isAssetsToSupplyVisible ? (
                <FontAwesomeIcon icon={faChevronUp} />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} />
              )}
            </button>
          </div>
          {isAssetsToSupplyVisible && <AssetsToSupply />}
        </div>
      </div>
    </div>
  );
};

export default Lending;
