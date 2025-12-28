import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import call from "./../../assets/images/icons/call.svg";
import email from "./../../assets/images/icons/email.svg";
import address from "./../../assets/images/icons/address.svg";
import clock from "./../../assets/images/icons/clock.svg";

export const ContactUs = ({ scrollRef }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        // const response = await fetch("http://localhost:5000/contact", {
        const response = await fetch("https://backend.slimlineholidays.com/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          alert("Form submitted successfully!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
          });
          setErrors({});
        } else {
          alert("Failed to submit the form. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <section
      ref={(node) => {
        ref(node); // Combine ref for animation
        scrollRef.current = node; // Assign scrollRef
      }}
      className="md:px-[10%] px-[5%] w-full flex flex-col md:flex-row justify-between py-[4%] pb-[10%] md:pb-[4%] font-nunito"
    >
      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.8 }}
        className="md:w-[49%] flex flex-col items-center md:items-start pt-10 md:pt-0"
      >
        <div className="text-[25px] md:text-[50px] font-light">
          <span className="font-bold">Contact</span> Us
        </div>
        <div className="mt-2 md:mt-0 text-black text-center md:text-start text-sm md:text-base font-normal">
          Explore moments from our clients’ incredible journeys around the
          world. From breathtaking landscapes.
        </div>

        <div className="flex w-full flex-col gap-5 mt-10">
          {[
            { label: "Call Us", value: "(+94) 777 514 294", icon: call },
            {
              label: "Write Us",
              value: "info@slimelineholidays.com",
              icon: email
            },
            {
              label: "Visit Us",
              value: "Slimeline Tours, Modarawalla, Marawilla",
              icon: address
            },
            {
              label: "We are open",
              value: "Mon - Fri: 08.00 - 16.00",
              icon: clock
            }
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="w-[35px] aspect-square rounded-full border border-[#03FF3F] flex items-center justify-center">
                <img src={item.icon} className="w-4" alt="" />
              </span>
              <div className="flex flex-col font-semibold">
                <span className="text-black font-bold text-base md:text-lg">
                  {item.label}
                </span>
                <span className="text-black font-light text-base">
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0.2 }}
        onSubmit={handleSubmit}
        className="mt-10 md:mt-0 md:w-[45%] flex flex-col gap-4 bg-[#F1FFF2] border border-[#9AFFB3] p-7 items-center"
      >
        <InputField
          label="Name"
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
            setErrors({ ...errors, name: "" });
          }}
          error={errors.name}
        />
        <InputField
          label="Email"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            setErrors({ ...errors, email: "" });
          }}
          error={errors.email}
        />
        <InputField
          label="Subject"
          value={formData.subject}
          onChange={(e) => {
            setFormData({ ...formData, subject: e.target.value });
            setErrors({ ...errors, subject: "" });
          }}
          error={errors.subject}
        />
        <TextareaField
          label="Message"
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            setErrors({ ...errors, message: "" });
          }}
          error={errors.message}
        />

        <button
          type="submit"
          className="p-2 w-fit px-16 border border-[#038B06] text-[#038B06]"
        >
          Submit
        </button>
      </motion.form>
    </section>
  );
};

const InputField = ({ label, value, onChange, error }) => (
  <div className="w-full">
    <input
      type="text"
      placeholder={label}
      value={value}
      onChange={onChange}
      className="w-full p-2 border border-[#9AFFB3] focus:outline-none text-black"
    />
    {error && <span className="text-red-500 text-sm">{error}</span>}
  </div>
);

const TextareaField = ({ label, value, onChange, error }) => (
  <div className="w-full">
    <textarea
      rows="6"
      placeholder={label}
      value={value}
      onChange={onChange}
      className="w-full p-2 border border-[#9AFFB3] focus:outline-none text-black"
    ></textarea>
    {error && <span className="text-red-500 text-sm">{error}</span>}
  </div>
);
