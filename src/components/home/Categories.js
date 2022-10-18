import categories from "../../data/categories.json";
import CategoryContainer from "./CategoryContainer";
function Categories() {
  return (
    <>
      <div className="w-full px-4 py-32 md:px-16 ">
        <div className="flex gap-6 justify-between inter font-semibold mt-16 md:mt-0">
          <h1 className=" text-4xl">Categories</h1>
          <h2 className="bg-[#E7FAFE] text-sm md:text-md px-6 text-center py-4 cursor-pointer rounded-3xl ">
            View All Categories
          </h2>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-16 gap-8 inter font-semibold">
          {categories.map((category) => (
            <CategoryContainer key={category.name} category={category} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Categories;
