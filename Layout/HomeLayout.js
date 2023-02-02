import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
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
      icon: "bi-file-earmark-fill",
      name: "Document",
      location: "/Document",
    },
    {
      icon: "bi-key-fill",
      name: "Insurance",
      location: "/Insurance",
    },
    {
      icon: "bi-bar-chart-line-fill",
      name: "Dashboard",
      location: "/Admin/AllContact",
    },

    {
      icon: "bi-headset",
      name: "Counsellor",
      location: "/Counsellor",
    },
    {
      icon: "bi-gear-fill",
      name: "Account Setting",
      location: "/",
    },
    {
      icon: "bi-info-circle-fill",
      name: "Help",
      location: "/",
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

  const UserData = () => {
    const router = useRouter();
    console.log("Location :" + router.pathname );
    return (
      <div className="userData m-auto mt-20 mb-5  p-5 flex-wrap   text-white justify-between flex items-center container rounded-sm">
        <div className="avtarP">GN</div>
        <div className="mt-2 sm:mt-0  ">
          <h1 className="text-center font-semibold text-2xl">
            Gaurav Narnaware
          </h1>
          <p className=" text-center text-xs">Welcome to DSY consultancy !</p>
        </div>
        <div className="flex mt-2  sm:mt-0  flex-col items-center">
          {router.pathname == "/profile" ? (
            ""
          ) : (
            <a href="/" className=" text-xs">
              Mange your profile
            </a>
          )}
          <a href="/" className=" text-xs">
            Track your Admission journey
          </a>
        </div>
      </div>
    );
  };
  return (
    <>
      <section className="body-font  px-5">
        <UserData />
        <div className="container   home  ">
          <div className="open  ">
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
