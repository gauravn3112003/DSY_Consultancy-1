import React, { useEffect, useState } from "react";
import Link from "next/link";
import UserDropdown from "./UserDropdown";
import baseUrl from "../../baseUrl";
import TopNav from "directsecondyearadmission/navItem/TopNav";
import HomeNav from "directsecondyearadmission/navItem/HomeNav";

const Nav = () => {
  const [nav, setnav] = useState("hidden");
  const [overlay, setOverlay] = useState("");

  const toggleNav = () => {
    if (nav == "") {
      setnav("mobileNav");
    } else {
      setnav("");
    }
  };

  const closeNav = () => {
    if (nav == "block") {
    }
  };

  const ListItem = (props) => {
    return (
      <li>
        <Link href={props.location}>
          <a
            onClick={closeNav}
            className="block  colorBlack py-2 navItem pl-3 pr-4 text-sm rounded-sm   md:p-0"
            aria-current="page"
          >
            {props.name}
          </a>
        </Link>
      </li>
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
  const SearchDropdown = () => {
    return (
      <>
        <section className="relative">
          <div
            onClick={toggleUser}
            type="button"
            className="h-8 mr-3 w-8 rounded-full flex items-center justify-center font-semibold  sm:h-10 sm:w-10 cursor-pointer "
            // src="/img/logo.svg"
            alt="User dropdown"
          >
            <i className="bi font-bold text-xl bi-search"></i>
          </div>
        </section>
      </>
    );
  };

  const [data, setData] = useState();

  useEffect(() => {
    const status = async () => {
      const res = await fetch(baseUrl + "/api/Colleges", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setData(data);
    };
    status();
  }, []);

  return (
    <>
      <nav className="bg-white px-2 sm:px-4 py-2.5 0 fixed w-full z-20 top-0 left-0 border-b border-gray-200 ">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link href="/">
            <a className="flex items-center">
              <img
                src="/img/logo.svg"
                className="h-7 mr-3 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap pColor">
                DSY
              </span>
            </a>
          </Link>
          <div className="flex items-center md:order-2">
            <Link href="/Login">
              <button
                type="button"
                className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center mr-3  pBtn dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Get started
              </button>
            </Link>
            <UserDropdown />
            <SearchDropdown />
            <button
              onClick={function () {
                setnav("block");
              }}
              type="button"
              className="inline-flex items-center p-2 text-sm md:hidden colorBlack"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className={`items-center justify-between navUI hidden ${overlay} w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul
              className={`md:flex flex-col  hidden  bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white  `}
            >
              {TopNav.map((item, index) => {
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
        </div>
      </nav>

      {/* Scroll Dropdown */}
      <div
        className={`fixed bg-black bg-opacity-40  filter   ${userOpen} px-2    h-screen mt-0   z-10  py-5 w-full transition-all  rounded-sm shadow-lg focus:outline-none`}
      >
        <form
          className=" container relative flex justify-between items-center gap-5 bg-white px-5 py-3 m-auto shadow-sm"
          role="none"
        >
          <input
            type="search"
            placeholder="Search College..."
            className=" outline-none w-full  rounded-sm   text-sm bg-white rounded-r-none"
          />

          <i className="bi font-bold text-xl bi-search cursor-pointer "></i>
        </form>
      </div>

      <div className={`absolute w-full h-full top-0 z-20  md:hidden ${nav}`}>
        <div
          className="absolute w-full h-full top-0 z-20 lightBlack  cursor-pointer"
          onClick={function () {
            setnav("hidden");
          }}
        />
        <div className="absolute w-4/5 h-full top-0 z-20  bg-white">
          <div className=" flex flex-col justify-between items-start  bgColor w-full top-0 p-5">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-5 border-white border-4 ">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="w-full h-full"
              />
            </div>
            <h1 className="text-white  font-bold text-xl">
              Welcome to DSY Consultancy
            </h1>
            <h1 className="text-white  font-semibold text-lg">
              Gaurav Narnaware
            </h1>
            <Link href="/Profile">
              <a className="text-slate-400 text-sm">Manage Your Profile </a>
            </Link>
          </div>
          <div className="p-5">
            {TopNav.map((item, index) => {
              return (
                <div className="flex  items-center  mb-2" key={index}>
                  <i className="bi-buildings-fill bi mr-5"></i>
                  <Link href={item.location}>
                    <button
                      onClick={function () {
                        setnav("hidden");
                      }}
                      className=" w-full text-sm font-semibold text-left "
                    >
                      {item.name}
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="border mx-5" />
          <div className="p-5">
            {HomeNav.map((item, index) => {
              return (
                <div className="flex  items-center  mb-2" key={index}>
                  <i className={`${item.icon} bi mr-5`}></i>
                  <Link href={item.location}>
                    <button
                      onClick={function () {
                        setnav("hidden");
                      }}
                      className=" w-full text-sm font-semibold text-left "
                    >
                      {item.name}
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
