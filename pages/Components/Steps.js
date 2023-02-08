import React from "react";

const Steps = () => {
  const stepList = [
    {
      Image: "bi-1-circle-fill",
      StepNo: "STEP 1",
      StepData: "Complete Profile to Get  College Recommendations",
    },
    {
      Image: "bi-2-circle-fill",

      StepNo: "STEP 2",
      StepData: "Shortlist Colleges & Fill CAF",
    },
    {
      Image: "bi-3-circle-fill",

      StepNo: "STEP 3",
      StepData: "Get Expert Help",
    },
    {
      Image: "bi-4-circle-fill",

      StepNo: "STEP 4",
      StepData: "Upload Documents & Pay Fee",
    },
    {
      Image: "bi-5-circle-fill",

      StepNo: "STEP 5",
      StepData: "Confirm Admission & Claim Gift",
    },
  ];

  const StepsData = (props) => {
    return (
      <div className="flex relative pb-12">
        <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
          <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div className="flex-shrink-0 w-10 h-10 rounded-full pBtn inline-flex items-center justify-center  relative ">
          <i className={`bi ${props.image} `}></i>
        </div>
        <div className="flex-grow pl-4">
          <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
            {props.stepNo}
          </h2>
          <p className="leading-relaxed">{props.stepData}</p>
        </div>
      </div>
    );
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            {stepList.map((item, index) => {
              return (
                <StepsData
                  image={item.Image}
                  stepNo={item.StepNo}
                  stepData={item.StepData}
                  key={index}
                />
              );
            })}
          </div>
          <img
            className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-sm md:mt-0 mt-12"
            src="/img/admission.svg"
            alt="step"
          />
        </div>
      </div>
    </section>
  );
};

export default Steps;
