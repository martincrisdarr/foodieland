import React from "react";
import cocinera from "../../assets/images/recipesSection/cocinera.png";
function Directions({ selected }) {
  const { step } = selected;
  return (
    <>
      <div className="px-6 lg:px-16 w-full lg:w-[70%] inter mt-16 ">
        <div className="mt-8 flex flex-col gap-16">
          <img src={cocinera} alt="cocinera" />
          <h1 className="text-4xl font-semibold">Directions</h1>
          {step?.map((step, index) => (
            <div key={index}>
              <h1 className="text-xl font-semibold">{index + 1}. Step</h1>
              <p className="text-[#00000099] ">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Directions;
