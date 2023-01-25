import HomeLayout from "directsecondyearadmission/Layout/HomeLayout";
import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  });
  return (
    <HomeLayout>
      <div className=" bg-white p-5 h-full colorBlack">
        This is Home
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.9778387334336!2d73.86712931528973!3d18.52990357372396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c05f907cd59b%3A0x71822674b4dba769!2sWellesley%20Rd%2C%20Sangamvadi%2C%20Pune%2C%20Maharashtra%20411001!5e0!3m2!1sen!2sin!4v1674665104057!5m2!1sen!2sin"
          width="600"
          height="450"
          // style="border:0;"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </HomeLayout>
  );
};

export default Home;
