// pages/index.js
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HomeLayout from "../components/HomeLayout";
import useLocomotiveScroll from "../hooks/useLocomotiveScroll";

export default function Home() {
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    let lastScrollTop = 0;

    function handleScroll() {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop && navbar) {
        navbar.style.transform = "translateY(-100%)";
        setScrollDirection("down");
      } else if (navbar) {
        navbar.style.transform = "translateY(0)";
        setScrollDirection("up");
      }

      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useLocomotiveScroll(true);

  const cardVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };

  const logoVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <HomeLayout>
      <nav
        id="navbar"
        className="fixed top-0 w-full bg-gray-900 z-50 transition-transform duration-300"
      ></nav>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="pt-20"
      >
        <h2 className="text-4xl font-bold mb-4">Welcome to My Landing Page</h2>
        <p className="text-xl mb-8 text-white">
          This is a simple landing page built with Next.js and Tailwind CSS.
        </p>
        <a
          href="#get-started"
          className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700"
        >
          Get Started
        </a>
      </motion.div>
      <section
        data-scroll-section
        className="container mx-auto px-4 py-16 pt-20"
      >
        <h2 className="text-4xl font-bold mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Feature 1", "Feature 2", "Feature 3"].map((feature, index) => {
            const controls = useAnimation();
            const { ref, inView } = useInView({
              threshold: 0.1,
              triggerOnce: false,
            });

            useEffect(() => {
              if (inView) {
                controls.start("visible");
              } else {
                controls.start("hidden");
              }
            }, [controls, inView]);

            return (
              <motion.div
                ref={ref}
                key={feature}
                variants={cardVariants}
                initial="hidden"
                animate={controls}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
                className="p-8 bg-white rounded-md shadow-md"
              >
                <h3 className="text-2xl font-bold mb-4 text-black">
                  {feature}
                </h3>
                <p className="text-lg text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>
      <section
        data-scroll-section
        className="container mx-auto px-4 py-16 pt-20"
      >
        <h2 className="text-4xl font-bold mb-8">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Basic Plan", "Standard Plan", "Premium Plan"].map(
            (plan, index) => {
              const controls = useAnimation();
              const { ref, inView } = useInView({
                threshold: 0.1,
                triggerOnce: false,
              });

              useEffect(() => {
                if (inView) {
                  controls.start("visible");
                } else {
                  controls.start("hidden");
                }
              }, [controls, inView]);

              return (
                <motion.div
                  ref={ref}
                  key={plan}
                  variants={cardVariants}
                  initial="hidden"
                  animate={controls}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                  className="p-8 bg-white rounded-md shadow-md"
                >
                  <h3 className="text-2xl font-bold mb-4 text-black">{plan}</h3>
                  <p className="text-lg text-black mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praesent libero. Sed cursus ante dapibus
                    diam.
                  </p>
                  <p className="text-2xl font-bold text-black">
                    ${(index + 1) * 10}.99/month
                  </p>
                </motion.div>
              );
            }
          )}
        </div>
      </section>
      <section
        data-scroll-section
        className="container mx-auto px-4 py-16 pt-20"
      >
        <h2 className="text-4xl font-bold mb-8 text-center">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {["images4.avif", "images1.jpg", "images2.jpg", "images3.png"].map(
            (src, index) => {
              const controls = useAnimation();
              const { ref, inView } = useInView({
                threshold: 0.1,
                triggerOnce: false,
              });

              useEffect(() => {
                if (inView) {
                  controls.start("visible");
                } else {
                  controls.start("hidden");
                }
              }, [controls, inView]);

              return (
                <motion.img
                  ref={ref}
                  key={src}
                  variants={logoVariants}
                  initial="hidden"
                  animate={controls}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                  src={`/logos/${src}`}
                  alt={`Logo ${index + 1}`}
                  className="w-full h-auto"
                />
              );
            }
          )}
        </div>
      </section>
    </HomeLayout>
  );
}
