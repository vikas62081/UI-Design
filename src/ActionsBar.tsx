import React from "react";

interface ActionsBarProps {
  onCancel: () => void;
  onConfirm: () => void;
  confirmText?: string;
  cancelText?: string;
  className?: string;
}

const ActionsBar: React.FC<ActionsBarProps> = ({
  onCancel,
  onConfirm,
  confirmText = "CONFIRM",
  cancelText = "CANCEL",
  className,
}) => {
  return (
    <div className={`flex justify-end gap-4 ${className || ""}`}>
      <button
        className="px-6 py-2 rounded-none bg-black text-white font-semibold border-0 hover:bg-gray-800 transition"
        onClick={onCancel}
      >
        {cancelText}
      </button>
      <button
        className="px-8 py-2 rounded-none bg-cyan-400 text-black font-bold text-lg shadow-lg border-2 border-cyan-300 hover:bg-cyan-500 transition relative"
        style={{ boxShadow: "4px 4px 0 #222" }}
        onClick={onConfirm}
      >
        {confirmText}
      </button>
    </div>
  );
};

export default ActionsBar;
