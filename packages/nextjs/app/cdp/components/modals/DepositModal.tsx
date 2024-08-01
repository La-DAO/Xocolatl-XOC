import React, { useState } from "react";

const DepositModal: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);

  return (
    <div className="modal">
      <h2>Deposit Modal</h2>
      <input type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} />
      <button>Deposit</button>
    </div>
  );
};

export default DepositModal;
