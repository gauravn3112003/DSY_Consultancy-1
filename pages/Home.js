import HomeLayout from "directsecondyearadmission/Layout/HomeLayout";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import collegeContext from "directsecondyearadmission/Context/collegeContext";
import { useRouter } from "next/router";
const Home = () => {
  const context = useContext(collegeContext);
  const loginStatus = context.loginStatus;
  // const [coOrdinates, setcoOrdinates] = useState({});

  // console.log(coOrdinates);
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     setcoOrdinates({
  //       latitude: position.coords.latitude,
  //       longitude: position.coords.longitude,
  //     });
  //   });
  // });

  const CounsellorCard = () => {
    return (
      <div className="bg-white p-5 flex sm:flex-row  flex-col-reverse items-center  justify-between rounded-sm ">
        <div className="flex flex-col sm:w-2/4 w-full justify-around">
          <div>
            <p className="text-base font-semibold">
              Talk to our Expert Counsellors
            </p>
            <p className="text-sm mt-3 text-slate-400">
              Our expert counsellors are ready to help you to complete your
              admission process.
            </p>
          </div>

          <button type="button" className="pBtn px-10 mt-5 py-3">
            {" "}
            Schedule a call
          </button>
        </div>

        <div className="sm:mb-0 mb-10">
          <img width={200} src="/img/counsellor.svg" alt="" />
        </div>
      </div>
    );
  };

  const InsuranceCard = () => {
    return (
      <div className="bg-white p-5 flex sm:flex-row  flex-col-reverse items-center  justify-between rounded-sm ">
        <div className="flex flex-col sm:w-2/4 w-full justify-around">
          <div>
            <p className="text-base font-semibold">DSY Insurance</p>
            <p className="text-sm mt-3 text-slate-400">
              Get yourself or your parents covered with an insurance and
              continue uninterrupted education.
            </p>
          </div>

          <button type="button" className="pBtn px-10 mt-5 py-3">
            {" "}
            Schedule a call
          </button>
        </div>

        <div className="sm:mb-0 mb-10">
          <img width={200} src="/img/counsellor.svg" alt="" />
        </div>
      </div>
    );
  };
  const HeaderCard = () => {
    const name = context.userAllData.credentails.fName;
    const [progress, setProgress] = useState(
      context.userAllData.profileCompletion
    );
    return (
      <div className="border mb-5 ">
        <div className="bg-white p-5   flex sm:flex-row flex-col-reverse items-center w-full  justify-between rounded-sm ">
          <div className="flex flex-col sm:w-2/4 w-full justify-around">
            <div>
              <p className="text-base font-semibold">
                Hey {name}, Your profile is incomplete !
              </p>
              <p className="text-sm mt-3 text-slate-400">
                Complete your profile and we will help you in building better
                college recommendations for you.
              </p>
            </div>

            <button type="button" className="pBtn px-10 mt-5 py-3">
              {" "}
              Complete Your Profile
            </button>
          </div>

          <div className="sm:mb-0  mb-10">
            <img width={200} src="/img/counsellor.svg" alt="" />
          </div>
        </div>

        <div className="w-full p-5 bg-white">
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-200">
            <div
              className="bgColor text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
              style={{ width: progress + "%" }}
            >
              {" "}
              {progress}%
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <HomeLayout>
      <HeaderCard />
      <div className="md:flex-row flex-col flex gap-5 ">
        <CounsellorCard />
        <InsuranceCard />
      </div>
    </HomeLayout>
  );
};

export default Home;
