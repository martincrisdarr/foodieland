import React, { useState } from "react";
import contactChef from "../../assets/images/contact/contactChef.png";
import SuccessAlert from "../../components/SuccessAlert/SuccessAlert";
function Contact() {
  const [datos, setDatos] = useState({
    name: "",
    email: "",
    subject: "",
    enquiry: "",
    textarea: "",
  });
  const [success, setSuccess] = useState(true);
  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    setSuccess(false);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-40 mb-16 inter w-full px-6 md:px-16">
        <h1 className="text-5xl font-semibold">Contact us</h1>
        <div className="flex flex-col md:flex-row w-full h-full md:h-[450px] mt-16 gap-24 md:gap-8">
          {/* CHEF IMAGE */}
          <div className="lightblueBackgrounds px-6 order-2 md:order-1 w-full md:w-[30%]  rounded-3xl h-[400px] sm:h-[500px] md:h-full ">
            <img
              src={contactChef}
              alt="conctactChef "
              className="object-cover bg-contain h-full  w-full"
            />
          </div>
          <form
            className="w-full md:w-[70%] h-full md:h-[10%] flex flex-wrap gap-12 "
            onSubmit={handleSubmit}
          >
            {/* NAME */}
            <label
              htmlFor="name"
              className="flex flex-col gap-2 text-[#00000099]  font-semibold w-full md:w-[40%] "
            >
              NAME
              <input
                type="text"
                required
                autoFocus
                name="name"
                placeholder="Enter your name..."
                className=" w-full py-4 pl-6 border-slate-200 border-2 rounded-2xl outline-blue-300  "
                onChange={handleChange}
              />
            </label>
            {/* EMAIL */}
            <label
              htmlFor="email"
              className="flex flex-col gap-2 text-[#00000099] font-semibold w-full md:w-[40%]"
            >
              EMAIL ADDRESS
              <input
                type="email"
                name="email"
                required
                placeholder="Your email address...."
                className=" w-full py-4 pl-6 border-slate-200 border-2 rounded-2xl outline-blue-300  "
                onChange={handleChange}
              />
            </label>
            {/* SUBJECT */}
            <label
              htmlFor="subject"
              className="flex flex-col gap-2 text-[#00000099] font-semibold w-full md:w-[40%]"
            >
              SUBJECT
              <input
                type="text"
                name="subject"
                required
                placeholder="Enter subject...."
                className=" w-full py-4 pl-6 border-slate-200 border-2 rounded-2xl outline-blue-300  "
                onChange={handleChange}
              />
            </label>
            {/* ENQUIRY */}
            <label
              htmlFor="enquiry"
              className="flex flex-col gap-2 text-[#00000099] font-semibold w-full md:w-[40%]"
            >
              ENQUIRY TYPE
              <select
                name="enquiry"
                id=""
                className=" w-full py-4 px-6 border-slate-200 border-2 rounded-2xl outline-blue-300  "
                onChange={handleChange}
              >
                <option name="enquiry">Advertising</option>
                <option name="enquiry">Option 2</option>
                <option name="enquiry">Option 3</option>
              </select>
            </label>
            {/* MESSAGES */}
            <label
              htmlFor="textarea"
              className="flex flex-col gap-2 text-[#00000099] font-semibold w-full"
            >
              MESSAGES
              <textarea
                name="textarea"
                required
                id=""
                cols="30"
                rows="10"
                className="  h-32  pl-6 pt-4 border-slate-200 border-2 rounded-2xl outline-blue-300  w-full md:w-[85%] "
                placeholder="Enter your message..."
                onChange={handleChange}
              ></textarea>{" "}
            </label>
            <button
              type="submit"
              className="py-4 px-12 tracking-wider rounded-2xl bg-black text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <SuccessAlert btnFunction={success} successFunction={setSuccess} />
    </>
  );
}

export default Contact;
