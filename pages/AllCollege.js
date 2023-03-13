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

  // useEffect(() => {
  //   setLoading(false); // set loading to false when the data is fetched
  // }, [data]);

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
      <>
        <Link
          target="_blank"
          href={{
            pathname: `/CollegeDa/[id]`,
            query: {
              id: props.id,
            },
          }}
        >
          <a target="_blank" className="flex flex-col bg-white cursor-pointer ">
            <p
              rel="noopener noreferrer"
              className="  h-52 relative grid place-items-center  overflow-hidden"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <span className="absolute left-5 top-5 bgColor text-white text-xs px-2 py-1 rounded-sm">
                {props.collegeUnder}
              </span>
              <img
                className="object-cover h-40 w-40  cursor-pointer "
                src={props.image}
              />
            </p>
            <div className="flex flex-col flex-1 p-6">
              <p
                rel="noopener noreferrer"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></p>
              <p
                rel="noopener noreferrer"
                className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
              >
                {props.approvedBy}
              </p>

              <p
                target="_blank"
                className="flex-1 cursor-pointer py-2 text-lg font-semibold leading-snug"
              >
                {props.cName}
              </p>
              <p className="text-sm text-slate-500">{props.address}</p>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <div>
                  <i className="bi mr-2 bi-eye-fill"></i>
                  <span>{props.views} Views</span>
                </div>
                <div>
                  <i className="bi mr-2 bi-pin-map-fill"></i>
                  <span>{props.district}</span>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </>
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
                <div className="grid  grid-cols-1 gap-x-4 gap-y-8  md:grid-cols-2 lg:grid-cols-4">
                  {undercolleges.map((item, index) => {
                    return (
                      <CollegeCard
                        key={index}
                        approvedBy={item.approvedBy}
                        id={item._id}
                        cName={item.name}
                        collegeUnder={item.collegeUnder}
                        address={item.location.addressLine}
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
