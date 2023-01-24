import HomeLayout from "directsecondyearadmission/Layout/HomeLayout";
import React from "react";

function Dash({ children }) {
  return (
    <>
      <section className="text-gray-600 h-screen sm:h-auto overflow-y-scroll grid sm:place-items-center place-items-start md:mt-20 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Slow-carb next level shoindcgoitch ethical authentic, poko
              scenester
            </h1>
            <p className="leading-relaxed mt-4">
              Poke slow-carb mixtape knausgaard, typewriter street art gentrify
              hammock starladder roathse. Craies vegan tousled etsy austin.
            </p>
          </div>
          {children}
        </div>
      </section>
    </>
  );
}

const Dashboard = () => {
  const HeaderAdmin = () => {
    return (
      <section className="text-gray-600 rounded-sm bg-white body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                50
              </h2>
              <p className="leading-relaxed">Users</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                1
              </h2>
              <p className="leading-relaxed">Colleges</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                35
              </h2>
              <p className="leading-relaxed">Subscriber</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                4
              </h2>
              <p className="leading-relaxed">Blog</p>
            </div>
          </div>
        </div>
      </section>
    );
  };

  
  return (
    <HomeLayout>
      <HeaderAdmin />
      <div className="bg-white p5">
        
      </div>
    </HomeLayout>
  );
};

export default Dashboard;
