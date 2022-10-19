import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogs from "../../data/blog.json";
function Blog() {
  const [selected, setSelected] = useState({});
  const { id } = useParams();
  useEffect(() => {
    setSelected(blogs.find((blog) => blog.id === +id));
  }, [id, selected]);
  return (
    <div className="pt-32 inter px-8 md:px-32 w-full ">
      <h1 className="text-center font-semibold text-5xl py-8 mb-6">
        {selected.title}
      </h1>
      <section className="flex flex-col md:flex-row gap-16">
        <img
          src={selected.img}
          alt={selected.title}
          className="md:w-1/2 object-cover rounded-xl animate__animated animate__fadeInLeft "
        />
        <div className="md:w-1/2 flex flex-col gap-16 animate__animated animate__fadeInRight">
          <div className="flex items-center gap-8 text-gray-500">
            <img
              src={selected.personImg}
              alt="author"
              className="w-12 object-cover"
            />
            <p>{selected.date}</p>
          </div>
          <p className="text-xl">{selected.description}</p>
        </div>
      </section>
    </div>
  );
}

export default Blog;
