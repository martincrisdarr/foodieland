import React from "react";
import { Link } from "react-router-dom";
function CategoryContainer({ category }) {
  return (
    <Link to={`/categories/${category.category}`}>
      <main
        className={`flex flex-col px-4 justify-between items-center rounded-xl ${category.category} cursor-pointer py-4 mx-auto  w-36`}
      >
        <h1 className="mb-2">{category.name}</h1>
        <img
          src={category.image}
          alt={category.category}
          className="object-contain rounded-[50%] h-32"
        />
      </main>
    </Link>
  );
}

export default CategoryContainer;
