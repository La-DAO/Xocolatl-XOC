"use client";

import React, { useState } from "react";
import AssetsToSupply from "./components/AssetsToSupply";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Lending = () => {
  const [isContentVisible, setIsContentVisible] = useState(true);

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-xl px-8 py-4 flex flex-col">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-amber-950 font-bold text-2xl">Assets to supply</h1>
              {isContentVisible && <p className="text-gray-500">Select the asset to deposit as collateral</p>}
            </div>
            <button onClick={() => setIsContentVisible(prev => !prev)} className="text-amber-950 focus:outline-none">
              {isContentVisible ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
            </button>
          </div>
          {isContentVisible && <AssetsToSupply />}
        </div>
      </div>
    </div>
  );
};

export default Lending;
