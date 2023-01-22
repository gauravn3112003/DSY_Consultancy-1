import React, { useState } from "react";
import Link from "next/link";
// components

export default function HomeLayout({ children }) {
  const items = [
    {
      icon: "",
      name: "Home",
      location: "/Home",
    },
    {
      icon: "",
      name: "Profile",
      location: "/Profile",
    },
    {
      icon: "",
      name: "Colleges",
      location: "/College",
    },
    {
      icon: "",
      name: "Counsellors",
      location: "/",
    },
    {
      icon: "",
      name: "Help",
      location: "/",
    },
  ];

  const ListItem = (props) => {
    return (
      <li>
        <Link href={props.location}>
          <a className="flex items-center p-2 my-1 navItem   rounded-lg ">
            <span className="text-sm" >{props.name}</span>
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
      <section className="body-font px-5">
        <div className="userData container ">gvrv</div>
        <div className="container home  ">
          <div className="open">
            <i className="bi colorBlack bi-list " onClick={toggleNav}></i>
          </div>
          <aside className={`screenSidebar ${openNav}  `}>
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
                    />
                  );
                })}
              </ul>
            </div>

            <div className="sideAds">Space for ads</div>
          </aside>

          <div className="sreenLayout ">{children}</div>
        </div>
      </section>
    </>
  );
}
