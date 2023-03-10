
import React, { useState } from "react";

const CollegeUnder = ({ selectedCollegeUnder, onChangeUnder }) => {
  const checkBoxItem = ["Government", "Private"];

  return (
    <div className="  px-5 pb-5 grid grid-cols-2 gap-5">
      {checkBoxItem.map((item, index) => {
        return (
          <div className="flex gap-2    items-center" key={index}>
            <input
              type="checkbox"
              checked={selectedCollegeUnder.includes(item)}
              onChange={(e) => onChangeUnder(item, e.target.checked)}
            />
            <label className="text-xs">{item}</label>
          </div>
        );
      })}
    </div>
  );
};

export default CollegeUnder;