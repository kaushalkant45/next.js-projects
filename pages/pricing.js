// pages/pricing.js
import { useEffect } from "react";
import { gsap } from "gsap";
import Layout from "../components/Layout";

export default function Pricing() {
  useEffect(() => {
    gsap.fromTo(
      ".pricing-item",
      { autoAlpha: 0, y: 50 },
      { autoAlpha: 1, y: 0, duration: 1, stagger: 0.3, ease: "easeInOut" }
    );
  }, []);

  return (
    <Layout>
      <div className="pt-20">
        {" "}
        {/* Add padding top */}
        <h2 className="text-4xl font-bold mb-8 text-black">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Basic Plan", "Standard Plan", "Premium Plan"].map((plan) => (
            <div
              key={plan}
              className="pricing-item p-8 bg-white rounded-md shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4 text-black">{plan}</h3>
              <p className="text-lg text-black mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
              <p className="text-2xl font-bold text-black">
                $
                {(["Basic Plan", "Standard Plan", "Premium Plan"].indexOf(
                  plan
                ) +
                  1) *
                  10}
                .99/month
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
