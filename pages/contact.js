// pages/contact.js
import { useEffect } from "react";
import { gsap } from "gsap";
import Layout from "../components/Layout";

export default function Contact() {
  useEffect(() => {
    gsap.fromTo(
      ".contact-item",
      { autoAlpha: 0, y: 50 },
      { autoAlpha: 1, y: 0, duration: 1, stagger: 0.3, ease: "easeInOut" }
    );
  }, []);

  return (
    <Layout>
      <div className="pt-20">
        {" "}
        {/* Add padding top */}
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <form className="contact-item max-w-lg mx-auto p-6 bg-white rounded-md shadow-md">
          <div className="mb-4">
            <label className="block text-left text-black">Name</label>
            <input type="text" className="w-full px-4 py-2 border rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block text-left text-black">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-left text-black">Message</label>
            <textarea className="w-full px-4 py-2 border rounded-md"></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </Layout>
  );
}
