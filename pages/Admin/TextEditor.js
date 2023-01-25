import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import AddCollegeDetails from "./AddCollegeDetails";

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
      <Link href="/Admin/AddCollege/AddDepartment">
        <li className="flex md:w-full cursor-pointer items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
            <span className="mr-2">2</span>
            Department{" "}
            <span className="hidden sm:inline-flex sm:ml-2">Info</span>
          </span>
        </li>
      </Link>

      <Link href="/Admin/TextEditor">
        <li className="flex items-center cursor-pointer  text-blue-600 dark:text-blue-500">
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
          Description
        </li>
      </Link>
    </ol>
  );
};
// import { buttonList } from "suneditor-react";
const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const TextEditor = () => {
  const [valueText, setValueText] = useState("");

  function handleChange(content) {
    setValueText(content);
  }
  console.log("Content : " + valueText);
  return (
    <AddCollegeDetails>
      <Stepper />
      <div className=" container m-auto p-5 bg-white">
        <div className="">
          <div className="mb-5">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="InstituteCode"
            >
              Institute Code :
            </label>
            <input
              type="text"
              name="ChoicceCode"
              className="rounded px-2 py-1 bg-white  border"
            />
          </div>

          <SunEditor
            // value={valueText}
            onChange={handleChange}
            placeholder="Write brief information"
            height="100%"
          />
          <button type="submit" className="pBtn px-10 mt-5 py-3">
            Submit
          </button>
        </div>
        <div className="mt-7 bg-white p-5">
          <h1 className="font-semibold text-slate-400 mb-5">Preview</h1>
          <div dangerouslySetInnerHTML={{ __html: valueText }} />
        </div>
      </div>
    </AddCollegeDetails>
  );
};

export default TextEditor;
