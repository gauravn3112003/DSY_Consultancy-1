import LatestNews from "directsecondyearadmission/Layout/LatestNews";
import React from "react";
import Link from "next/link";

const Latest = () => {
  const NewsBlog = () => {
    return (
      <Link href="/">
        <article className="flex flex-col bg-white cursor-pointer ">
          <p
            rel="noopener noreferrer"
            aria-label="Te nulla oportere reprimique his dolorum"
          >
            <img
              className="object-cover cursor-pointer w-full h-52 "
              src="https://source.unsplash.com/200x200/?fashion?1"
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
              <span>2.1K views</span>
            </div>
          </div>
        </article>
      </Link>
    );
  };

  return (
    <LatestNews>
      <section className="">
        <div className="container  mx-auto space-y-8">
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            <NewsBlog />
            <NewsBlog />
            <NewsBlog />
            <NewsBlog />
            <NewsBlog />
            <NewsBlog />
            <NewsBlog />
            <NewsBlog />
            <NewsBlog />
            <NewsBlog />
            <NewsBlog />
            <NewsBlog />
            <NewsBlog />
            <NewsBlog />
            <NewsBlog />
          </div>
        </div>
      </section>
    </LatestNews>
  );
};

export default Latest;
