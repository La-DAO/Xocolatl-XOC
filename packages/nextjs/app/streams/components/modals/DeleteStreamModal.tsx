import React, { useState } from "react";
import { useTranslation } from "../../../context/LanguageContext";
import { Address } from "viem";
import { useAccount, useWriteContract } from "wagmi";
import { forwarderABI } from "~~/app/components/abis/ForwarderContract";

interface DeleteStreamModalProps {
  isOpen: boolean;
  onClose: () => void;
  stream: {
    id: string;
    name: string;
    to: string;
    flowRate: number;
    rawData: any;
  } | null;
}

export default function DeleteStreamModal({ isOpen, onClose, stream }: DeleteStreamModalProps) {
  const { t } = useTranslation();
  const { address: accountAddress } = useAccount();
  const { writeContract, isPending } = useWriteContract();
  const [confirmation, setConfirmation] = useState("");

  const handleDelete = async () => {
    if (!stream || !accountAddress) return;

    try {
      const tx = await writeContract({
        abi: forwarderABI,
        address: "0xcfA132E353cB4E398080B9700609bb008eceB125",
        functionName: "deleteFlow",
        args: [
          "0xedF89f2612a5B07FEF051e1a0444342B5410C405",
          accountAddress as Address,
          stream.to as Address, // Receiver address from stream data
          "0x",
        ],
      });

      console.log("Delete stream transaction:", tx);
      onClose();
      setConfirmation("");
    } catch (error) {
      console.error("Error deleting stream:", error);
    }
  };

  if (!isOpen || !stream) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg text-red-600 mb-4">⚠️ {t("StreamsDeleteStream")}</h3>

        <div className="space-y-4">
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            <p className="text-sm text-red-700 dark:text-red-300 mb-2">{t("StreamsDeleteWarning")}</p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>{t("StreamsStreamName")}:</strong> {stream.name}
              </p>
              <p>
                <strong>{t("StreamsReceiver")}:</strong> {stream.to.slice(0, 6)}...{stream.to.slice(-4)}
              </p>
              <p>
                <strong>{t("StreamsFlowRate")}:</strong> {stream.flowRate.toFixed(6)} XOC/month
              </p>
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-red-600 font-semibold">{t("StreamsTypeConfirmation")}</span>
            </label>
            <input
              type="text"
              placeholder={t("StreamsTypeDeleteToConfirm")}
              className="input input-bordered input-error"
              value={confirmation}
              onChange={e => setConfirmation(e.target.value)}
            />
          </div>

          <div className="flex gap-3 justify-end">
            <button className="btn btn-outline" onClick={onClose} disabled={isPending}>
              {t("StreamsCancel")}
            </button>
            <button className="btn btn-error" onClick={handleDelete} disabled={confirmation !== "DELETE" || isPending}>
              {isPending ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  {t("StreamsDeleting")}
                </>
              ) : (
                t("StreamsConfirmDelete")
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
