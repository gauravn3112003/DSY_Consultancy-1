import { getallUsers } from "directsecondyearadmission/quieries/adminQuieries";
import React from "react";
import Dashboard from "./Dashboard";

const AllUsers = (props) => {
  return (
    <Dashboard>
      <div className="px-5 font-semibold text-slate-400 bg-white">
        All Users
      </div>
      <div className="h-full mt-5 mx-5 overflow-scroll">
        <table className=" border-none w-full overflow-x-scroll">
          <thead className="border-none  text-sm ">
            <tr className="bg-blue-50 border-none">
              <th className="border-none py-3  text-left px-3">Sr. No.</th>
              <th className="border-none py-3  text-left px-3">Name</th>
              <th className="border-none py-3 text-left px-3">Username</th>
              <th className="border-none py-3 text-left px-3">Email</th>
              <th className="border-none py-3 text-left px-3">Gender</th>
              <th className="border-none py-3 text-left px-3">Location</th>
              <th className="border-none py-3 text-left px-3">Subscription</th>
              <th className="border-none py-3  text-left px-3">
                profile Completion
              </th>
              <th className="border-none py-3 text-left px-3">Role</th>
            </tr>
          </thead>
          <tbody className="mt-10 text-xs">
            {props.data.map((i, index) => {
              return (
                <tr className="border-none  mt-10" key={index}>
                  <td className="px-3 py-2   mt-2 border-none font-bold text-lg text-left">
                    <span className="text-black">{index + 1}</span>
                  </td>
                  <td className="px-3 py-2  mt-2 border-none text-left ">
                    {i.credentails.fName}
                  </td>
                  <td className="px-3 py-2  mt-2 border-none">
                    {" "}
                    {i.credentails.username}
                  </td>
                  <td className="px-3 py-2  mt-2 border-none">
                    {i.credentails.email}
                  </td>
                  <td className="px-3 py-2  mt-2 border-none">
                    {i.basicDetails.gender}
                  </td>
                  <td className="px-3 py-2  mt-2 border-none">
                    {i.coOrdinates.longitude} ,{i.coOrdinates.latitude}
                  </td>
                  <td className="px-3 py-2  mt-2 border-none">
                    {i.subscription}
                  </td>
                  <td className="px-3 py-2  mt-2 border-none text-left">
                    {i.profileCompletion}%
                  </td>
                  <td className="px-3 py-2 font-semibold  mt-2 border-none text-left">
                    {i.role}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Dashboard>
  );
};

export default AllUsers;
export async function getServerSideProps() {
  // for show all Colleges
  const data = await getallUsers();
  return {
    props: { data },
  };
}
