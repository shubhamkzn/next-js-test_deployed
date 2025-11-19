import React from "react";

export const metadata = {
  title: "Services | Your App Name",
  description:
    "Discover the range of services we offer to help you achieve your goals with efficiency and ease.",
  keywords: ["services", "our services", "what we offer", "your app name"],
};

const ServicesPage = () => {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>

      <p className="text-gray-700 leading-7 mb-8">
        At <strong>Your App Name</strong>, we provide a variety of services
        designed to give you the tools and support you need. Explore our core
        offerings below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 border rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Service One</h2>
          <p className="text-gray-600">
            A brief description of what this service provides and how it helps
            users.
          </p>
        </div>

        <div className="p-6 border rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Service Two</h2>
          <p className="text-gray-600">
            Explain the value and purpose of this service in simple terms.
          </p>
        </div>

        <div className="p-6 border rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Service Three</h2>
          <p className="text-gray-600">
            Describe how this service helps users and why it stands out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
