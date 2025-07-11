import React, { useState } from "react";
import { ChevronDown, Plus, Minus, Search, Watch, Info } from "lucide-react";
import RadioGroup from "./RadioGroup";
import HeaderBar from "./common/HeaderBar";

const initialLabels = [""];

const TargetSelector = () => {
  const [selectedGroup, setSelectedGroup] = useState("Both");
  const [searchText, setSearchText] = useState("");
  const [selectedCase, setSelectedCase] = useState("4 cases");
  const [labels, setLabels] = useState<string[]>(initialLabels);

  const onAdd = () => {
    setLabels((prev) => [...prev, ""]);
  };

  const handleLabelChange = (idx: number, value: string) => {
    setLabels((prev) => prev.map((l, i) => (i === idx ? value : l)));
  };

  const handleAddLabel = () => {
    setLabels((prev) => [...prev, ""]);
  };

  const handleRemoveLabel = (idx: number) => {
    setLabels((prev) =>
      prev.length > 1 ? prev.filter((_, i) => i !== idx) : prev
    );
  };

  const handleConfirm = () => {
    console.log({ selectedGroup, searchText, selectedCase, labels });
    alert("Confirmed! Check console for state.");
  };

  const handleCancel = () => {
    setSelectedGroup("Both");
    setSearchText("");
    setSelectedCase("4 cases");
    setLabels(initialLabels);
  };

  return (
    <div className="w-[350px] text-white p-4 shadow-lg font-sans">
      <HeaderBar label="Target" onPlusClick={onAdd} />

      <div className="flex bg-[#2e2e2e] items-center justify-between border border-gray-600 px-3 py-2 mb-2">
        <Search />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent text-white w-full outline-none placeholder-gray-400"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="ml-2 text-sm text-gray-400 whitespace-nowrap">
          CASE/
          <span className="text-white">
            <select
              value={selectedCase}
              onChange={(e) => setSelectedCase(e.target.value)}
              className="bg-transparent text-white outline-none"
            >
              <option>1 case</option>
              <option>2 cases</option>
              <option>3 cases</option>
              <option>4 cases</option>
            </select>
          </span>
        </div>
      </div>

      {/* Toggle Filter Options */}
      <div className="flex bg-[#2e2e2e] justify-between text-sm mb-2 p-2.5">
        <RadioGroup
          options={[
            { label: "Targets", value: "Targets" },
            { label: "Target Groups", value: "Target Groups" },
            { label: "Both", value: "Both" },
          ]}
          value={selectedGroup}
          onChange={setSelectedGroup}
        />
      </div>

      <div className="relative bg-[#383838] p-4 mb-4 rounded-md clip-diagonal shadow-md">
        <div className="absolute top-[-8px] left-[8px] w-3 h-6 rotate-45 origin-top-left bg-white z-10" />
        <div className="absolute bottom-[-8px] right-[8px] w-3 h-6 rotate-45 origin-bottom-right bg-white z-10" />
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-white flex items-center gap-1">
            OAKLAND GANGS <Info size={16} />
          </h3>
          <div className="text-sm text-white flex items-center gap-1">
            4 <Watch size={16} />
          </div>
        </div>
        <div className=" flex justify-start flex-col">
          <div className="text-sm text-gray-300 text-start">The Case Name</div>
          <div className="text-sm text-gray-300 text-start">4 Targets</div>
        </div>
      </div>

      <div className="bg-[#383838]">
        <div className="relative flex gap-2 p-4">
          <div className="absolute top-[-24px] right-[16px] w-3 h-6 red rotate-135 origin-bottom-right bg-white"></div>
          {labels.map((label, idx) => (
            <div className="flex-1 mb-2" key={idx}>
              <div className="text-xs text-gray-300 mb-1">LABEL:</div>
              <div className="flex items-center border border-gray-600 rounded-md px-2 py-1 bg-[#1e1e1e]">
                <input
                  className="bg-transparent text-sm text-white w-full outline-none"
                  placeholder="Text"
                  value={label}
                  onChange={(e) => handleLabelChange(idx, e.target.value)}
                />
                <Minus
                  className="text-white ml-2 cursor-pointer"
                  size={16}
                  onClick={() => handleRemoveLabel(idx)}
                />
                <Plus
                  className="text-white ml-2 cursor-pointer"
                  size={16}
                  onClick={handleAddLabel}
                />
              </div>
            </div>
          ))}
          {/* Example of dropdown label field (static) */}
          <div className="flex-1">
            <div className="text-xs text-gray-300 mb-1">LABEL:</div>
            <div className="flex items-center border border-gray-600 rounded-md px-2 py-1 bg-[#1e1e1e]">
              <input
                className="bg-transparent text-sm text-white w-full outline-none"
                placeholder="Text"
                disabled
              />
              <ChevronDown
                className="text-white ml-2 cursor-pointer"
                size={16}
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full  bg-[#000] relative clip-diagonal-transition border border-black">
          <div className="flex items-end gap-2 justify-end  p-2">
            <button
              className="px-4 py-2 text-white bg-transparent border border-transparent hover:bg-gray-700 rounded-md"
              onClick={handleCancel}
            >
              CANCEL
            </button>
            <button
              className="clip-top-left px-10 h-15 py-2 !bg-[#32908f] text-white font-bold hover:bg-cyan-400"
              onClick={handleConfirm}
            >
              CONFIRM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetSelector;
