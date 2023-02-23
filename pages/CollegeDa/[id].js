import HomeLayout from "directsecondyearadmission/Layout/HomeLayout";
import React, {  useState } from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import Rating from "@mui/material/Rating";
import baseUrl from "directsecondyearadmission/baseUrl";

const CollegeCard = () => {
  return (
    <>
      <div className="flex flex-col w-full sm:w-80 bg-slate-100 cursor-pointer ">
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

const CollegeData = ({ College }) => {
  const rouuter = useRouter();
  const [count, setCount] = useState(1);
  const data = "";
  var topRecu = College.approvedBy.split(",");

  const CInfoData = ({ children }) => {
    return (
      <div className="bg-white  mt-5 rounded-sm">
        <div className="flex gap-5 overflow-x-scroll p-3  border rounded-sm ">
          <button
            onClick={function () {
              setCount(1);
            }}
            className={
              count == 1
                ? "bg-sky-500 text-white px-5  font-semibold rounded-3xl  p-2"
                : " font-semibold"
            }
            type="button"
          >
            {" "}
            Overview
          </button>
          <button
            onClick={function () {
              setCount(2);
            }}
            className={
              count == 2
                ? "bg-sky-500 text-white px-5  font-semibold rounded-3xl  p-2"
                : " font-semibold"
            }
            type="button"
          >
            {" "}
            Courses
          </button>
          <button
            onClick={function () {
              setCount(3);
            }}
            className={
              count == 3
                ? "bg-sky-500 text-white px-5  font-semibold rounded-3xl  p-2"
                : " font-semibold"
            }
            type="button"
          >
            {" "}
            CutOffs
          </button>
          <button
            onClick={function () {
              setCount(4);
            }}
            className={
              count == 4
                ? "bg-sky-500 text-white px-5  font-semibold rounded-3xl  p-2"
                : " font-semibold"
            }
            type="button"
          >
            {" "}
            Gallery
          </button>
          <button
            onClick={function () {
              setCount(5);
            }}
            className={
              count == 5
                ? "bg-sky-500 text-white px-5  font-semibold rounded-3xl  p-2"
                : " font-semibold"
            }
            type="button"
          >
            {" "}
            Address
          </button>
        </div>
        <div className="mt-5 text-sm">{children}</div>
      </div>
    );
  };

  const CollegeArtical = (props) => {
    return (
      <div className="mt-5">
        <div dangerouslySetInnerHTML={{ __html: props.Artical }} />
      </div>
    );
  };
  const CollegeCourses = ({ courses }) => {
    return (
      <div className="mt-5">
        <table className="w-full border  outline-none">
          <thead className="border-none  outline-none">
            <tr className="border-none   outline-none">
              <th className="py-3 border-none bg-blue-50">Sr. No.</th>
              <th className="py-3 border-none bg-blue-50">Choice Code</th>
              <th className="px-10 border-none bg-blue-50 text-left">
                Course Name
              </th>
              <th className="py-3 border-none bg-blue-50">Annual Fees</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((item, index) => {
              return (
                <tr className="border-none " key={index}>
                  <td className="border-none border-slate-500 text-center font-bold">
                    {index + 1}
                  </td>
                  <td className="border-none border-slate-500 text-center">
                    {item.choiceCode}
                  </td>
                  <td className="border-none border-slate-500 px-10">
                    {item.courseName}
                  </td>
                  <td className="border-none border-slate-500 text-center">
                    {item.annalFee}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };
  const CollegeCategory = ({ category }) => {
    return (
      <div className="mt-5">
        <table className="w-full border  outline-none">
          <thead className="border-none  outline-none">
            <tr className="border-none   outline-none">
              <th className="py-3 border-none bg-blue-50">Choice Code</th>
              <th className="px-10 border-none bg-blue-50 text-left">
                Course Name
              </th>
              <th className="py-3 border-none bg-blue-50">Category</th>
              <th className="px-3 border-none bg-blue-50 ">Min %</th>
              <th className="py-3 border-none bg-blue-50">Max %</th>
              <th className="py-3 border-none bg-blue-50">Annual Fees</th>
              <th className="py-3 border-none bg-blue-50">Seats</th>
            </tr>
          </thead>
          {category.map((item, index) => {
            return (
              <tbody key={index}>
                {item.categories.map((category, indexCast) => {
                  return (
                    <tr className="border-none " key={indexCast}>
                      <td className="border-none text-center border-slate-500 ">
                        {item.choiceCode}
                      </td>
                      <td className="border-none text-left border-slate-500 px-10">
                        {item.courseName}
                      </td>
                      <td className="border-none border-slate-500 text-center">
                        {category.category}
                      </td>
                      <td className="border-none border-slate-500 text-center">
                        {category.min}
                      </td>
                      <td className="border-none border-slate-500 text-center">
                        {category.max}
                      </td>
                      <td className="border-none border-slate-500 text-center">
                        {category.aFees}
                      </td>
                      <td className="border-none border-slate-500 text-center">
                        {category.aSeats}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            );
          })}
        </table>
      </div>
    );
  };

  const CollegeAddress = (props) => {
    return (
      <div className=" flex gap-5 flex-col sm:flex-row">
        <div className="overflow-scroll grid place-items-center w-full">
          <div className="" dangerouslySetInnerHTML={{ __html: props.maps }} />
        </div>
        <div className="w-full">
          <div className="font-bold  text-lg">
            Address Line :{" "}
            <span className="font-normal text-base">
              {props.locationCollege.addressLine}{" "}
            </span>
          </div>
          <div className="font-bold mt-5 text-lg">
            Taluka :{" "}
            <span className="font-normal text-base">
              {props.locationCollege.taluka}{" "}
            </span>
          </div>
          <div className="font-bold mt-5 text-lg">
            District :{" "}
            <span className="font-normal text-base">
              {props.locationCollege.district}{" "}
            </span>
          </div>
          <div className="font-bold mt-5 text-lg">
            City :{" "}
            <span className="font-normal text-base">
              {props.locationCollege.city}{" "}
            </span>
          </div>
          <div className="font-bold mt-5 text-lg">
            Co-ordinates :{" "}
            <span className="font-normal text-base">
              {props.locationCollege.longitude} ,
              {props.locationCollege.latitude}{" "}
            </span>
          </div>
        </div>
      </div>
    );
  };

  const CollegeImages = ({ images }) => {
    const itemData = [
      {
        img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
        title: "Bed",
      },
      {
        img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
        title: "Books",
      },
      {
        img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
        title: "Sink",
      },
      {
        img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
        title: "Kitchen",
      },
      {
        img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
        title: "Blinds",
      },
      {
        img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
        title: "Chairs",
      },
      {
        img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
        title: "Laptop",
      },
      {
        img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
        title: "Doors",
      },
      {
        img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
        title: "Coffee",
      },
      {
        img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
        title: "Storage",
      },
      {
        img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
        title: "Candle",
      },
      {
        img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
        title: "Coffee table",
      },
    ];
    return (
      <div className="">
        <Box sx={{ height: 1000, overflowY: "scroll" }}>
          <ImageList variant="masonry" cols={4} gap={8}>
            {images.map((item, index) => (
              <ImageListItem key={index}>
                <img src={`${item}`} loading="lazy" />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </div>
    );
  };

  return (
    <>
      <div className="container bg-white rounded-sm mt-20   p-5 mx-auto space-y-12">
        <article className=" ">
          <div className="space-y-6 border-b-2 pb-5">
            <h1 className="text-4xl font-bold sm:text-3xl md:tracking-tight ">
              {College.name} ({College.instituteCode})
            </h1>
            <p className="text-sm font-bold ">
              University :{" "}
              <span className="font-normal text-sm">
                {" "}
                {College.university}{" "}
              </span>
            </p>
            <div className="flex items-start text-slate-400 justify-between w-full flex-row md:items-center ">
              <div className="flex items-center ">
                <img
                  src="/img/logo.svg"
                  alt=""
                  className="w-4 h-4 border mr-2 rounded-full "
                />
                <p className="text-sm ">
                  {College.addedBy} • {College.updatedDate}
                </p>
              </div>
              <p className=" text-sm ">4 min read • {College.views} views</p>
            </div>
            <div className="flex flex-wrap gap-5  space-x-2">
              <Rating
                name="half-rating-read"
                defaultValue={College.rating}
                // precision={0.5}
                size="small"
                readOnly
              />
              <span className="text-sm font-semibold flex">
                {" "}
                <i className="bi text-slate-400 bi-award-fill mr-2"></i>{" "}
                <span className="mr-2">Approved By : </span>
                {topRecu.map((item, index) => {
                  return (
                    <div key={index} className="mr-2 text-xs  px-3 border">
                      {item}
                    </div>
                  );
                })}
              </span>

              <span className="text-sm font-semibold">
                <i className="bi text-slate-400 mr-2 bi-pin-map-fill"></i>
                Location :{" "}
                <span className="font-normal"> {College.location.city}</span>
              </span>
              <span className="text-sm font-semibold">
                <i className="bi text-slate-400 mr-2  bi-flag-fill"></i>
                <span className="font-normal"> {College.collegeUnder}</span>
              </span>
            </div>
          </div>

          <div></div>

          <CInfoData>
            {count == 1 && <CollegeArtical Artical={College.fullDescription} />}
            {count == 2 && <CollegeCourses courses={College.department} />}
            {count == 3 && <CollegeCategory category={College.department} />}
            {count == 4 && <CollegeImages images={College.images} />}
            {count == 5 && (
              <CollegeAddress
                maps={College.iframe}
                locationCollege={College.location}
              />
            )}
          </CInfoData>
        </article>
        <div>
          <div className="space-y-2 mt-5">
            <h4 className="text-lg font-semibold">More Colleges</h4>
            <div className="flex  gap-5 flex-wrap ">
              <CollegeCard />
              <CollegeCard />
              <CollegeCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(baseUrl + "/api/College/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  await fetch(baseUrl + "/api/viewsIn", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      instituteCode: data.instituteCode,
    }),
  });
  return {
    props: { College: data },
  };
}

export default CollegeData;
