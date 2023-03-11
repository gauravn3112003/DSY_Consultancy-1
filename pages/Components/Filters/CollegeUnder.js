import React, { useState } from "react";
import { collegeByUnder } from "../Services/quieries";

const CollegeUnder = ({ data }) => {
  const [selectedCollegeUnder, setSelectedCollegeUnder] = useState([]);
  const collegeUnderhandler = (under, isChecked) => {
    isChecked
      ? setSelectedCollegeUnder((prevUnder) => [...prevUnder, under])
      : setSelectedCollegeUnder(
          selectedCollegeUnder.filter((und) => und !== under)
        );
  };

  const undercolleges = collegeByUnder(selectedCollegeUnder, data);
  console.log(undercolleges);

  const checkBoxItem = ["Government", "Private"];

  return (
    <div className="  px-5 pb-5 grid grid-cols-2 gap-5">
      {checkBoxItem.map((item, index) => {
        return (
          <div className="flex gap-2    items-center" key={index}>
            <input
              type="checkbox"
              checked={selectedCollegeUnder.includes(item)}
              onChange={(e) => collegeUnderhandler(item, e.target.checked)}
            />
            <label className="text-xs">{item}</label>
          </div>
        );
      })}
    </div>
  );
};

export default CollegeUnder;
