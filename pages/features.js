// pages/features.js
import { useEffect } from "react";
import { gsap } from "gsap";
import Layout from "../components/Layout";

export default function Features() {
  useEffect(() => {
    gsap.fromTo(
      ".feature-item",
      { autoAlpha: 0, y: 50 },
      { autoAlpha: 1, y: 0, duration: 1, stagger: 0.3, ease: "easeInOut" }
    );
  }, []);

  return (
    <Layout>
      <div className="pt-20">
        {" "}
        {/* Add padding top */}
        <h2 className="text-4xl font-bold mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Feature 1", "Feature 2", "Feature 3"].map((feature) => (
            <div
              key={feature}
              className="feature-item p-8 bg-white rounded-md shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4 text-black">{feature}</h3>
              <p className="text-lg text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
