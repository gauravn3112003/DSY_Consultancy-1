import HomeLayout from "directsecondyearadmission/Layout/HomeLayout";
import React from "react";
import Link from "next/link";

const NotiRemind = () => {
  return (
    <div className="bg-white p-5  rounded-sm ">
      <div className="flex flex-col sm:w-2/4 w-full justify-around">
        <div>
          <p className="font-bold text-lg">Notification & Reminders</p>
          <p className="text-sm font-semibold text-slate-600 mt-3 ">
            Never miss important reminders & notifications about the latest
            education news and your admission journey status
          </p>
        </div>

        <div className="mt-5 flex gap-5">
          <div>
            <div className="form-check form-switch flex justify-start items-center">
              <label
                className="form-check-label text-xs mr-2 inline-block "
                htmlFor="flexSwitchCheckDefault"
              >
                SMS
              </label>
              <input
                type="checkbox"
                role="switch"
                className="bg-white"
                id="flexSwitchCheckDefault"
              />
            </div>
          </div>

          <div>
            <div className="form-check form-switch flex justify-start items-center">
              <label
                className="form-check-label text-xs mr-2 inline-block "
                htmlFor="flexSwitchCheckDefault"
              >
                E-mail
              </label>
              <input
                type="checkbox"
                className="bg-white"
                role="switch"
                id="flexSwitchCheckDefault"
              />
            </div>
          </div>

          <div>
            <div className="form-check form-switch flex justify-start items-center">
              <label
                className="form-check-label text-xs mr-2 inline-block "
                htmlFor="flexSwitchCheckDefault"
              >
                Whatsapp
              </label>
              <input
                type="checkbox"
                role="switch"
                className="bg-white"
                id="flexSwitchCheckDefault"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReportIssue = () => {
  return (
    <div className="bg-white p-5  mt-5 rounded-sm ">
      <p className="font-bold text-lg">Report an Issue</p>

      <textarea
        rows="5"
        placeholder="Which issue do you have?"
        className="border w-full mt-5 bg-white   outline-none p-5 text-sm"
      ></textarea>

      <button type="button" className="pBtn px-10 rounded-sm   py-2">
        Submit
      </button>
    </div>
  );
};

const AccountSetting = () => {
  return (
    <HomeLayout>
      <NotiRemind />
      <ReportIssue />

      <div className="bg-white p-5  mt-5 rounded-sm ">
        <p className="font-bold text-lg">Change Password</p>
        <div className="mt-5 flex flex-col sm:flex-row gap-5">
          <div className="w-full ">
            <p className="text-slate-400">Current Password</p>
            <input
              type="text"
              name=""
              className="border bg-white  text-sm outline-none w-full mt-2 rounded-sm px-4 py-2"
            />
          </div>

          <div className="w-full ">
            <p className="text-slate-400">New Password</p>
            <input
              type="text"
              name=""
              className="border bg-white  text-sm outline-none w-full mt-2 rounded-sm px-4 py-2"
            />
          </div>

          <div className="w-full ">
            <p className="text-slate-400">Conform Password</p>
            <input
              type="text"
              name=""
              className="border bg-white  text-sm outline-none w-full mt-2 rounded-sm px-4 py-2"
            />
          </div>
        </div>
        <p className="text-xs text-right my-5 pColor font-semibold ">
          <Link href="/Forgot">
            <a> Forgot Password?</a>
          </Link>
        </p>
        <button type="button" className="pBtn px-10 rounded-sm mt-2    py-2">
          {" "}
          Change password
        </button>
      </div>
    </HomeLayout>
  );
};

export default AccountSetting;
