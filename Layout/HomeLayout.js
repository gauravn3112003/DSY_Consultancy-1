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
      location: "/",
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
          <a className="flex items-center p-2 text-base font-norma rounded-lg ">
            <span className="ml-3">{props.name}</span>
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
      <section className="body-font">
        <div className="container home  ">
          <div className="open">
            <i className="bi bi-list " onClick={toggleNav}></i>
          </div>
          <aside className={`screenSidebar ${openNav}  `}>
            <div className="rounded">
              <i className="bi bi-x-lg close " onClick={toggleNav}></i>
              <ul className="space-y-2">
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
          </aside>

          <div className="sreenLayout">{children}</div>
        </div>
      </section>
    </>
  );
}
