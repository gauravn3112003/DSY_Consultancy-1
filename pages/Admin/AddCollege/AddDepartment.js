import React from "react";
import AddCollegeDetails from "../AddCollegeDetails";
import Link from "next/link";

const Stepper = () => {
  return (
    <ol className="flex items-center w-full text-sm font-medium p-5 bg-white text-center text-gray-500 dark:text-gray-400 sm:text-base">
      <Link href="/Admin/AddCollege/CollegeDetail">
        <li className="flex md:w-full cursor-pointer items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
            <span className="mr-2">1</span>
            College <span className="hidden sm:inline-flex sm:ml-2">Info</span>
          </span>
        </li>
      </Link>
      <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
          <svg
            aria-hidden="true"
            className="w-4 h-4 mr-2 sm:w-5 sm:h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            ></path>
          </svg>
          Department <span className="hidden sm:inline-flex sm:ml-2">Info</span>
        </span>
      </li>

      <Link href="/Admin/AddCollege/Description">
        <li className="flex items-center cursor-pointer">
          <span className="mr-2">3</span>
          Description
        </li>
      </Link>
    </ol>
  );
};

const AddDepartment = () => {
  return (
    <AddCollegeDetails>
      <Stepper />
      <div className="w-full p-5 h-auto bg-white ">
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

        <div className="flex mb-4 flex-wrap bg sm:flex-nowrap">
          <div className="sm:w-1/2  mr-1 mb-2  w-full">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="CName"
            >
              Course Name
            </label>
            <input
              className=" bg-white border  outline-none w-full rounded-sm  py-2 px-3 text-grey-darker"
              type="text"
              placeholder="Enter Course name"
            />
          </div>
          <div className="sm:w-1/2   w-full">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="AFees"
            >
              Annual Fees
            </label>
            <input
              className=" bg-white w-full outline-none border rounded-sm  py-2 px-3 text-grey-darker"
              id="Afees"
              type="number"
              placeholder="Annual fees"
            />
          </div>
        </div>

        <div className="flex mb-4 flex-wrap bg sm:flex-nowrap">
          <div className="sm:w-1/2  mr-1 mb-2  w-full">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="CCode"
            >
              Choice Code
            </label>
            <input
              className=" bg-white border  outline-none w-full rounded-sm  py-2 px-3 text-grey-darker"
              type="text"
              placeholder="Enter Choice code"
            />
          </div>
          <div className="sm:w-1/2   w-full">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="CName"
            >
              College Name
            </label>
            <input
              className=" bg-white border  outline-none w-full rounded-sm  py-2 px-3 text-grey-darker"
              type="text"
              placeholder="Enter College name"
            />
          </div>
        </div>

        <div className="bg-slate-50 p-5  rounded-sm">
          <h1 className="text-sm font-bold">Category</h1>

        <div>
        <div className="w-52  rounded-sm bg-white mt-5 p-3 ">
            <h3 className="font-semibold text-sm mb-3 ">OPEN</h3>
            <div className="grid grid-cols-2 gap-2">
              <input type="text" placeholder="Category" name="" className="text-xs px-2 py-1 outline-none border rounded-sm " />
              <input type="text" placeholder="Annual fees" name="" className="text-xs px-2 py-1 outline-none border rounded-sm " />
              <input type="text" placeholder="Min" name="" className="text-xs px-2 py-1 outline-none border rounded-sm " />
              <input type="text" placeholder="Max" name="" className="text-xs px-2 py-1 outline-none border rounded-sm " />
              <input type="text" placeholder="Seats" name="" className="text-xs px-2 py-1 outline-none border rounded-sm " />
            </div>

            
          </div>
        </div>
        </div>
      </div>
    </AddCollegeDetails>
  );
};

export default AddDepartment;
