'use client';
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../store/slice/slice";
import { CommonHeading } from "../../Heading/CommonHeading";
import { SubHeading } from "../../SubHeading/SubHeading";
import { CustomField } from "../../Utils/CustomField/CustomField";
import { SubmitButton } from "../../Button/SubmitButton";
import Image from "next/image";
import logo from "../../../../../public/assets/images/logo.svg";

export const BookForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    location: "",
    budget: "",
    area: "",
    size: "",
    services: ""
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleClose = () => {
    dispatch(closeModal({ visible: false }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    console.log("Form Data:", formData);

    if (!formData.name || !formData.phoneNo || !formData.location) {
      console.log("Missing required fields:", formData);

      setErrorMessage("Please fill in all required fields.");
      return;
    }

    try {
      // Simulate form submission
      setSuccessMessage("Form submitted successfully!");
    } catch (error) {
      console.error("Error booking appointment:", error);
      setErrorMessage(error.message);
    }
  };

  return (
    <section className="relative w-full lg:max-w-[450px] h-auto bg-white lg:rounded-[20px] flex flex-col shadow-md my-4 mx-auto mr-8 p-6 border">
      <div className="flex flex-col items-center">
        <Image src={logo} alt="Company Logo" width={100} height={100} />
        <CommonHeading className="text-xl font-bold">
          Book your appointment
        </CommonHeading>
        <SubHeading className="text-center text-gray-600 mt-2">
          Get free consultation
        </SubHeading>

        {successMessage && (
          <div className="text-green-500 text-center mb-4">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="text-red-500 text-center mb-4">{errorMessage}</div>
        )}

        <form className="flex flex-col items-center gap-4 mt-6 w-full" onSubmit={handleSubmit}>
          <CustomField
            labelTitle="Name"
            FieldType="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <CustomField
            labelTitle="Phone Number"
            FieldType="text"
            placeholder="Phone Number"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
          />
          <CustomField
            labelTitle="Location"
            FieldType="text"
            placeholder="Location of your Plot"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
          <CustomField
            labelTitle="Area"
            FieldType="number"
            placeholder="Area"
            name="area"
            value={formData.area}
            onChange={handleChange}
          />
          <CustomField
            labelTitle="Services"
            FieldType="text"
            placeholder="Services "
            name="services"
            value={formData.services}
            onChange={handleChange}
          />
          <SubmitButton type="submit">Book Now</SubmitButton>
        </form>
      </div>
    </section>
  );
};
