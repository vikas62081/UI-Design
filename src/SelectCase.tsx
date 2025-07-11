import React from "react";

interface SelectCaseOption {
  value: string;
  label: string;
}

interface SelectCaseProps {
  options: SelectCaseOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const SelectCase: React.FC<SelectCaseProps> = ({
  options,
  value,
  onChange,
  className,
}) => {
  return (
    <div className={`relative ${className || ""}`}>
      <select
        className="appearance-none bg-transparent text-xs font-bold text-gray-300 pr-6 pl-1 py-1 focus:outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="text-gray-900">
            {opt.label}
          </option>
        ))}
      </select>
      <span className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
        ▼
      </span>
    </div>
  );
};

export default SelectCase;
