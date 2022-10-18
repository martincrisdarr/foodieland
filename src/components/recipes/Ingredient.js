import React, { useState } from "react";
import { FiCircle } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";

function Ingredient({ ingredient }) {
  const [apretado, setApretado] = useState(true);
  const meApretaste = () => {
    setApretado(!apretado);
  };
  return (
    <>
      <div className="flex gap-2 items-center">
        {apretado ? (
          <FiCircle
            onClick={meApretaste}
            size="1.2rem"
            className="cursor-pointer text-slate-400"
          />
        ) : (
          <FaCheckCircle
            onClick={meApretaste}
            size="1.2rem"
            className="cursor-pointer"
          />
        )}
        {apretado ? (
          <p className="text-lg capitalize">
            {ingredient.name && ingredient.name}
          </p>
        ) : (
          <p className="line-through text-lg text-[#00000099] capitalize ">
            {ingredient.name && ingredient.name}
          </p>
        )}
      </div>
    </>
  );
}

export default Ingredient;
