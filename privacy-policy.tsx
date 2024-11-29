import { Heading, Text } from "@medusajs/ui"

import React from 'react'


import { Metadata } from "next"

import InteractiveLink from "@modules/common/components/interactive-link"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how our store collects, uses, and protects your personal information.",
}


const PrivacyPolicy = () => {
   return (
 <div className="container mx-auto py-16 px-4">
  <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Section 1: Introduction */}
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Introduction</h2>
      <p className="text-gray-700">
        At our store, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our online store.
      </p>
    </div>

    {/* Section 2: Information We Collect */}
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
      <p className="text-gray-700">
        We may collect the following types of personal information:
      </p>
      <ul className="list-disc list-inside ml-6">
        <li>Contact information (name, email address, phone number)</li>
        <li>Shipping and billing address</li>
        <li>Payment information</li>
        <li>Order history</li>
        <li>Device and browser information</li>
        <li>IP address</li>
      </ul>
    </div>

    {/* Section 3: How We Use Your Information */}
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
      <p className="text-gray-700">
        We use your information to:
      </p>
      <ul className="list-disc list-inside ml-6">
        <li>Process and fulfill your orders</li>
        <li>Provide customer support</li>
        <li>Send you marketing communications (if you&apos;ve opted in)</li>
        <li>Improve our website and services</li>
        <li>Prevent fraud and protect our store</li>
      </ul>
    </div>

    {/* Section 4: Sharing Your Information */}
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Sharing Your Information</h2>
      <p className="text-gray-700">
        We may share your information with:
      </p>
      <ul className="list-disc list-inside ml-6">
        <li>Third-party service providers who help us operate our store</li>
        <li>Law enforcement or government agencies if required by law</li>
      </ul>
    </div>

    {/* Section 5: Your Choices */}
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Your Choices</h2>
      <p className="text-gray-700">
        You have the right to:
      </p>
      <ul className="list-disc list-inside ml-6">
        <li>Access, update, or delete your personal information</li>
        <li>Opt out of marketing communications</li>
      </ul>
    </div>

    {/* Section 6: Security */}
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Security</h2>
      <p className="text-gray-700">
        We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure.
      </p>
    </div>

    {/* Section 7: Children&apos;s Privacy */}
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Children&apos;s Privacy</h2>
      <p className="text-gray-700">
        Our store is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.
      </p>
    </div>

    {/* Section 8: Changes to this Privacy Policy */}
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Changes to this Privacy Policy</h2>
      <p className="text-gray-700">
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
      </p>
    </div>

    {/* Section 9: Contact Us */}
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
      <p className="text-gray-700">
        If you have any questions about this Privacy Policy, please contact us.
      </p>
    </div>
  </div>
</div>
  )
}

export default PrivacyPolicy
