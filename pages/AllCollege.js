import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { collegeByUnder } from "directsecondyearadmission/quieries/quieries";
import Head from "next/head";
import Image from "next/image";
import collegeContext from "directsecondyearadmission/Context/collegeContext";
import { useContext } from "react";
import baseUrl from "directsecondyearadmission/baseUrl";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { useRouter } from "next/router";
import Loading from "./Components/Loading";
import HomeLayout from "directsecondyearadmission/Layout/HomeLayout";
import CollegeLayout from "directsecondyearadmission/Layout/CollegeLayout";

const AllCollege = () => {
  const [loading, setLoading] = useState(true);
  const [data, setdata] = useState(null);
  const [selectedCollegeUnder, setSelectedCollegeUnder] = useState([]);
  const [district, setdistrict] = useState("");
  const onChangeCollegeUnderHandler = (under, isChecked) => {
    isChecked
      ? setSelectedCollegeUnder((prevUnder) => [...prevUnder, under])
      : setSelectedCollegeUnder(
          selectedCollegeUnder.filter((und) => und !== under)
        );
  };

  // filter for College Under
    const undercolleges = collegeByUnder(selectedCollegeUnder, data, district);
  const router = useRouter();
  const context = useContext(collegeContext);

  useEffect(() => {
    const getColleges = async () => {
      const res = await fetch(baseUrl + "/api/Colleges", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setdata(data);
    };
    getColleges();
  }, []);

  const Loader = () => {
    return (
      <div className=" bg-white grid place-items-center">
        <img src="/img/loader.gif" className="" alt="" />
      </div>
    );
  };

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

    // College Under Components
    const CollegeUnder = () => {
      const checkBoxItem = ["Government", "Private"];

      return (
        <div className="  px-5  grid grid-cols-2 gap-5">
          {checkBoxItem.map((item, index) => {
            return (
              <div className="flex gap-2    items-center" key={index}>
                <input
                  type="checkbox"
                  checked={selectedCollegeUnder.includes(item)}
                  onChange={(e) =>
                    onChangeCollegeUnderHandler(item, e.target.checked)
                  }
                />
                <label className="text-xs">{item}</label>
              </div>
            );
          })}
        </div>
      );
    };

    const DistrictFilter = () => {
      const districtName = data && data.map((item) => item.location.district);
      const removeDubDist =
        data &&
        data.filter(
          (district, index) =>
            !districtName.includes(district.location.district, index + 1)
        );

      return (
        <div className="px-5">
          <select
            value={district}
            onChange={function (e) {
              setdistrict(e.target.value);
            }}
            className=" outline-none w-full py-2 rounded-sm border"
          >
            <option value="" className="text-center font-bold py-2">
              {" "}
              All District
            </option>
            {removeDubDist &&
              removeDubDist.map((item, index) => {
                return (
                  <option
                    key={index}
                    value={item.location.district}
                    className="text-center text-sm"
                  >
                    {item.location.district}
                  </option>
                );
              })}
          </select>
        </div>
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
            className={`absolute ${userOpen} right-0 z-10 mt-2 w-80 origin-top-right rounded-sm bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-5" role="none">
              {items.map((item, index) => {
                return (
                  <NavItem
                    location={item.Location}
                    name={item.Name}
                    key={index}
                  />
                );
              })}
              <div className="h-1 mx-5 my-5 bg-slate-50" />
              <CollegeUnder />
              <div className="h-1 mx-5 my-5 bg-slate-50" />
              <DistrictFilter />
            </div>
          </div>
        </div>
      </nav>
    );
  };

  const CollegeCard = (props) => {
    return (
      <div className="  bg-white  h-96 flex flex-col shadow-md justify-between  rounded-sm  p-5">
        <div className="h-32 grid bg-slate-50 rounded-sm place-items-center ">
          <img
            className="rounded-full border-blue-900 border-2 h-20 w-20 "
            src={props.image}
            alt=""
          />
        </div>
        <div className="font-bold flex justify-between  text-blue-900  text-xs py-2">
          <div>{props.approvedBy}</div>
          <div>
            <i className="bi text-slate-400 mr-2 text-xs bi-eye-fill"></i>

            {props.views}
          </div>{" "}
        </div>
        <div className="font-bold  text-base ">{props.cName} </div>
        <div className="font-medium mt-2 flex items-center text-xs ">
          <i className="bi text-slate-400 mr-5 text-xs bi-pin-map-fill"></i>
          <span className="text-slate-400 font-normal text-justify">
            {props.address} {props.district}
          </span>
        </div>

        <div className="font-medium mt-2 flex justify-between items-center pColor text-xs ">
          <div className="font-medium mt-2 flex items-center pColor text-xs ">
            <i className="bi text-slate-400 mr-2   bi-send-fill"></i>
            <div>{props.collegeType}</div>
          </div>
          <div className="font-medium mt-2 flex items-center pColor text-xs ">
            <div>{props.collegeUnder}</div>
            <i className="bi text-slate-400 ml-2   bi-flag-fill"></i>
          </div>
        </div>

        <div className=" mt-5 flex  gap-5 w-full justify-center items-center">
          <Link
            href={{
              pathname: `/CollegeDa/[id]`,
              query: {
                id: props.id,
              },
            }}
          >
            <a
              type="button"
              target="_blank"
              className="pBtn w-2/4 text-center px-3 text-xs py-2"
            >
              Read More
            </a>
          </Link>

          <Link href={`tel:+91${props.contacts}`}>
            <a
              type="button"
              className="border w-2/4 text-center px-3 text-xs py-2"
            >
              Make a call
            </a>
          </Link>
        </div>
      </div>
    );
  };
  const CompleteData = () => {
    return (
      <div className=" px-5 sm:px-0  container m-auto">
        <BreadCrumb />
        <section className=" overflow-y-scroll h-screen ">
          <div className=" space-y-6 ">
            {/* <Loader/> */}
            {!data ? (
              <Loader />
            ) : (
              <>
                {undercolleges.length == 0 && (
                  <div className="text-center w-full text-sm font-semibold rounded-sm bg-blue-50 border-blue-100 border p-5 ">
                    <Image src="/img/NoData.svg" width={100} height={100} />
                    <p className="mt-5 text-xl">College Not Found</p>
                  </div>
                )}
                <div className="grid  grid-cols-1 gap-x-4 gap-y-4 overflow-y-scroll  md:grid-cols-2 lg:grid-cols-4">
                  {undercolleges.map((item, index) => {
                    return (
                      <CollegeCard
                        key={index}
                        approvedBy={item.approvedBy}
                        id={item._id}
                        cName={item.name}
                        collegeUnder={item.collegeUnder}
                        collegeType={item.collegeType}
                        address={item.location.addressLine}
                        contacts={item.contacts.contactNo}
                        district={item.location.district}
                        image={item.image}
                        views={item.views}
                      />
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </section>
      </div>
    );
  };
  return (
    <>
      <Head>
        <title>DSY consultancy | All Colleges</title>
        <meta
          name="keywords"
          content="Direct Second Year Admission, Consultancy Services, Admission Assistance, Education Counseling, Admission Consultancy, College Admission Guidance, Admission Process, Admission Requirements, Engineering Admissions, After Diploma Admissions, DSY, Direct Second Year Admission Consultancy | DSY, Direct Second Year Admission Consultancy, Direct Second Year Admission, DSY consultancy, DSY consultancy | All Colleges"
        />

        <meta name="title" content="DSY consultancy | All Colleges" />
      </Head>

      {context.loginStatus ? (
        <HomeLayout>
          <CompleteData />
        </HomeLayout>
      ) : (
        <CollegeLayout>
          <CompleteData />
        </CollegeLayout>
      )}
    </>
  );
};

export default AllCollege;
