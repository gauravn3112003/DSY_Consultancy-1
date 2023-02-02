import HomeLayout from "directsecondyearadmission/Layout/HomeLayout";
import React from "react";

const Counsellor = () => {
  return (
    <HomeLayout>
      <div className="bg-white p-5 flex sm:flex-row flex-col-reverse items-center  justify-between rounded-sm ">
        <div className="flex flex-col sm:w-2/4 w-full justify-around">
          <div>
            <p className="text-base font-semibold">
              Hi Gaurav Narnaware, we are here to help you.
            </p>
            <p className="text-sm mt-3 text-slate-400">
              Our experts will help you in your entire admission journey.
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
    </HomeLayout>
  );
};

export default Counsellor;
