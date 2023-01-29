import HomeLayout from "directsecondyearadmission/Layout/HomeLayout";
import React, { useState } from "react";
const Profile = () => {
  const [modalOpen, setModalOpen] = useState("hidden");
  const toggleUser = () => {
    if (modalOpen == "hidden") {
      setModalOpen("block");
    } else {
      setModalOpen("hidden");
    }
  };

  const BasicDetails = () => {
    return (
      <div className="bg-white p-5 rounded-sm ">
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
            <div className="text-sm">Gaurav Narnaware</div>
          </div>
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">DOB</div>
            <div className="text-sm">03/11/2003</div>
          </div>
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Social Category</div>
            <div className="text-sm">ST</div>
          </div>
        </div>

        <div className=" flex flex-wrap mt-2 justify-between items-center">
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Gender</div>
            <div className="text-sm">Male</div>
          </div>
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Marital Status</div>
            <div className="text-sm">Unmaried</div>
          </div>
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Physically Challenged</div>
            <div className="text-sm">N/A</div>
          </div>
        </div>
      </div>
    );
  };

  const ContactDetails = () => {
    return (
      <div className="bg-white p-5 mt-5 rounded-sm">
        <div className="header flex pb-2  justify-between items-center">
          <h1 className="text-lg font-bold">Contact Details</h1>
          <i className="bi bi-pencil-square font-extrabold text-2xl cursor-pointer "></i>
        </div>

        <div className=" flex flex-wrap mt-3 justify-between items-center">
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Mobile No.</div>
            <div className="text-sm">7796305801e</div>
          </div>
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">E-mail Address</div>
            <div className="text-sm">gauravnarnaware3112003@gmail.com</div>
          </div>
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">City</div>
            <div className="text-sm">Ghatanji</div>
          </div>
        </div>

        <div className=" flex flex-wrap mt-2 justify-between items-center">
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">State</div>
            <div className="text-sm">Maharashtra</div>
          </div>
        </div>
      </div>
    );
  };

  const EducationDetails = () => {
    return (
      <div className="bg-white p-5 rounded-sm mt-5">
        <div className="header flex pb-2  justify-between items-center">
          <h1 className="text-lg font-bold">Education Details</h1>
          <i className="bi bi-pencil-square font-extrabold text-2xl cursor-pointer "></i>
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
      </div>
    );
  };

  const BasicDetailModal = () => {
    return (
      <div className={`fixed top-0 ${modalOpen} left-0 h-full  w-full `}>
        <div className="z-10  relative w-full flex justify-center items-center h-full modalColor">
          <div className="absolute w-4/6 h-4/5 p-5 rounded-sm bg-white ">
            <i
              onClick={toggleUser}
              className="float-right text-2xl cursor-pointer bi bi-x-lg"
            ></i>
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
        <BasicDetailModal />
    </HomeLayout>
  );
};

export default Profile;
