import React from "react";

interface RadioGroupOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  options: RadioGroupOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value,
  onChange,
  className,
}) => {
  return (
    <div className={`flex items-center gap-4 ${className || ""}`}>
      {options.map((opt) => (
        <label
          key={opt.value}
          className="flex items-center space-x-1 cursor-pointer"
        >
          <input
            type="radio"
            name="filter"
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
            className="accent-white"
          />
          <span>{opt.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
