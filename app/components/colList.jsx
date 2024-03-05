import React from "react";

const ColList = ({ text, value }) => {
  return (
    <div className="w-full p-2 flex justify-between items-center gap-1 border border-gray-300 border-opacity-20">
      <span className="text-[12px] text-gray-50">{text}</span>
      <span className="text-[12px] text-gray-300">{value}</span>
    </div>
  );
};

export default ColList;