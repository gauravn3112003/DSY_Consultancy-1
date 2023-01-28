import React, { useState } from "react";
import Link from "next/link";
import UserDropdown from "./UserDropdown";

const SearchDropdown = () => {
  const [userOpen, setUserOpen] = useState("hidden");
  const toggleUser = () => {
    if (userOpen == "hidden") {
      setUserOpen("block");
    } else {
      setUserOpen("hidden");
    }
  };

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

        <div
          className={`absolute ${userOpen} px-2 right-0 z-10 mt-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <form
            method="POST"
            action="#"
            className=" py-2  w-full shadow-sm"
            role="none"
          >
            <input
              type="search"
              placeholder="Search College..."
              className=" outline-none w-full text-sm bg-white rounded-r-none"
            />
          </form>
        </div>
      </section>
    </>
  );
};

const Nav = () => {
  const [nav, setnav] = useState("");
  const [overlay, setOverlay] = useState("");

  const toggleNav = () => {
    if (nav == "") {
      setnav("mobileNav");
      setOverlay("overlay");
    } else {
      setnav("");
      setOverlay("");
    }
  };

  const closeNav = () => {
    if (nav == "mobileNav") {
      setnav("");
      setOverlay("");
    }
  };

  const list = [
    {
      name: "Home",
      location: "/Home",
    },
    {
      name: "Latest News",
      location: "/Latest",
    },
    {
      name: "Colleges",
      location: "/Colleges",
    },
    {
      name: "About",
      location: "/AboutUs",
    },
    {
      name: "Contact",
      location: "/ContactUs",
    },
  ];

  const ListItem = (props) => {
    return (
      <li>
        <Link href={props.location}>
          <a
            onClick={closeNav}
            className="block  colorBlack py-2 navItem pl-3 pr-4 text-sm rounded  md:p-0"
            aria-current="page"
          >
            {props.name}
          </a>
        </Link>
      </li>
    );
  };

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
                className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3  pBtn dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Get started
              </button>
            </Link>
            <UserDropdown />
            <SearchDropdown />
            <button
              onClick={toggleNav}
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
              className={`flex flex-col    bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ${nav}  dark:border-gray-700`}
            >
              {list.map((item, index) => {
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
    </>
  );
};

export default Nav;
