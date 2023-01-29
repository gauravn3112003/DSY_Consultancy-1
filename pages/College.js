import HomeLayout from "directsecondyearadmission/Layout/HomeLayout";
import React, { useState } from "react";
import Link from "next/link";
const College = () => {
  const SingleCollege = () => {
    return (
      <div className="PContainer rounded-sm p-5 ">
        <div className="CImage">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/College_of_Engineering%2C_Pune_logo.jpg/220px-College_of_Engineering%2C_Pune_logo.jpg"
            alt=""
          />
        </div>

        <div className="CData">
          <h1 className="font-bold text-xl">College of engineering Pune</h1>
          <div className="CShortData">
            <span className="text-xs">
              <span className="font-semibold">Approved By :</span> AICTE,NBA{" "}
            </span>
            <br />
            <span className="text-xs">
              <span className="font-semibold">Type :</span> Autonomous
              Government
            </span>
            <br />
            <span className="text-xs">
              <span className="font-semibold">Location :</span> Wellesley Rd,
              Shivajinagar, Pune, Maharashtra 411005
            </span>
            <br />
            <span className="text-xs">
              <span className="font-semibold">Institute Code :</span> 411005
            </span>
          </div>
        </div>

        <div className="CBtn">
          <button type="button" className="pBtn px-3 text-sm py-2">
            Read More
          </button>
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
    const [search, setSearch] = useState("test");
    const inputChangedHandler = (e) => {
      const updatedKeyword = e.target.value;
      // May be call for search result
    };

    return (
      <div className="relative mb-5 rounded-sm   items-center p-5 flex justify-between h-14  bg-white w-full">
        {/* <p className="font-semibold text-slate-400">College</p> */}
        <div>
          <form>
            <input
              type="search"
              name="search"
              value={search}
              onChange={inputChangedHandler}
              className="text-sm bg-slate-100 px-2 py-1 rounded-sm  "
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
    );
  };

  return (
    <HomeLayout>
      <HeaderFilter />
      <div className=" h-full overflow-y-scroll w-full ">
        <SingleCollege />
        <SingleCollege />
        <SingleCollege />
        <SingleCollege />
        <SingleCollege />
        <SingleCollege />
        <SingleCollege />
        <SingleCollege />
        <SingleCollege />
        <SingleCollege />
        <SingleCollege />
        <SingleCollege />
        <SingleCollege />
        <SingleCollege />
        <SingleCollege />
        <SingleCollege />
        <SingleCollege />
        <SingleCollege />
        <SingleCollege />
        <SingleCollege />
        <SingleCollege />
        <SingleCollege />
        <SingleCollege />
      </div>
    </HomeLayout>
  );
};

export default College;
