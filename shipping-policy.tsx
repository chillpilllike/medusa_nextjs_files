import { Heading, Text } from "@medusajs/ui"

import React from 'react'


import { Metadata } from "next"

import InteractiveLink from "@modules/common/components/interactive-link"

export const metadata: Metadata = {
  title: "Shipping Policy",
  description: "Learn more about our shipping practices.",
}


const ShippingPolicy = () => {
   return (
<div className="container mx-auto p-4">
  <h1 className="text-3xl font-bold mb-4">Shipping Policy</h1>

  {/* Introduction Section */}
  <div className="mb-4 bg-white p-6 rounded-lg shadow-md">
    <p className="text-gray-700">
      We strive to get your orders to you as quickly and efficiently as possible. Please review our shipping policy below for important information regarding shipping times, costs, and procedures.
    </p>
  </div>

  {/* Shipping Methods and Costs Section */}
  <div className="mb-4 bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-2 text-gray-800">Shipping Methods and Costs</h2>
    <p className="text-gray-700">
      We offer the following shipping methods:
    </p>
    <ul className="list-disc list-inside ml-4 text-gray-700">
      <li>Standard Shipping: 7-12 Days</li>
      <li>Express Shipping: 3-7 Days</li>
      {/* Add more shipping methods as needed */}
    </ul>
    <p className="text-gray-700">
      Shipping costs are calculated based on the weight of your order and your shipping destination. You will be able to see the exact shipping cost during checkout before you complete your purchase. Sometimes the product&apos;s weight may be calculated based on the product dimensions and courier services charge differently.
    </p>
  </div>

  {/* Processing Time Section */}
  <div className="mb-4 bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-2 text-gray-800">Processing Time</h2>
    <p className="text-gray-700">
      Orders are typically processed within 2-5 business days of being placed. Please note that processing times may be longer during peak periods or holidays.
    </p>
  </div>

  {/* Order Tracking Section */}
  <div className="mb-4 bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-2 text-gray-800">Order Tracking</h2>
    <p className="text-gray-700">
      Once your order has been shipped, you will receive a shipping confirmation email with a tracking number. You can use this tracking number to track the progress of your shipment.
    </p>
  </div>

  {/* International Shipping Section */}
  <div className="mb-4 bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-2 text-gray-800">International Shipping</h2>
    <p className="text-gray-700">
      We currently offer international shipping to selective countries. Please note that international shipments may be subject to customs duties and taxes, which are the responsibility of the recipient.
    </p>
  </div>

  {/* Final Contact Information */}
  <div className="bg-white p-6 rounded-lg shadow-md">
    <p className="text-gray-700">
      For any query related to shipping you can contact us via our chat support.
    </p>
  </div>
</div>
  )
}

export default ShippingPolicy
