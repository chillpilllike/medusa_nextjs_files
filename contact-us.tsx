
import { Heading, Text } from "@medusajs/ui";
import React from "react";
import { Metadata } from "next";
import Script from "next/script"; // Import the Script component from Next.js

import InteractiveLink from "@modules/common/components/interactive-link";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Contact our staff for more information or help with orders.",
};

const ContactUs = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

      {/* Introduction Section */}
      <div className="mb-4 bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-700">
          We&apos;re here to help! If you have any questions or concerns, please
          feel free to reach out to us.
        </p>
      </div>

      {/* Email Section */}
      <div className="mb-4 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Email</h2>
        <p className="text-gray-700">
          You can email us at{" "}
          <a
            href="mailto:support@nutricity.ca"
            className="text-blue-500 underline"
          >
            support@nutricity.ca
          </a>
        </p>
      </div>

      {/* Live Chat Section */}
      <div className="mb-4 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Live Chat</h2>
        <p className="text-gray-700">
          Click on the chat icon in the bottom right corner to start a live chat
          with one of our customer service representatives.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
