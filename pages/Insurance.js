import HomeLayout from "directsecondyearadmission/Layout/HomeLayout";
import React from "react";

const Insurance = () => {
  return (
    <HomeLayout>
      <div className="bg-white p-5 flex sm:flex-row flex-col-reverse items-center  justify-between rounded-sm ">
        <div className="flex flex-col sm:w-2/4 w-full ">
          <div>
            <p className="text-base font-semibold ">
              Sorry! Seems like you have no Insurance
            </p>
            <p className="text-sm mt-3  text-slate-400">
              Need help deciding the right insurance plan for you?
            </p>
          </div>

          <button type="button" className="pBtn px-10 mt-5 py-3">
            {" "}
            Schedule a call
          </button>
        </div>

        <div className="sm:mb-0 mb-10">
          <img
            width={200}
            src="https://www.collegedekho.com/_next/image?url=https%3A%2F%2Fnj1-static.collegedekho.com%2F_next%2Fstatic%2Fmedia%2Fimg-no-data.8653040d.svg&w=128&q=75"
            alt=""
          />
        </div>
      </div>
    </HomeLayout>
  );
};

export default Insurance;
