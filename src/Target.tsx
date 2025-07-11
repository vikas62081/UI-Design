import React, { useState } from "react";
import { ChevronDown, Plus, Minus, Search, Watch, Info } from "lucide-react";
import RadioGroup from "./RadioGroup";

const TargetSelector = () => {
  const [selectedGroup, setSelectedGroup] = useState("");
  return (
    <div className="w-[350px] text-white p-4 shadow-lg font-sans">
      {/* Target Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="bg-cyan-500 text-xs font-bold px-3 py-1 rounded-tl-lg rounded-br-lg mr-2">
          TARGET
        </span>
        <button className="text-white text-xl font-bold">+</button>
      </div>

      {/* Search and Case Info */}
      <div className="flex bg-[#2e2e2e] items-center justify-between border border-gray-600 px-3 py-2 mb-2">
        <Search />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent text-white w-full outline-none placeholder-gray-400"
        />
        <div className="ml-2 text-sm text-gray-400 whitespace-nowrap">
          CASE/
          <span className="text-white">
            <select>
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
          value={""}
          onChange={function (value: string): void {
            setSelectedGroup(value);
          }}
        />
      </div>

      {/* Case Block */}
      <div className="relative bg-[#383838] p-4 mb-2 clip-diagonal">
        <div className="absolute top-[-8px] left-[8px] w-3 h-6 red rotate-45 origin-top-left bg-white"></div>
        <div className="absolute bottom-[-8px] right-[8px] w-3 h-6 red rotate-45 origin-bottom-right bg-white"></div>
        <div className="flex justify-between items-center mb-1">
          <h3 className="font-bold text-white">
            OAKLAND GANGS <Info />
          </h3>
          <div className="text-white text-sm">
            4 <Watch />
          </div>
        </div>
        <div className="text-sm text-gray-300">The Case Name</div>
        <div className="text-sm text-gray-300">4 Targets</div>
      </div>

      {/* Label Selectors */}
      <div className="bg-[#383838]">
        <div className="relative  flex gap-4 p-4">
          <div className="absolute top-[-24px] right-[16px] w-3 h-6 red rotate-135 origin-bottom-right bg-white"></div>
          <div className="flex-1">
            <div className="text-xs text-gray-300 mb-1">LABEL:</div>
            <div className="flex items-center border border-gray-600 rounded-md px-2 py-1 bg-[#1e1e1e]">
              <input
                className="bg-transparent text-sm text-white w-full outline-none"
                placeholder="Text"
              />
              <Minus className="text-white ml-2 cursor-pointer" size={16} />
              <Plus className="text-white ml-2 cursor-pointer" size={16} />
            </div>
          </div>
          <div className="flex-1">
            <div className="text-xs text-gray-300 mb-1">LABEL:</div>
            <div className="flex items-center border border-gray-600 rounded-md px-2 py-1 bg-[#1e1e1e]">
              <input
                className="bg-transparent text-sm text-white w-full outline-none"
                placeholder="Text"
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
            <button className="px-4 py-2 text-white bg-transparent border border-transparent hover:bg-gray-700 rounded-md">
              CANCEL
            </button>

            <button className=" clip-top-left px-10 h-15 py-2 text-black !bg-cyan-500 font-bold hover:bg-cyan-400">
              CONFIRM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetSelector;
