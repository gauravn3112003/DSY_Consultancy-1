import HomeLayout from "directsecondyearadmission/Layout/HomeLayout";
import React, { useState } from "react";
import Link from "next/link";

const BasicDoc = () => {
  return (
    <div className="w-full ">
      <h1 className=" font-semibold text-lg mb-5">Document</h1>
      <div className=" flex w-full  gap-5 flex-wrap ">
        <div className="sm:w-48 w-full flex flex-row  sm:flex-col bg-slate-100 p-2 ">
          <div className="max-w-xl">
            <label className="flex justify-center sm:w-full mr-5 sm:mr-0 h-20 w-20 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-sm appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 pColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <span className="font-medium text-gray-600">
                  <span className="pColor "> Upload</span>
                </span>
              </span>
              <input type="file" name="file_upload" className="hidden" />
            </label>
          </div>
          <div>
            <h2 className="text-sm mt-5 font-semibold">10th Marksheet</h2>
            <p className="text-sm text-slate-400">
              File should be max 2mb and jpg, jpeg, png, pdf
            </p>
          </div>
        </div>
        <div className="sm:w-48 w-full flex flex-row  sm:flex-col bg-slate-100 p-2 ">
          <div className="max-w-xl">
            <label className="flex justify-center sm:w-full mr-5 sm:mr-0 h-20 w-20 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-sm appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 pColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <span className="font-medium text-gray-600">
                  <span className="pColor "> Upload</span>
                </span>
              </span>
              <input type="file" name="file_upload" className="hidden" />
            </label>
          </div>
          <div>
            <h2 className="text-sm mt-5 font-semibold">10th Marksheet</h2>
            <p className="text-sm text-slate-400">
              File should be max 2mb and jpg, jpeg, png, pdf
            </p>
          </div>
        </div>{" "}
        <div className="sm:w-48 w-full flex flex-row  sm:flex-col bg-slate-100 p-2 ">
          <div className="max-w-xl">
            <label className="flex justify-center sm:w-full mr-5 sm:mr-0 h-20 w-20 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-sm appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 pColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <span className="font-medium text-gray-600">
                  <span className="pColor "> Upload</span>
                </span>
              </span>
              <input type="file" name="file_upload" className="hidden" />
            </label>
          </div>
          <div>
            <h2 className="text-sm mt-5 font-semibold">10th Marksheet</h2>
            <p className="text-sm text-slate-400">
              File should be max 2mb and jpg, jpeg, png, pdf
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AddmissionDoc = () => {
  return (
    <div className="w-full ">
      <h1 className=" font-semibold text-lg mb-5">Document</h1>
      <div className=" flex w-full  gap-5 flex-wrap ">
        <div className="sm:w-48 w-full flex flex-row  sm:flex-col bg-slate-100 p-2 ">
          <div className="max-w-xl">
            <label className="flex justify-center sm:w-full mr-5 sm:mr-0 h-20 w-20 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-sm appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 pColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <span className="font-medium text-gray-600">
                  <span className="pColor "> Upload</span>
                </span>
              </span>
              <input type="file" name="file_upload" className="hidden" />
            </label>
          </div>
          <div>
            <h2 className="text-sm mt-5 font-semibold">12th Marksheet</h2>
            <p className="text-sm text-slate-400">
              File should be max 2mb and jpg, jpeg, png, pdf
            </p>
          </div>
        </div>
        <div className="sm:w-48 w-full flex flex-row  sm:flex-col bg-slate-100 p-2 ">
          <div className="max-w-xl">
            <label className="flex justify-center sm:w-full mr-5 sm:mr-0 h-20 w-20 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-sm appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 pColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <span className="font-medium text-gray-600">
                  <span className="pColor "> Upload</span>
                </span>
              </span>
              <input type="file" name="file_upload" className="hidden" />
            </label>
          </div>
          <div>
            <h2 className="text-sm mt-5 font-semibold">12th Marksheet</h2>
            <p className="text-sm text-slate-400">
              File should be max 2mb and jpg, jpeg, png, pdf
            </p>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};
const DocMsg = () => {
  return (
    <div className="bg-white border border-blue-600 shadow-inner  p-5 mb-5 flex sm:flex-row flex-col-reverse items-center  justify-between rounded-sm ">
      <div className="flex flex-col sm:w-2/4 w-full justify-around">
        <div>
          <p className="text-base font-semibold">
            Securely access your documents anywhere, anytime.
          </p>
          <p className="text-sm mt-3 text-slate-400">
            Upload the documents listed below to build your profile that will
            help us serve you better
          </p>
        </div>
      </div>

      <div className="sm:mb-0 mb-10">
        <img width={100} src="/img/counsellor.svg" alt="" />
      </div>
    </div>
  );
};
const Document = () => {
  const [docType, setDocType] = useState("basicDoc");

  const goToAdmission = () => {
    setDocType("admissionDoc");
  };

  const goToBasic = () => {
    setDocType("basicDoc");
  };

  const UserDoc = ({ children }) => {
    return (
      <div className="bg-white p-5 rounded-sm">
        <div className="flex gap-5 p-5 bg-slate-100 ">
          <button
            onClick={goToBasic}
            className={`font-semibold  cursor-pointer `}
            type="button"
          >
            {" "}
            Basic Document
          </button>
          <button
            className={`font-semibold cursor-pointer `}
            onClick={goToAdmission}
            type="button"
          >
            {" "}
            Admission Proof
          </button>
        </div>
        <div className="mt-5 text-sm">{children}</div>
      </div>
    );
  };

  return (
    <HomeLayout>
      <DocMsg />
      <UserDoc>
        {docType == "basicDoc" ? <BasicDoc /> : <AddmissionDoc />}
      </UserDoc>
    </HomeLayout>
  );
};

export default Document;