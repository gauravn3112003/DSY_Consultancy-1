import Pricing from "./Components/Pricing";
import Link from "next/link";
import Steps from "./Components/Steps";
import Typewriter from "typewriter-effect";

import Teams from "./Components/Teams";
const CollegeCard = () => {
  const Card = () => {
    return (
      <div className="flex flex-col hover:bg-blue-500 bg-white  flex-1 p-6">
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
    );
  };
  return (
    <>
      <Link href="/">
        <article className="flex w-96 flex-row gap-5 cursor-pointer ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </article>
      </Link>
    </>
  );
};

const AppDown = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
        <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            Download our Application
          </h2>
          <h1 className="md:text-3xl text-2xl font-medium title-font text-gray-900">
            DSY Consultancy
          </h1>
        </div>
        <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
          <button className="bg-white inline-flex py-3 px-5 rounded-sm items-center hover:bg-gray-200 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 512 512"
            >
              <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
            </svg>
            <span className="ml-4 flex items-start flex-col leading-none">
              <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
              <span className="title-font font-medium">Google Play</span>
            </span>
          </button>
          <button className="bg-white inline-flex py-3 px-5 rounded-sm items-center hover:bg-gray-200 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 305 305"
            >
              <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
              <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
            </svg>
            <span className="ml-4 flex items-start flex-col leading-none">
              <span className="text-xs text-gray-600 mb-1">
                Download on the
              </span>
              <span className="title-font font-medium">App Store</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const HomeAds = () => {
    return (
      <>
        <div className="container m-auto px-5">
          <div className="ads ">Space for Advertisement</div>
        </div>
      </>
    );
  };
  return (
    <>
      <section className="md:mt-14 mt-0 bgColor pb-5  body-font">
        <div className=" container m-auto mt-14 p-5 ">
          <marquee
            width="100%"
            direction="left"
            className="blink text-yellow-300"
            scrollamount="12"
          >
            Admission for Direct second Year will be started{" "}
            <span className="ml-5 text-white">
              <a href="/Home">Click Here</a>
            </span>
          </marquee>
        </div>
        <div className="container   mx-auto flex px-5   md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font text-left font-normal sm:text-4xl text-3xl mb-4  text-white">
              <span className="font-bold"> Direct Second Year</span>{" "}
              Admission&nbsp;
              <br className="hidden lg:inline-block" />
              Consultancy
            </h1>
            <p className="  text-white opacity-70 text-justify leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>

            <div className="py-5 flex text-left w-full sm:text-left text-white font-bold text-xl ">
              We help&nbsp;
              <span className="text-yellow-300 ntext-left">
                <Typewriter
                  options={{
                    strings: ["to find right College", "to get Admission"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>

            <div className="flex w-full  justify-start ">
              <button className="inline-flex font-semibold bg-yellow-300 border-0 py-2  px-6 focus:outline-none  rounded-sm text-lg">
                Search College
              </button>
              <Link href="/Login">
                <button className="ml-4 font-semibold inline-flex text-yellow-500 border py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-sm text-lg">
                  Login
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center w-full rounded-sm"
              alt="hero"
              src="/img/hero.png"
            />
          </div>
        </div>
      </section>

      <AppDown />
      {/* <HomeAds /> */}
      <section className="container m-auto p-5">
        <h1 className="sm:text-4xl text-center text-3xl font-medium title-font mb-5 text-gray-900">
          University
        </h1>
        <marquee width="100%" direction="left" scrollamount="12">
          <CollegeCard />
        </marquee>
      </section>
      <Steps />
      <Pricing />

      <Teams />
    </>
  );
}
