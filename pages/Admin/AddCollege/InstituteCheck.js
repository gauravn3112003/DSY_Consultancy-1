import React from "react";

const InstituteCheck = () => {
  return (
    <div>
      <div className="mb-5 ">
        <div>
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="InstituteCode"
          >
            Institute Code :
          </label>
          <input
            placeholder="Ex. 1001"
            type="text"
            name="ChoicceCode"
            className="  rounded-sm outline-none  px-2 py-1 bg-white  border"
          />
          <button
            type="button"
            className="bg-red-500 px-5 text-white text-base font-semibold py-1 ml-5"
          >
            Check
          </button>
        </div>
        <div className="text-xs mt-2 text-red-700 font-semibold  ">
          Institute already Exists
        </div>
      </div>
    </div>
  );
};

export default InstituteCheck;
