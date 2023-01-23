import React, { useState } from "react";
import Link from "next/link";
// components

export default function HomeLayout({ children }) {
  const items = [
    {
      icon: "bi-house-door-fill",
      name: "Home",
      location: "/Home",
    },
    {
      icon: "bi-person-fill",
      name: "Profile",
      location: "/Profile",
    },
    {
      icon: "bi-buildings-fill",
      name: "Colleges",
      location: "/College",
    },
    {
      icon: "bi-headset",
      name: "Counsellors",
      location: "/",
    },
    {
      icon: "bi-info-circle-fill",
      name: "Help",
      location: "/",
    },
    {
      icon: "bi-bar-chart-line-fill",
      name: "Dashboard",
      location: "/Admin/Dashboard",
    },
  ];

  const ListItem = (props) => {
    return (
      <li>
        <Link href={props.location}>
          <a className="flex items-center p-2 my-1 navItem   rounded-sm ">
            <i className={`bi ${props.icon} mr-2`}></i>
            <span className="text-sm">{props.name}</span>
          </a>
        </Link>
      </li>
    );
  };

  const [openNav, setOpenNav] = useState("");
  const toggleNav = () => {
    if (openNav === "") {
      setOpenNav("openNav");
    } else {
      setOpenNav("");
    }
  };

  return (
    <>
      <section className="body-font  px-5">
        <div className="userData container rounded-sm">gvrv</div>
        <div className="container   home  ">
          <div className="open ">
            <i
              className="bi colorBlack bi-list cursor-pointer "
              onClick={toggleNav}
            ></i>
          </div>
          <aside className={`screenSidebar ${openNav}  rounded-sm `}>
            <div className="rounded">
              <i
                className="bi bi-x-lg colorBlack close "
                onClick={toggleNav}
              ></i>
              <ul className="mb-2">
                {items.map((item, index) => {
                  return (
                    <ListItem
                      key={index}
                      location={item.location}
                      name={item.name}
                      icon={item.icon}
                    />
                  );
                })}
              </ul>
            </div>

            <div className="sideAds">Space for ads</div>
          </aside>

          <div className="screenLayout ">{children}</div>
        </div>
      </section>
    </>
  );
}
