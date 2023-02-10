import React, { useState } from "react";
// import College from "./College";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const BreadCrumb = () => {
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
      Name: "Near Me",
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

  return (
    <nav
      aria-label="breadcrumb"
      className="w-full  flex justify-between items-center mb-5 p-4 bg-white"
    >
      <ol className="flex h-8 space-x-2">
        <li className="flex items-center">
          <Link href="/">
            <a
              rel="noopener noreferrer"
              title="Back to homepage"
              className="hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 pr-1 dark:text-gray-400"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
            </a>
          </Link>
        </li>

        <li className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            fill="currentColor"
            className="w-2 h-2 mt-1 transform rotate-90 fill-current dark:text-gray-600"
          >
            <path d="M32 30.031h-32l16-28.061z"></path>
          </svg>
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex items-center px-1 capitalize hover:underline cursor-default"
          >
            Colleges
          </a>
        </li>
      </ol>

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
    </nav>
  );
};

const CollegeCard = () => {
  return (
    <>
      <div target="_blank" className="flex flex-col bg-white cursor-pointer ">
        <p
          rel="noopener noreferrer"
          aria-label="Te nulla oportere reprimique his dolorum"
        >
          <img
            className="object-cover cursor-pointer w-full h-52 "
            src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1600"
          />
        </p>
        <div className="flex flex-col flex-1 p-6">
          <p
            rel="noopener noreferrer"
            aria-label="Te nulla oportere reprimique his dolorum"
          ></p>
          <a
            rel="noopener noreferrer"
            className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
          >
            Convenire
          </a>
          <Link
            target="_blank"
            href={{
              pathname: `/CollegeDa/[id]`,
              query: {
                id: "HeyCollegeswala",
                cName: "COEP",
              },
            }}
          >
            <a
              target="_blank"
              className="flex-1 cursor-pointer py-2 text-lg font-semibold leading-snug"
            >
              Te nulla oportere reprimique his dolorum
            </a>
          </Link>
          <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
            <span>June 1, 2020</span>
          </div>
        </div>
      </div>
    </>
  );
};

const AllCollege = () => {
  return (
    <>
      <div className="mt-20 px-5 sm:px-0  container m-auto">
        <BreadCrumb />
        <section className=" overflow-y-scroll h-screen ">
          <div className=" space-y-6 ">
            {/* Carosore */}

            {/* <!-- Carousel wrapper --> */}
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  className="object-fill w-full h-96"
                  src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
                  alt="image slide 1"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="object-fill w-full h-96"
                  src="https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg"
                  alt="image slide 2"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="object-fill w-full h-96"
                  src="https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg"
                  alt="image slide 3"
                />
              </SwiperSlide>
            </Swiper>

            {/* Cards */}
            <div className="grid  grid-cols-1 gap-x-4 gap-y-8  md:grid-cols-2 lg:grid-cols-4">
              <CollegeCard />
              <CollegeCard />
              <CollegeCard />
              <CollegeCard />
              <CollegeCard />
              <CollegeCard />
              <CollegeCard />
              <CollegeCard />
              <CollegeCard />
              <CollegeCard />
              <CollegeCard />
              <CollegeCard />
              <CollegeCard />
              <CollegeCard />
              <CollegeCard />
              <CollegeCard />
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="px-6 py-3 text-sm rounded-sm hover:underline pBtn"
                fdprocessedid="32olua"
              >
                Load more posts...
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AllCollege;
