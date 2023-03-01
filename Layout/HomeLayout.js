import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import HomeNav from "directsecondyearadmission/navItem/HomeNav";
// components
import { useContext } from "react";
import collegeContext from "directsecondyearadmission/Context/collegeContext";

export default function HomeLayout({ children }) {
  const router = useRouter();

  const context = useContext(collegeContext);
  // console.log(context.userAllData.role);
  const ListItem = (props) => {
    return (
      <li>
        <Link href={props.location}>
          <a
            className={`flex items-center ${
              router.pathname == props.location && "bg-sky-100"
            }  mb-2 px-4 p-2 my-1 navItem   rounded-sm hover:bg-sky-100 `}
          >
            <i className={`bi ${props.icon} mr-2`}></i>
            <span className="text-sm">{props.name}</span>
          </a>
        </Link>
      </li>
    );
  };
  const UserData = () => {
    const router = useRouter();
    return (
      <div className="userData m-auto mt-20 hidden  mb-5  p-5 flex-wrap  text-white  justify-between md:flex items-center container rounded-sm">
        <div className="avtarP">{context.username.charAt(0)}</div>
        <div className="mt-2 sm:mt-0  ">
          <h1 className="text-center font-semibold text-2xl">
            {context.username}
          </h1>
          <p className=" text-center text-xs">Welcome to DSY consultancy !</p>
        </div>
        <div className="flex mt-2  sm:mt-0  flex-col items-center">
          {router.pathname == "/Profile" ? (
            ""
          ) : (
            <Link
              href={{
                pathname: `/Profile`,
                query: {
                  id: context.userId,
                },
              }}
            >
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
                  <li>
                    <Link
                      href={{
                        pathname: `/Profile`,
                        query: {
                          id: context.userId,
                          // cName: props.collegeName.replace(" ", "+"),
                        },
                      }}
                    >
                      <a
                        className={`flex items-center ${
                          router.pathname == "/Profile" && "bg-sky-100"
                        }  mb-2 px-4 p-2 my-1 navItem hover:bg-sky-100  rounded-sm`}
                      >
                        <i className={`bi bi-person-fill mr-2`}></i>
                        <span className="text-sm">Profile</span>
                      </a>
                    </Link>
                  </li>
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

                  {context.userAllData.role == context.adminKey && (
                    <li>
                      <Link href="/Admin/AllContact">
                        <a
                          className={`flex items-center ${
                            router.pathname == "/Admin/AllContact" &&
                            "bg-sky-100"
                          }  mb-2 px-4 p-2 my-1 navItem hover:bg-sky-100  rounded-sm`}
                        >
                          <i className={`bi bi-bar-chart-line-fill mr-2`}></i>
                          <span className="text-sm">Dashboard</span>
                        </a>
                      </Link>
                    </li>
                  )}
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
