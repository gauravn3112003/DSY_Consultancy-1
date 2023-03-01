import HomeLayout from "directsecondyearadmission/Layout/HomeLayout";
import React, { useState } from "react";
import baseUrl from "directsecondyearadmission/baseUrl";
import Link from "next/link";
import collegeContext from "directsecondyearadmission/Context/collegeContext";
import { useContext } from "react";
import { useRouter } from "next/router";
const Profile = ({ userData }) => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState("hidden");
  const toggleUser = () => {
    if (modalOpen == "hidden") {
      setModalOpen("block");
    } else {
      setModalOpen("hidden");
    }
  };

  const ModelHeader = (props) => {
    return (
      <header className="bgColor p-5 flex justify-between items-center rounded-sm">
        <div className="flex justify-center items-center gap-5">
          <i
            onClick={toggleUser}
            className="bi bi-arrow-left text-2xl text-white cursor-pointer"
          ></i>
          <span className="border-b-2 border-yellow-300 text-base font-semibold text-white">
            {props.name}
          </span>
        </div>
        <div>
          <i
            onClick={toggleUser}
            className=" text-2xl text-white cursor-pointer bi bi-x-lg"
          ></i>
        </div>
      </header>
    );
  };

  const BasicDetails = () => {
    const [modalOpen, setModalOpen] = useState("hidden");
    const toggleUser = () => {
      if (modalOpen == "hidden") {
        setModalOpen("block");
      } else {
        setModalOpen("hidden");
      }
    };
    const BasicDetailModal = () => {
      return (
        <div className={`fixed top-0 ${modalOpen} left-0 h-full  w-full   `}>
          <div className="z-10  relative w-full flex justify-center  items-center h-full modalColor">
            <div className="absolute h-full w-full  sm:w-4/6 sm:h-4/5  mt-24 sm:mt-0 rounded-sm bg-white">
              <ModelHeader name="Basic Detail" />
              <form className="w-full sm:mt-14 mt-5 px-5 sm:px-0 grid place-items-center">
                <div className="grid grid-cols-1  w-full sm:grid-cols-2 gap-5 sm:w-2/4 ">
                  <div className="flex flex-col ">
                    <label
                      htmlFor="Name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="Name"
                      name="Name"
                      className="w-full bg-white rounded-sm  border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 "
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label
                      htmlFor="SCategory"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Social Category
                    </label>
                    <select className="w-full bg-white rounded-sm  border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                      <option>Your Social Category</option>
                      <option>General</option>
                      <option>ST</option>
                      <option>OBC</option>
                      <option>SC</option>
                      <option>VJ/NT</option>
                      <option>OPEN</option>
                    </select>
                  </div>
                  <div className="flex flex-col ">
                    <label
                      htmlFor="DOB"
                      className="leading-7 text-sm text-gray-600"
                    >
                      DOB
                    </label>
                    <input
                      type="date"
                      id="DOB"
                      name="DOB"
                      className="w-full bg-white rounded-sm  border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 "
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label
                      htmlFor="Gender"
                      className="leading-7 text-sm text-gray-600"
                    >
                      You are
                    </label>
                    <div className="grid items-center grid-cols-3">
                      <div>
                        <input className="mr-2" type="radio" name="" />
                        <span>Male</span>
                      </div>
                      <div>
                        <input className="mr-2" type="radio" name="" />
                        <span>Female </span>
                      </div>
                      <div>
                        <input className="mr-2" type="radio" name="" />
                        <span>Other</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <label
                      htmlFor="Status"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Your Marital Status (Optional)
                    </label>
                    <div className="grid items-center grid-cols-3">
                      <div>
                        <input className="mr-2" type="radio" name="" />
                        <span>Married</span>
                      </div>
                      <div>
                        <input className="mr-2" type="radio" name="" />
                        <span>Unmarried </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <label
                      htmlFor="Changed"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Are you physically challenged?
                    </label>
                    <div className="grid items-center grid-cols-3">
                      <div>
                        <input className="mr-2" type="radio" name="" />
                        <span>Yes</span>
                      </div>
                      <div>
                        <input className="mr-2" type="radio" name="" />
                        <span>No </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <button type="button" className="pBtn px-10 py-3 mt-10">
                    {" "}
                    Submit
                  </button>
                  <button type="reset" className="border px-10 py-3 mt-10">
                    {" "}
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    };

    const basicDetail = userData.basicDetails;
    return (
      <div className="bg-white p-5 rounded-sm ">
        <BasicDetailModal />
        <div className="header flex pb-2  justify-between items-center">
          <h1 className="text-lg font-bold">Basic Details</h1>
          <i
            className="bi bi-pencil-square font-extrabold text-2xl cursor-pointer "
            onClick={toggleUser}
          ></i>
        </div>

        <div className=" flex flex-wrap mt-3 justify-between items-center">
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Full Name</div>
            <div className="text-sm">{basicDetail.fName}</div>
          </div>
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">DOB</div>
            <div className="text-sm"> {basicDetail.dob}</div>
          </div>
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Social Category</div>
            <div className="text-sm"> {basicDetail.socialCategory}</div>
            <div className="text-sm"></div>
          </div>
        </div>

        <div className=" flex flex-wrap mt-2 justify-between items-center">
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Gender</div>
            <div className="text-sm">{basicDetail.gender}</div>
          </div>
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Marital Status</div>
            <div className="text-sm">{basicDetail.maritialStatus}</div>
          </div>
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Physically Challenged</div>
            <div className="text-sm">{basicDetail.phyChanged}</div>
          </div>
        </div>
      </div>
    );
  };

  const ContactDetails = () => {
    const [modalOpen, setModalOpen] = useState("hidden");
    const toggleUser = () => {
      if (modalOpen == "hidden") {
        setModalOpen("block");
      } else {
        setModalOpen("hidden");
      }
    };
    const ContactDetailModal = () => {
      return (
        <div className={`fixed top-0 ${modalOpen} left-0 h-full  w-full   `}>
          <div className="z-10  relative w-full flex justify-center  items-center h-full modalColor">
            <div className="absolute h-full w-full  sm:w-4/6 sm:h-4/5  mt-24 sm:mt-0 rounded-sm bg-white">
              <ModelHeader name="Contact Detail" />
              <form className="w-full sm:mt-14 mt-5 px-5 sm:px-0 grid place-items-center">
                <div className="grid grid-cols-1  w-full sm:grid-cols-2 gap-5 sm:w-2/4 ">
                  <div className="flex flex-col ">
                    <label
                      htmlFor="MoNum"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="number"
                      id="MoNum"
                      name="MoNum"
                      className="w-full bg-white rounded-sm  border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 "
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      required={true}
                      id="email"
                      name="email"
                      className="w-full bg-white rounded-sm  border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 "
                    />
                  </div>

                  <div className="flex flex-col ">
                    <label
                      htmlFor="state"
                      className="leading-7 text-sm text-gray-600"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      className="w-full bg-white rounded-sm  border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 "
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label
                      htmlFor="city"
                      className="leading-7 text-sm text-gray-600"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      className="w-full bg-white rounded-sm  border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 "
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <button type="submit" className="pBtn px-10 py-3 mt-10">
                    {" "}
                    Submit
                  </button>
                  <button type="reset" className="border px-10 py-3 mt-10">
                    {" "}
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    };

    const contactDetail = userData.contactDetails;
    return (
      <div className="bg-white p-5 mt-5 rounded-sm">
        <ContactDetailModal />
        <div className="header flex pb-2  justify-between items-center">
          <h1 className="text-lg font-bold">Contact Details</h1>
          <i
            className="bi bi-pencil-square font-extrabold text-2xl cursor-pointer "
            onClick={toggleUser}
          ></i>
        </div>

        <div className=" flex flex-wrap mt-3 justify-between items-center">
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Mobile No.</div>
            <div className="text-sm">{contactDetail.mobileNo}</div>
          </div>
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">E-mail Address</div>
            <div className="text-sm">{userData.credentails.email}</div>
          </div>
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">City</div>
            <div className="text-sm">{contactDetail.city}</div>
          </div>
        </div>

        <div className=" flex flex-wrap mt-2 justify-between items-center">
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">State</div>
            <div className="text-sm">{contactDetail.state} </div>
          </div>
        </div>
      </div>
    );
  };

  const EducationDetails = () => {
    const [modalOpen, setModalOpen] = useState("hidden");
    const toggleUser = () => {
      if (modalOpen == "hidden") {
        setModalOpen("block");
      } else {
        setModalOpen("hidden");
      }
    };
    const EducationDetailModal = () => {
      return (
        <div className={`fixed top-0 ${modalOpen} left-0 h-full  w-full   `}>
          <div className="z-10  relative w-full flex justify-center overflow-y-scroll  items-center h-full modalColor">
            <div className="absolute overflow-y-scroll h-full w-full  sm:w-4/6 sm:h-4/5  mt-24 sm:mt-0 rounded-sm bg-white">
              <ModelHeader name="Education Detail" />
              <form className="w-full px-5  pb-10 pt-5 sm:pt-0 mt-5 grid overflow-y-scroll place-items-center">
                <h2 className=" w-full font-semibold  sm:w-2/4">
                  Class X (required)
                </h2>
                <div className="grid grid-cols-1  w-full sm:grid-cols-2 gap-5 sm:w-2/4 ">
                  <div className="flex flex-col ">
                    <label
                      htmlFor="Board"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Board
                    </label>
                    <select className="w-full bg-white rounded-sm  border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                      <option>Board</option>
                      <option>ICSE</option>
                      <option>CBSE</option>
                      <option>STATE BOARD</option>
                      <option>OTHER</option>
                    </select>
                  </div>
                  <div className="flex flex-col ">
                    <label
                      htmlFor="SName"
                      className="leading-7 text-sm text-gray-600"
                    >
                      School Name
                    </label>
                    <input
                      type="text"
                      required={true}
                      id="SName"
                      name="SName"
                      className="w-full bg-white rounded-sm  border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 "
                    />
                  </div>

                  <div className="flex flex-col ">
                    <label
                      htmlFor="PassYear"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Pass Year
                    </label>
                    <input
                      type="number"
                      id="PassYear"
                      name="PassYear"
                      className="w-full bg-white rounded-sm  border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 "
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label
                      htmlFor="mType"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Mark Type
                    </label>
                    <select className="w-full bg-white rounded-sm  border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                      <option>Type</option>
                      <option>CGPA</option>
                      <option>Percentage</option>
                    </select>
                  </div>
                  <div className="flex flex-col ">
                    <label
                      htmlFor="Marks"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Enter your Marks
                    </label>
                    <input
                      type="number"
                      id="Marks"
                      name="Marks"
                      className="w-full bg-white rounded-sm  border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 "
                    />
                  </div>
                </div>

                <div className="sm:w-2/4 w-full mt-5 border" />
                <h2 className=" w-full mt-5 font-semibold  sm:w-2/4">
                  Diploma (required)
                </h2>

                <div className="grid grid-cols-1  w-full sm:grid-cols-2 gap-5 sm:w-2/4 ">
                  <div className="flex flex-col ">
                    <label
                      htmlFor="Board"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Board
                    </label>
                    <input
                      type="text"
                      required={true}
                      id="Board"
                      name="Board"
                      className="w-full bg-white rounded-sm  border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 "
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label
                      htmlFor="SName"
                      className="leading-7 text-sm text-gray-600"
                    >
                      College Name
                    </label>
                    <input
                      type="text"
                      required={true}
                      id="SName"
                      name="SName"
                      className="w-full bg-white rounded-sm  border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 "
                    />
                  </div>

                  <div className="flex flex-col ">
                    <label
                      htmlFor="PassYear"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Pass Year
                    </label>
                    <input
                      type="number"
                      id="PassYear"
                      name="PassYear"
                      className="w-full bg-white rounded-sm  border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 "
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label
                      htmlFor="mType"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Mark Type
                    </label>
                    <select className="w-full bg-white rounded-sm  border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                      <option>Type</option>
                      <option>CGPA</option>
                      <option>Percentage</option>
                    </select>
                  </div>
                  <div className="flex flex-col ">
                    <label
                      htmlFor="Marks"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Enter your Marks
                    </label>
                    <input
                      type="number"
                      id="Marks"
                      name="Marks"
                      className="w-full bg-white rounded-sm  border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 "
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <button type="submit" className="pBtn px-10 py-3 mt-10">
                    {" "}
                    Submit
                  </button>
                  <button type="reset" className="border px-10 py-3 mt-10">
                    {" "}
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    };
    return (
      <div className="bg-white p-5 rounded-sm mt-5">
        <EducationDetailModal />
        <div className="header flex pb-2  justify-between items-center">
          <h1 className="text-lg font-bold">Education Details</h1>
          <i
            onClick={toggleUser}
            className="bi bi-pencil-square font-extrabold text-2xl cursor-pointer "
          ></i>
        </div>
        <h3 className="text-base text-slate-500 sm:font-semibold font-bold ">
          Class X
        </h3>
        <div className=" flex flex-wrap mt-3 justify-between items-center">
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Board</div>
            <div className="text-sm">N/A</div>
          </div>
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">School</div>
            <div className="text-sm">N/A</div>
          </div>
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Passing Year</div>
            <div className="text-sm">N/A</div>
          </div>
        </div>

        <div className=" flex flex-wrap mt-2 justify-between items-center">
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Mark Type</div>
            <div className="text-sm">N/A</div>
          </div>
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Percentage/CGPA</div>
            <div className="text-sm">N/A</div>
          </div>
          <div className="w-2/6 detailWrap" />
        </div>
        <div className="border-b-2 mt-5" />
        <h3 className="text-base text-slate-500 sm:font-semibold font-bold mt-5">
          Diploma
        </h3>
        <div className=" flex flex-wrap mt-3 justify-between items-center">
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Board</div>
            <div className="text-sm">N/A</div>
          </div>
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">College</div>
            <div className="text-sm">N/A</div>
          </div>
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Passing Year</div>
            <div className="text-sm">N/A</div>
          </div>
        </div>

        <div className=" flex flex-wrap mt-2 justify-between items-center">
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Mark Type</div>
            <div className="text-sm">N/A</div>
          </div>
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Percentage/CGPA</div>
            <div className="text-sm">N/A</div>
          </div>
          <div className="w-2/6 detailWrap" />
        </div>
      </div>
    );
  };

  const PreferenceDetails = () => {
    const [modalOpen, setModalOpen] = useState("hidden");
    const toggleUser = () => {
      if (modalOpen == "hidden") {
        setModalOpen("block");
      } else {
        setModalOpen("hidden");
      }
    };
    const PreferenceesDetailModal = () => {
      return (
        <div className={`fixed top-0 ${modalOpen} left-0 h-full  w-full   `}>
          <div className="z-10  relative w-full flex justify-center  items-center h-full modalColor">
            <div className="absolute h-full w-full  sm:w-4/6 sm:h-4/5  mt-24 sm:mt-0 rounded-sm bg-white">
              <ModelHeader name="Preferences" />
              <form className="w-full sm:mt-14 mt-5 px-5 sm:px-0 grid place-items-center">
                <div className="grid grid-cols-1  w-full sm:grid-cols-2 gap-5 sm:w-2/4 ">
                  <div className="flex flex-col ">
                    <label
                      htmlFor="University"
                      className="leading-7 text-sm text-gray-600"
                    >
                      University
                    </label>
                    <input
                      type="number"
                      id="University"
                      name="University"
                      className="w-full bg-white rounded-sm  border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 "
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label
                      htmlFor="Branch"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Branch
                    </label>
                    <input
                      type="text"
                      required={true}
                      id="Branch"
                      name="Branch"
                      className="w-full bg-white rounded-sm  border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 "
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label
                      htmlFor="CType"
                      className="leading-7 text-sm text-gray-600"
                    >
                      What type of college you are interested in?
                    </label>
                    <select className="w-full bg-white rounded-sm  border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                      <option>Type</option>
                      <option>Government</option>
                      <option>Non-Government</option>
                      <option>Both</option>
                    </select>
                  </div>

                  <div className="flex flex-col ">
                    <label
                      htmlFor="City"
                      className="leading-7 text-sm text-gray-600"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      required={true}
                      id="City"
                      name="City"
                      className="w-full bg-white rounded-sm  border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 "
                    />
                  </div>

                  <div className="flex flex-col ">
                    <label
                      htmlFor="CType"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Need a Loan?
                    </label>
                    <div className="grid items-center grid-cols-3">
                      <div>
                        <input className="mr-2" type="radio" name="" />
                        <span>Yes</span>
                      </div>
                      <div>
                        <input className="mr-2" type="radio" name="" />
                        <span>No </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <button type="submit" className="pBtn px-10 py-3 mt-10">
                    {" "}
                    Submit
                  </button>
                  <button type="reset" className="border px-10 py-3 mt-10">
                    {" "}
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    };
    return (
      <div className="bg-white p-5 mt-5 rounded-sm">
        <PreferenceesDetailModal />
        <div className="header flex pb-2  justify-between items-center">
          <h1 className="text-lg font-bold">Preferences</h1>
          <i
            onClick={toggleUser}
            className="bi bi-pencil-square font-extrabold text-2xl cursor-pointer "
          ></i>
        </div>

        <div className=" flex flex-wrap mt-3 justify-between items-center">
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Univercity</div>
            <div className="text-sm">7796305801e</div>
          </div>
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Branch</div>
            <div className="text-sm">Computer Engineering</div>
          </div>
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Location</div>
            <div className="text-sm">Ghatanji</div>
          </div>
        </div>
        <div className=" flex flex-wrap mt-3  items-center">
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">College Type</div>
            <div className="text-sm">7796305801e</div>
          </div>
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Need a loan?</div>
            <div className="text-sm">Computer Engineering</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <HomeLayout>
      <BasicDetails />
      <ContactDetails />
      <EducationDetails />
      <PreferenceDetails />
    </HomeLayout>
  );
};
export async function getServerSideProps(context) {
  const { id } = context.query;
  // const context = useContext(collegeContext);

  const res = await fetch(baseUrl + "/api/User/" + id, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const userData = await res.json();
  if (userData.error) {
    return {
      notFound: true,
    };
  }

  return {
    props: { userData },
  };
}
export default Profile;
