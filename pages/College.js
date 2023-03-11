import HomeLayout from "directsecondyearadmission/Layout/HomeLayout";
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import baseUrl from "directsecondyearadmission/baseUrl";
import { collegeByUnder } from "directsecondyearadmission/quieries/quieries";

const College = ({ data }) => {
  const [selectedCollegeUnder, setSelectedCollegeUnder] = useState([]);
  const [district, setdistrict] = useState("");
  const onChangeCollegeUnderHandler = (under, isChecked) => {
    isChecked
      ? setSelectedCollegeUnder((prevUnder) => [...prevUnder, under])
      : setSelectedCollegeUnder(
          selectedCollegeUnder.filter((und) => und !== under)
        );
  };

  // filter for College Under
  const undercolleges = collegeByUnder(selectedCollegeUnder, data, district);
  const AllCollegesData = () => {
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
                  , {props.district}
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

          <div className="  flex  gap-5 w-full justify-center items-center">
            <Link
              href={{
                pathname: `/CollegeDa/[id]`,
                query: {
                  id: props.collegeId,
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
    return (
      <div className=" h-full flex flex-col overflow-y-scroll w-full ">
        {undercolleges.map((item, index) => {
          return (
            <span key={index}>
              {item.department.length == 0
                ? (
                  <div className="p-5 bg-white font-semibold">
                    College Not Found
                  </div>
                )
                : item.department.map((department, indexDep) => {
                    return (
                      <span key={indexDep}>
                        <SingleCollege
                          collegeName={item.name}
                          approvedBy={item.approvedBy}
                          collegeType={item.collegeType}
                          collegeId={item._id}
                          location={item.location.addressLine}
                          district={item.location.district}
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

  const NavItem = (props) => {
    return (
      <Link href={props.location}>
        <a
          className="text-gray-700 hover:bg-sky-100 pl-5  block  mx-5 py-2 text-sm"
          role="menuitem"
          tabIndex="-1"
          id="menu-item-0"
        >
          {props.name}
        </a>
      </Link>
    );
  };

  const [userOpen, setUserOpen] = useState("hidden");
  const toggleUser = () => {
    if (userOpen == "hidden") {
      setUserOpen("block");
    } else {
      setUserOpen("hidden");
    }
  };

  const HeaderFilter = () => {
    const [search, setSearch] = useState("");

    const inputChangedHandler = (e) => {
      e.preventDefault();
      setSearch(e.target.value);
    };

    const items = [
      {
        Name: "Category",
        Location: "/",
      },
      {
        Name: "Course",
        Location: "/",
      },
      {
        Name: "Rating",
        Location: "/",
      },
      {
        Name: "Near Me",
        Location: "/",
      },
      {
        Name: "Rating",
        Location: "/",
      },
    ];

    // College Under Components
    const CollegeUnder = () => {
      const checkBoxItem = ["Government", "Private"];

      return (
        <div className="  px-5  grid grid-cols-2 gap-5">
          {checkBoxItem.map((item, index) => {
            return (
              <div className="flex gap-2    items-center" key={index}>
                <input
                  type="checkbox"
                  checked={selectedCollegeUnder.includes(item)}
                  onChange={(e) =>
                    onChangeCollegeUnderHandler(item, e.target.checked)
                  }
                />
                <label className="text-xs">{item}</label>
              </div>
            );
          })}
        </div>
      );
    };

    const DistrictFilter = () => {
      const districtName = data.map((item) => item.location.district);
      const removeDubDist = data.filter(
        (district, index) =>
          !districtName.includes(district.location.district, index + 1)
      );

      return (
        <div className="px-5">
          <select
            value={district}
            onChange={function (e) {
              setdistrict(e.target.value);
            }}
            className=" outline-none w-full py-2 rounded-sm border"
          >
            <option value="" className="text-center font-bold py-2">
              {" "}
              Select District
            </option>
            {removeDubDist.map((item, index) => {
              return (
                <option
                  key={index}
                  value={item.location.district}
                  className="text-center text-sm"
                >
                  {item.location.district}
                </option>
              );
            })}
          </select>
        </div>
      );
    };
    return (
      <>
        <div className="relative mb-5 rounded-sm   items-center p-5 flex justify-between h-14  bg-white w-full">
          <div>
            <form>
              <input
                type="search"
                name="search"
                onChange={inputChangedHandler}
                className="text-sm outline-none rounded-sm bg-slate-100 px-2 py-1  "
                placeholder="Search"
              />
            </form>
          </div>

          <div className="cursor-pointer relative">
            <i className="bi bi-funnel-fill mr-4" onClick={toggleUser}></i>
            <span onClick={toggleUser} className="text-slate-400">
              Filter
            </span>
            <div
              className={`absolute ${userOpen} right-0 z-10 mt-2 w-80 origin-top-right rounded-sm bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-5" role="none">
                {items.map((item, index) => {
                  return (
                    <NavItem
                      location={item.Location}
                      name={item.Name}
                      key={index}
                    />
                  );
                })}
                <div className="h-1 mx-5 my-5 bg-slate-50" />
                <CollegeUnder />
                <div className="h-1 mx-5 my-5 bg-slate-50" />
                <DistrictFilter />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <HomeLayout>
      <Head>
        <title>DSY consultancy | Colleges</title>
        <meta
          name="keywords"
          content="Direct Second Year Admission, Consultancy Services, Admission Assistance, Education Counseling, Admission Consultancy, College Admission Guidance, Admission Process, Admission Requirements, Engineering Admissions, After Diploma Admissions, DSY, Direct Second Year Admission Consultancy | DSY, Direct Second Year Admission Consultancy, Direct Second Year Admission, DSY consultancy, DSY consultancy | Colleges"
        />
        <meta name="title" content="DSY consultancy | Colleges" />
      </Head>
      <HeaderFilter />
      <AllCollegesData />
    </HomeLayout>
  );
};

export async function getServerSideProps() {
  // for show all Colleges
  const res = await fetch(baseUrl + "/api/Colleges", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return {
    props: { data },
  };
}

export default College;
