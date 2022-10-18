import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
function SuccessAlert({ btnFunction, successFunction }) {
  const handleSuccess = () => {
    successFunction(true);
  };
  return (
    <>
      <div
        className={
          btnFunction !== false
            ? "fixed -right-[50%]"
            : "w-[300px] h-[50px] transition-all duration-500 bg-green-700 text-white fixed top-32 right-[5%] rounded-2xl  px-6 font-semibold flex justify-between items-center"
        }
      >
        <p>Suscribe Success!</p>
        <AiOutlineCloseCircle
          onClick={handleSuccess}
          size="1.5rem"
          className="cursor-pointer"
        />
      </div>
    </>
  );
}

export default SuccessAlert;
