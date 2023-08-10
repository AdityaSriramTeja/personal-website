"use client";
import React, { useState } from "react";
import { Neuton } from "next/font/google";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
const font = Neuton({
  weight: "300",
  subsets: ["latin"],
});
const font1 = Neuton({
  weight: "700",
  subsets: ["latin"],
});
 
const Contact = () => {
  
 

  // This function will be called when the exit animation is complete
  // const init = { username: "", email: "", message: "" }
  // const [formVal, setFormVal] = useState(init); 

  
  // const handleChange = (e) => { 
  //   console.log(e.target); 
  //   const { name, value } = e.target
  //   setFormVal({ ...formVal, [name]: value })
  //   console.log(formVal)
  // }
  
    const [formValues, setFormValues] = useState({
      username: "",
      email: "",
      message: "",
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
  };
 

    const validateForm = () => {
      const newErrors = {};
      if (!formValues.username) {
        newErrors.username = "Username is required";
      }
      if (!formValues.email) {
        newErrors.email = "Email is required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
        newErrors.email = "Invalid email address";
      }
      if (formValues.message.length < 10) {
        newErrors.message = "Message is too short ( < 10 characters)";
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      if (validateForm()) {
        // Handle form submission here, e.g., sending data to server
        // toast.success('Form submitted successfully!', {
        // position: 'top-right',
        // autoClose: 3000, // Close after 3 seconds
        // hideProgressBar: true,
        // });
        emailjs
          .sendForm("pw-gmail", "pw-tempate", event.target, "lk9b3wFWxGfLPZ7AP")
          .then(
            (result) => {
              // console.log(result.text);
              toast.success("Email sent successfully!", {
                position: "top-right",
                autoClose: 7000,
                hideProgressBar: true,
              });
              setFormValues({
                username: "",
                email: "",
                message: "",
              });
            },
            (error) => {
              // console.log(error.text);
              toast.error("Error sending email. Please try again.", {
                position: "top-right",
                autoClose: 7000,
                hideProgressBar: true,
              });
            }
          );
      }
    };


  
  return (
    <section
      className={`${font.className} flex-shrink-0 object-fit bg-[#0D0D0D]  w-screen h-auto flex flex-col items-center  pt-[40vh]`}
    >
      <h1 className="font-bold text-[3.5rem] text-orange-500"> Contact</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-t from-cyan-400 to-slate-300 via-sky-300 rounded-xl flex flex-col h-[80vh] w-[90%] lg:w-[40%] justify-center items-center gap-y-2 p-5  md:p-10 mb-10"
      >
        {errors.username && (
          <h6 className={`${font1.className} text-red-500 `}>
            {errors.username}
          </h6>
        )}
        <input
          className={`placeholder-black bg-transparent text-black border-2 border-black rounded-md h-[10%] w-[90%] px-5 ${
            errors.username ? "border-red-500" : ""
          }`}
          type="text"
          name="username"
          placeholder="Your name"
          value={formValues.username}
          onChange={handleInputChange}
        />
        {errors.email && (
          <h6 className={`${font1.className} text-red-500`}>{errors.email}</h6>
        )}
        <input
          className={`placeholder-black bg-transparent text-black border-2 border-black rounded-md h-[10%] w-[90%] px-5 ${
            errors.email ? "border-red-500" : ""
          }`}
          type="email"
          name="email"
          placeholder="Email ID"
          value={formValues.email}
          onChange={handleInputChange}
        />
        {errors.message && (
          <h6 className={`${font1.className} text-red-500`}>
            {errors.message}
          </h6>
        )}
        <textarea
          className={`placeholder-black bg-transparent text-black border-2 border-black rounded-md h-[70%] w-[90%] p-5 ${
            errors.message ? "border-red-500" : ""
          }`}
          name="message"
          placeholder="Enter message"
          value={formValues.message}
          onChange={handleInputChange}
        />

        <button
          className="bg-black text-gray-100 h-[15%] w-[40%] md:w-[30%] mt-5 rounded-lg"
          type="submit"
        >
          Send message
        </button>
      </form>
      <ToastContainer />
    </section>
  );
};

export default Contact;
