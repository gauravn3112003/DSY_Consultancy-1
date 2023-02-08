import HomeLayout from "directsecondyearadmission/Layout/HomeLayout";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const CollegeCard = () => {
  return (
    <Link
      href={{
        pathname: `/CollegeDa/[id]`,
        query: {
          id: "HeyCollegeswala",
          cName: "COEP",
        },
      }}
    >
      <article className="flex flex-col w-full sm:w-80 bg-slate-100 cursor-pointer ">
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
          <h3 className="flex-1 cursor-pointer py-2 text-lg font-semibold leading-snug">
            Te nulla oportere reprimique his dolorum
          </h3>
          <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
            <span>June 1, 2020</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

const CollegeData = (props) => {
  const router = useRouter();
  console.log(router);
  const data = ""
  return (
    <>
      <div className="container bg-white rounded-sm mt-20   p-5 mx-auto space-y-12">
        <article className=" ">
          <div className="space-y-6 border-b-2 pb-5">
            <h1 className="text-4xl font-bold sm:text-3xl md:tracking-tight ">
              Suspendisse ut magna et ipsum sodales accumsan.
            </h1>
            <div className="flex items-start text-slate-400 justify-between w-full flex-row md:items-center ">
              <div className="flex items-center ">
                <img
                  src="/img/logo.svg"
                  alt=""
                  className="w-4 h-4 border mr-2 rounded-full "
                />
                <p className="text-sm ">Gaurav Narnaware • July 19th, 2021</p>
              </div>
              <p className=" text-sm ">4 min read • 1,570 views</p>
            </div>
          </div>
          <div className="mt-5">
            <div   dangerouslySetInnerHTML={{__html: data}} />
              
          </div>
        </article>
        <div>
          <div className="flex flex-wrap py-6 space-x-2 border-b-2 border-dashed ">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm  pBtn hover:font-bold transition-shadow"
            >
              #MambaUI
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm  pBtn hover:font-bold transition-shadow"
            >
              #TailwindCSS
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm  pBtn hover:font-bold transition-shadow"
            >
              #Angular
            </a>
          </div>
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

export default CollegeData;
