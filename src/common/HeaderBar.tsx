import React from "react";
import { Plus } from "lucide-react";

interface HeaderBarProps {
  label: string;
  onPlusClick?: () => void;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ label, onPlusClick }) => {
  return (
    <div
      className="relative flex items-center h-10 border border-b-[#32908f]"
      style={{ minWidth: 180 }}
    >
      <div
        className="relative flex items-center px-4 py-2 text-white font-bold text-base uppercase shadow-lg"
        style={{
          background: "linear-gradient(90deg, #32908f 80%, transparent 100%)",
          boxShadow: "0 0 12px 2px #0ff, 0 0 24px 2px #0ff33",
          clipPath: "polygon(0 0, 90% 0, 100% 100%, 10% 100%, 0 60%)",
        }}
      >
        <div className="absolute top-[-18px] left-[-2px] w-6 h-8 red rotate-35 origin-top-left bg-white"></div>
        <span className="mr-2 tracking-wide">{label}</span>
        <button
          className="flex items-center justify-center w-6 h-6 border border-white rounded-full ml-2 hover:bg-white/10 transition"
          onClick={onPlusClick}
          aria-label="Add"
          type="button"
        >
          <Plus size={18} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default HeaderBar;
