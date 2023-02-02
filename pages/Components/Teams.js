import React from "react";

const Teams = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Our Team
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them.
            </p>
          </div>

          <marquee width="100%" direction="left" scrollamount="12">


            <div className="flex gap-5 w-fit flex-row bg-white p-5 ">
              <div className="h-full flex  w-auto  rounded-sm">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100  rounded-full mr-4"
                  src="https://dummyimage.com/80x80"
                />

                <div className="">
                  <h2 className="text-gray-900 title-font font-medium">
                    Gaurav Narnaware
                  </h2>
                  <p className="text-gray-500">Web Developer</p>
                </div>
              </div>
            </div>

            
          </marquee>
        </div>
      </section>
    </>
  );
};

export default Teams;
