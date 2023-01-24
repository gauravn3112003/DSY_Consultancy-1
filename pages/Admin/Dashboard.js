import Dash from "directsecondyearadmission/Layout/Dash";
import HomeLayout from "directsecondyearadmission/Layout/HomeLayout";
import React from "react";

const Dashboard = ({ children }) => {
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
      <Dash>{children}</Dash>
    </HomeLayout>
  );
};

export default Dashboard;
