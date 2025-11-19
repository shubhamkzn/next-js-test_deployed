import React from "react";

export const metadata = {
  title: "About Us | Your App Name",
  description:
    "Learn more about our mission, values, and the team behind Your App Name.",
  keywords: ["about us", "company info", "our mission", "your app name"],
  alternates: {
    canonical: "https://yourwebsite.com/about", // 🔥 add your live domain
  },
};

const AboutPage = () => {
  return (
    <div className="px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>

      <p className="text-gray-700 leading-7 mb-6">
        Welcome to <strong>Your App Name</strong>. We are dedicated to providing
        high-quality digital solutions that help people achieve more with ease.
      </p>

      <p className="text-gray-700 leading-7 mb-6">
        Our mission is to create simple, intuitive, and efficient tools that
        deliver real value. Whether you're exploring our features, guides, or
        services, we are constantly working to improve the experience.
      </p>

      <p className="text-gray-700 leading-7">
        Thank you for choosing us — we’re committed to supporting you every
        step of the way.
      </p>
    </div>
  );
};

export default AboutPage;
