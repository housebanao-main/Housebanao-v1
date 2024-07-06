"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../store/slice/slice";
import { CommonHeading } from "../../Heading/CommonHeading";
import { SubHeading } from "../../SubHeading/SubHeading";
import { CustomField } from "../../Utils/CustomField/CustomField";
import { SubmitButton } from "../../Button/SubmitButton";

const BookingPopTwo = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    location: "",
    budget: "",
    area: "",
    size: "",
    services: "",
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

    if (!formData.name || !formData.phoneNo || !formData.location) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    try {
      // Your fetch request and submission logic here...
    } catch (error) {
      console.error("Error booking appointment:", error);
      setErrorMessage(error.message);
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-white flex items-center justify-center px-4 md:px-0">
      <div className="bg-white border border-black-0.5 rounded-lg p-4 md:p-8 lg:p-16 mt-12 w-full max-w-4xl mx-4 md:mx-0">
        <div className="flex flex-col items-center mb-8 md:mb-12">
          <CommonHeading className="text-[20px] md:text-[25px] font-extrabold text-center">
            Book your appointment
          </CommonHeading>
          <SubHeading className="text-center mt-2 md:mt-[7px] text-[14px] md:text-[18px]">
            Get free consultation
          </SubHeading>

          {successMessage && (
            <div className="text-green-500 text-center mb-4">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="text-red-500 text-center mb-4">{errorMessage}</div>
          )}
        </div>

        <form className="flex flex-col items-center gap-4 md:gap-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full px-2 md:px-8">
            <div className="flex flex-col gap-4 rounded-md">
              <CustomField
                labelTitle="name"
                FieldType="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-md text-[12px] md:text-[16px] placeholder:text-[12px] md:placeholder:text-[16px]"
                style={{"::placeholder": {textOverflow: "ellipsis"}}}
              />
              <CustomField
                labelTitle="phoneNo"
                FieldType="text"
                placeholder="Phone"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                className="w-full rounded-md text-[12px] md:text-[16px] placeholder:text-[12px] md:placeholder:text-[16px]"
                style={{"::placeholder": {textOverflow: "ellipsis"}}}
              />
              <CustomField
                labelTitle="areasize"
                FieldType="number"
                placeholder="Area"
                name="area"
                value={formData.area}
                onChange={handleChange}
                className="w-full rounded-md text-[12px] md:text-[16px] placeholder:text-[12px] md:placeholder:text-[16px]"
                style={{"::placeholder": {textOverflow: "ellipsis"}}}
              />
            </div>
            <div className="flex flex-col gap-4 rounded-md">
              <CustomField
                labelTitle="location"
                FieldType="text"
                placeholder="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full rounded-md text-[12px] md:text-[16px] placeholder:text-[12px] md:placeholder:text-[16px]"
                style={{"::placeholder": {textOverflow: "ellipsis"}}}
              />
              <CustomField
                labelTitle="budget"
                FieldType="number"
                placeholder="Budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full rounded-md text-[12px] md:text-[16px] placeholder:text-[12px] md:placeholder:text-[16px]"
                style={{"::placeholder": {textOverflow: "ellipsis"}}}
              />
              <CustomField
                labelTitle="Services"
                FieldType="text"
                placeholder="Services"
                name="size"
                value={formData.size}
                onChange={handleChange}
                className="w-full rounded-md text-[12px] md:text-[16px] placeholder:text-[12px] md:placeholder:text-[16px]"
                style={{"::placeholder": {textOverflow: "ellipsis"}}}
              />
            </div>
          </div>

          <SubmitButton type="submit" className="mt-4">
            Book Now
          </SubmitButton>
        </form>
      </div>
    </section>
  );
};

export default BookingPopTwo;
