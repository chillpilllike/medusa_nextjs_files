import { Heading, Text } from "@medusajs/ui"

import React from 'react'


import { Metadata } from "next"

import InteractiveLink from "@modules/common/components/interactive-link"

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Read our refund policy and learn about how refunds are processed.",
}


const RefundPolicy = () => {
   return (
  <div className="max-w-4xl mx-auto p-6 bg-white">
  <h1 className="text-4xl font-bold mb-6 text-gray-900">Refund Policy</h1>

  {/* Section 1: Overview */}
  <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Overview</h2>
    <p className="text-gray-700">
      Thank you for shopping at our store. If you are not entirely satisfied with your purchase, we&apos;re here to help. Our products can be returned within 30 days of the original purchase.
    </p>
  </section>

  {/* Section 2: Eligibility for Returns */}
  <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Eligibility for Returns</h2>
    <p className="text-gray-700">
      To qualify for a return, please make sure that:
    </p>
    <ul className="list-disc pl-6 text-gray-700">
      <li>The product was purchased in the last 30 days.</li>
      <li>The product is in its original packaging.</li>
      <li>The product isn&apos;t used or damaged.</li>
      <li>You have the receipt or proof of purchase.</li>
    </ul>
  </section>

  {/* Section 3: Products that Cannot be Returned */}
  <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Products that Cannot be Returned</h2>
    <p className="text-gray-700">
      Some items are not eligible for returns, including:
    </p>
    <ul className="list-disc pl-6 text-gray-700">
      <li>Gift cards.</li>
      <li>Downloadable software products.</li>
      <li>Some health and personal care items.</li>
      <li>Any item not in its original condition, damaged, or missing parts for reasons not due to our error.</li>
      <li>Any item that is returned more than 30 days after delivery.</li>
    </ul>
  </section>

  {/* Section 4: Initiating a Return */}
  <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Initiating a Return</h2>
    <ol className="list-decimal pl-6 text-gray-700">
      <li className="mb-4">
        <strong>Contact Us:</strong> Before sending the product back to us, please contact us:
        <ul className="list-disc pl-6 text-gray-700">
          <li>By visiting this page on our website: <a href="/contact-us" className="text-blue-500 underline">Contact Us</a></li>
        </ul>
      </li>
      <li>
        <strong>Send the Product:</strong> After contacting us, you will be instructed on how and where to send the product. Shipping costs are refundable. If you receive a refund, the cost of return shipping will not be deducted from your refund.
      </li>
    </ol>
  </section>

  {/* Section 5: Processing Your Return */}
  <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Processing Your Return</h2>
    <p className="text-gray-700">
      Upon receiving the product, we will inspect it and notify you that we have received your returned item. We will immediately notify you of the status of your refund after inspecting the item.
    </p>
    <p className="text-gray-700">
      If your return is approved, we will initiate a refund to your credit card (or original method of payment). You will receive the credit within a certain number of days, depending on your card issuer&apos;s policies. In some cases, we may refund to your bank account via wire transfer.
    </p>
  </section>

  {/* Section 6: Exchanges (if applicable) */}
  <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Exchanges (if applicable)</h2>
    <p className="text-gray-700">
      If your product is defective or damaged and you need to exchange it for the same item, then contact us <a href="/contact-us" className="text-blue-500 underline">Contact us</a> and send your item to the address we provide.
    </p>
  </section>

  {/* Section 7: Contact Us */}
  <section className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Us</h2>
    <p className="text-gray-700">
      If you have any questions about our Refund Policy, please contact us:
    </p>
    <ul className="list-disc pl-6 text-gray-700">
      <li>By visiting this page on our website: <a href="/contact-us" className="text-blue-500 underline">Contact us</a></li>
      <li>By online chat support. Click the chat button at the bottom left of every page.</li>
    </ul>
  </section>
</div>
  )
}

export default RefundPolicy
