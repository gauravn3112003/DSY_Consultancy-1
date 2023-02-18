import HomeLayout from "directsecondyearadmission/Layout/HomeLayout";
import React, { useState } from "react";
import Link from "next/link";
import baseUrl from "directsecondyearadmission/baseUrl";

const College = ({ data }) => {
  const AllCollegesData = (props) => {
    return (
      <div className=" h-full overflow-y-scroll w-full ">
        {data.map((item, index) => {
          return (
            <span  key={index}>
              {" "}
              {item.instituteCode == props.data ? (
                <SingleCollege
                  collegeName={item.name}
                 
                  approvedBy={item.approvedBy}
                  collegeType={item.collegeType}
                  location={item.location.addressLine}
                  instituteCode={item.instituteCode}
                  contactNo={item.contactNo}
                />
              ) : (
                ""
              )}
              {props.data == "" ? (
                <SingleCollege
                  collegeName={item.name}
                  approvedBy={item.approvedBy}
                  collegeType={item.collegeType}
                  location={item.location.addressLine}
                  instituteCode={item.instituteCode}
                  contactNo={item.contactNo}
                />
              ) : (
                ""
              )}
            </span>
          );
        })}
      </div>
    );
  };

  const SingleCollege = (props) => {
    return (
      <div className="PContainer rounded-sm p-5 ">
        <div className="CImage">
          <img
            className="rounded-full border-blue-900 border h-24 w-24" src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/College_of_Engineering%2C_Pune_logo.jpg/220px-College_of_Engineering%2C_Pune_logo.jpg"
            alt=""
          />
        </div>
        <div className="CData">
          <h1 className="font-bold text-xl">{props.collegeName} </h1>
          <div className="CShortData">
            <span className="text-xs">
              <span className="font-semibold">Approved By :</span>{" "}
              {props.approvedBy}
            </span>
            <br />
            <span className="text-xs">
              <span className="font-semibold">Type :</span> {props.collegeType}
            </span>
            <br />
            <span className="text-xs">
              <span className="font-semibold">Location :</span> {props.location}
            </span>
            <br />
            <span className="text-xs">
              <span className="font-semibold">Institute Code :</span>{" "}
              {props.instituteCode}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Link
            href={{
              pathname: `/CollegeDa/[id]`,
              query: {
                id: "HeyCollegeswala",
                cName: "COEP",
              },
            }}
          >
            <a
              type="button"
              target="_blank"
              className="pBtn text-center px-3 text-sm py-2"
            >
              Read More
            </a>
          </Link>

          <Link href={`tel:+91${props.contactNo}`}>
            <a type="button" className="border px-3 text-sm py-2">
              Schedule a call
            </a>
          </Link>
        </div>
      </div>
    );
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

  const NavItem = (props) => {
    return (
      <Link href={props.location}>
        <a
          className="text-gray-700 navItem block px-4 py-2 text-sm"
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
    return (
      <>
        <div className="relative mb-5 rounded-sm   items-center p-5 flex justify-between h-14  bg-white w-full">
          {/* <p className="font-semibold text-slate-400">College</p> */}
          <div>
            <form>
              <input
                type="search"
                name="search"
                onChange={inputChangedHandler}
                className="text-sm outline-none rounded-sm bg-slate-100 px-2 py-1 rounded-sm  "
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
              className={`absolute ${userOpen} right-0 z-10 mt-2 w-56 origin-top-right rounded-sm bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                {items.map((item, index) => {
                  return (
                    <NavItem
                      location={item.Location}
                      name={item.Name}
                      key={index}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <AllCollegesData data={search} />
      </>
    );
  };

  return (
    <HomeLayout>
      <HeaderFilter />
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
