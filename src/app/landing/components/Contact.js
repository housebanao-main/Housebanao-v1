"use client";
import React from "react";
import { Mail, Phone, Building2 } from "lucide-react";
import CenterWrapper from "@/app/components/CenterWrapper";
import Heading from "@/app/components/Heading";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <CenterWrapper>
      <Heading>Ready to start your project?</Heading>

      <div className="flex flex-col md:flex-row gap-6 mt-6">
        {/* Left Section - Form */}
        <motion.div
          className="flex-1 bg-white rounded-lg shadow-sm border p-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-primary font-medium mb-2">Get in touch</div>
          <h2 className="text-2xl font-bold mb-2">
            Let's chat, Reach out to us
          </h2>
          <p className="text-gray-600 mb-6">
            Have questions or feedback? We're here to help. Send us a message,
            and we'll respond in 24 hours.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Email Address"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Reason of contact
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Leave us message"
              />
            </div>

            <button
              type="submit"
              className="w-32 bg-primary text-white py-1.5 px-4 rounded-full hover:bg-primary-dark transition duration-300"
            >
              Submit Now
            </button>
          </form>
        </motion.div>

        {/* Right Section - Image and Contact Info */}
        <motion.div
          className="flex-1 space-y-4 flex flex-col p-4 border rounded-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-white rounded-lg overflow-hidden shadow-sm grow"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="https://placehold.co/600x400"
              alt="Person using phone"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-sm space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4">
              <div className="bg-primary rounded-full p-3">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-base font-medium">Email</h3>
                <p className="text-gray-500">invest@dreamhome.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-primary rounded-full p-3">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-base font-medium">Phone number</h3>
                <p className="text-gray-500">98xxxxxxx</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-primary rounded-full p-3">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-base font-medium">Address</h3>
                <p className="text-gray-500">
                  XXXB, Xth floor, XXX megapolis sector XX, gurgaon, haryana
                  12XXXX
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </CenterWrapper>
  );
};

export default Contact;
