import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import HomeNav from "directsecondyearadmission/navItem/HomeNav";
// components
import { useContext } from "react";
import collegeContext from "directsecondyearadmission/Context/collegeContext";
export default function HomeLayout({ children }) {
  const context = useContext(collegeContext);
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
  const UserData = () => {
    const router = useRouter();
    // console.log("Location :" + router.pathname );
    return (
      <div className="userData m-auto mt-20 hidden  mb-5  p-5 flex-wrap   text-white justify-between md:flex items-center container rounded-sm">
        <div className="avtarP">GN</div>
        <div className="mt-2 sm:mt-0  ">
          <h1 className="text-center font-semibold text-2xl">
            Gaurav Narnaware
          </h1>
          <p className=" text-center text-xs">Welcome to DSY consultancy !</p>
        </div>
        <div className="flex mt-2  sm:mt-0  flex-col items-center">
          {router.pathname == "/Profile" ? (
            ""
          ) : (
            <Link href="/Profile">
              <a className=" text-xs">Mange your profile</a>
            </Link>
          )}
          <a href="/" className=" text-xs">
            Track your Admission journey
          </a>
        </div>
      </div>
    );
  };

  if (context.loginStatus) {
    return (
      <>
        <section className="body-font   px-5">
          <UserData />
          <div className="container   mt-20 home  ">
            <aside className={`screenSidebar rounded-sm `}>
              <div className="rounded-sm">
                <i className="bi bi-x-lg colorBlack close "></i>
                <ul className="mb-2">
                  {HomeNav.map((item, index) => {
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

            <div className="screenLayout mt-20 md:mt-0 ">{children}</div>
          </div>
        </section>
      </>
    );
  }
  return (
    <>
      <section className="body-font   ">
        <div className="container p-5  mt-20 m-auto  ">
          <div className="bg-white p-5">Login First</div>
        </div>
      </section>
    </>
  );
}
