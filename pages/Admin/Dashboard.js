import Dash from "directsecondyearadmission/Layout/Dash";
import HomeLayout from "directsecondyearadmission/Layout/HomeLayout";
import React from "react";

import Link from "next/link";
import { useState } from "react";

const HeaderFilter = () => {
  const [userOpen, setUserOpen] = useState("hidden");
  const toggleUser = () => {
    if (userOpen == "hidden") {
      setUserOpen("block");
    } else {
      setUserOpen("hidden");
    }
  };

  const items = [
    {
      icon: "bi-house-door-fill",
      Name: "Contact Us",
      Location: "/Admin/AllContact",
    },

    {
      icon: "bi-buildings-fill",
      Name: "Users",
      Location: "/Admin/AllUsers",
    },
    {
      icon: "bi-buildings-fill",
      Name: "Colleges",
      Location: "/Admin/AllColleges",
    },
    {
      icon: "bi-buildings-fill",
      Name: "Latest Updates",
      Location: "/Admin/AllLatestUpdates",
    },
    {
      icon: "bi-buildings-fill",
      Name: "Blog Post",
      Location: "/Admin/AllBlogs",
    },
    {
      icon: "bi-buildings-fill",
      Name: "Add College",
      Location: "/Admin/AddCollege/CollegeDetail",
    },
    {
      icon: "bi-person-fill",
      Name: "Feedback",
      Location: "/Admin/AllFeedback",
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

  return (
    <div className="relative  rounded-sm mt-5  items-center p-5 flex justify-between h-14 mb-0  bg-white w-full">
      {/* <p className="font-semibold text-slate-400">College</p> */}
      <div className="font-semibold">Dashboard</div>
      <div className="cursor-pointer relative">
        <i className="bi bi-three-dots-vertical " onClick={toggleUser}></i>

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

const Dashboard = ({ children, college }) => {
  const HeaderAdmin = () => {
    return (
      <section className="text-gray-600 rounded-sm bg-white body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                50
              </h2>
              <p className="leading-relaxed">Users</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                {college.length}
              </h2>
              <p className="leading-relaxed">Colleges</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                35
              </h2>
              <p className="leading-relaxed">Subscriber</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                4
              </h2>
              <p className="leading-relaxed">Blog</p>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <HomeLayout>
      <HeaderAdmin />
      <HeaderFilter />

      <div className="overflow-scroll bg-white h-full">
        <Dash>{children}</Dash>
      </div>
    </HomeLayout>
  );
};

export default Dashboard;
