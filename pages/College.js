import HomeLayout from "directsecondyearadmission/Layout/HomeLayout";
import React from "react";

const College = () => {
  const SingleCollege = () => {
    return (
      <div className="PContainer">
        <div className="CImage">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/College_of_Engineering%2C_Pune_logo.jpg/220px-College_of_Engineering%2C_Pune_logo.jpg"
            alt=""
          />
        </div>

        <div className="CData">
          <h1 className="font-bold text-xl">College of engineering Pune</h1>
          <div className="CShortData">
            <span className="text-xs">
              <span className="font-semibold">Approved By :</span> AICTE,NBA{" "}
            </span>
            <br/>
            <span className="text-xs">
              <span className="font-semibold">Type :</span> Autonomous
              Government
            </span>
            <br />
            <span className="text-xs">
              <span className="font-semibold">Location :</span> Wellesley Rd,
              Shivajinagar, Pune, Maharashtra 411005
            </span>
            <br />
            <span className="text-xs">
              <span className="font-semibold">Institute Code :</span> 411005
            </span>
          </div>
        </div>

        <div className="CBtn">
          <button type="button" className="pBtn px-3 text-sm py-2">
            Read More
          </button>
        </div>
      </div>
    );
  };

  return (
    <HomeLayout>
        

      <SingleCollege />
      <SingleCollege />
      <SingleCollege />
      <SingleCollege />
      <SingleCollege />
      <SingleCollege />
      <SingleCollege />
      <SingleCollege />
      <SingleCollege />
      <SingleCollege />
      <SingleCollege />
      <SingleCollege />
      <SingleCollege />
      <SingleCollege />
      <SingleCollege />
      <SingleCollege />
      <SingleCollege />
      <SingleCollege />
      <SingleCollege />
      <SingleCollege />
      <SingleCollege />
      <SingleCollege />
      <SingleCollege />
    </HomeLayout>
  );
};

export default College;
