import HomeLayout from "directsecondyearadmission/Layout/HomeLayout";
import React, { useState } from "react";
import Link from "next/link";


const AllCollegesData = ({undercolleges}) => {
  return (
    <div className=" h-full flex flex-col overflow-y-scroll w-full ">
      {undercolleges.map((item, index) => {
        return (
          <span key={index}>
            {item.department.map((department, indexDep) => {
              return (
                <span key={indexDep}>
                  <SingleCollege
                    collegeName={item.name}
                    approvedBy={item.approvedBy}
                    collegeType={item.collegeType}
                    collegeId={item._id}
                    location={item.location.addressLine}
                    instituteCode={item.instituteCode}
                    image={item.image}
                    contactNo={item.contactNo}
                    department={department.courseName}
                    collegeUnder={item.collegeUnder}
                  />
                </span>
              );
            })}
          </span>
        );
      })}
    </div>
  );
};

const SingleCollege = (props) => {
  return (
    <div className="flex-wrap flex   gap-5 sm:gap-5 bg-white mb-5  rounded-sm p-5 ">
      <div className="flex w-full gap-5">
        <div className="sm:w-32 w-20  grid place-items-center">
          <img
            className="rounded-full border-blue-900 border sm:h-24 w-10 h-10 sm:w-24"
            src={props.image}
            alt=""
          />
        </div>
        <div className="   w-full">
          <h1 className="font-bold text-xl">{props.collegeName} </h1>
          <div className="">
            <span className="text-xs">
              <span className="font-bold">Approved By :</span>{" "}
              {props.approvedBy}
            </span>
            <br />
            <span className="text-xs">
              <span className="font-bold">Type :</span> {props.collegeType}
              <span className="font-bold ml-5">Under:</span>{" "}
              {props.collegeUnder}
            </span>
            <br />
            <span className="text-xs">
              <span className="font-bold">Location :</span> {props.location}
            </span>
            <br />
            <span className="text-xs">
              <span className="font-bold">Institute Code :</span>{" "}
              {props.instituteCode}
            </span>
            <span className="ml-5 text-xs">
              <span className="font-bold">Branch :</span> {props.department}
            </span>
          </div>
        </div>
      </div>

      <div className="  flex  gap-5 w-full">
        <Link
          href={{
            pathname: `/CollegeDa/[id]`,
            query: {
              id: props.collegeId,
              // cName: props.collegeName.replace(" ", "+"),
            },
          }}
        >
          <a
            type="button"
            target="_blank"
            className="pBtn w-2/4 text-center px-3 text-sm py-2"
          >
            Read More
          </a>
        </Link>

        <Link href={`tel:+91${props.contactNo}`}>
          <a
            type="button"
            className="border w-2/4 text-center px-3 text-sm py-2"
          >
            Make a call
          </a>
        </Link>
      </div>
    </div>
  );
};

export default AllCollegesData;
