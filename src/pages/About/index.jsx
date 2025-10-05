

import React, { useRef } from "react";
import Navigation from "../Components/Navigations";
import { FaCheckDouble } from "react-icons/fa";
import Footer from "../Components/Footer";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });

  const fadeSlideUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };




  const containerStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <>
      <Navigation />
      <div className="w-full ">
        <div className="bg-BgColor-testing min-h-screen w-full lg:max-w-[1600px] mx-auto lg:px-[8%] lg:py-10 p-5  md:p-20 ">
          {/* Hero Section */}
          <div className="lg:flex gap-10 items-center justify-center">
            <motion.div
              ref={ref1}
              variants={fadeSlideUp} 
              initial="hidden"
              animate={isInView1 ? "visible" : "hidden"}
              className="flex-1 space-y-4"
            >
              <img
                src="./AboutHero2222.png"
                alt="Sample"
                className="w-full h-auto object-contain 
          max-h-[200px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[500px] xl:max-h-[500px]"
              />
            </motion.div>

            <motion.div
              ref={ref1}
              variants={fadeSlideUp}
              initial="hidden"
              animate={isInView1 ? "visible" : "hidden"}
              className="flex-1 space-y-4"
            >
              <h6 className="text-3xl font-bold text-BgColor-TextPrimary mt-6">
                Unlock Your Potential with Al Sayed Staffing Solutions
              </h6>

              <p className="my-5 inline-flex items-start text-base text-BgColor-TextPrimary">
                <span>
                  In today's competitive market, finding the right talent or the perfect career opportunity is crucial.
                  Al Sayed Staffing Solutions, established in 2023, is your trusted partner in navigating this landscape.
                  We bring together a team of highly experienced professionals dedicated to delivering exceptional staffing
                  solutions across the GCC.
                </span>
              </p>

              <p className="mb-5 inline-flex items-start text-base text-BgColor-TextPrimary">
                <span>
                  Precision Matching: Our in-depth understanding of diverse industries allows us to meticulously align candidate
                  skills and experience with your specific job requirements. Efficiency Through Automation: Our fully automated
                  system and streamlined procedures ensure a seamless and efficient hiring process, saving you time and resources.
                  Quality Assurance: We are committed to delivering only top-tier candidates, ensuring they can immediately contribute
                  to your organization's success. For Candidates: Build Your Dream Career.
                </span>
              </p>

              <p className="mb-5 inline-flex items-start text-base text-BgColor-TextPrimary">
                <span>
                  Access to Premier Opportunities: We connect you with leading multinational companies and diverse industrial sectors
                  across the GCC. Career Growth Support: We are dedicated to supporting your professional development, helping you
                  achieve your career aspirations. Personalized Matching: We take the time to understand your skills and experience,
                  ensuring you are matched with roles that are the perfect fit.
                </span>
              </p>
            </motion.div>
          </div>

          <section className="bg-BgColor-testing  lg:mt-[8%]">
            <motion.div
              ref={ref2}
              variants={fadeSlideUp}
              initial="hidden"
              animate={isInView2 ? "visible" : "hidden"}
              className="space-y-10"
            >
              <h3 className="text-3xl font-bold text-center text-BgColor-Primaryclr">
                Why Choose Al Sayed Staffing Solutions?
              </h3>

              <p className="text-center text-BgColor-TextPrimary max-w-3xl mx-auto text-xl">
                Professional business advice and support are essential for addressing challenges and capitalizing on opportunities
                at any stage of a business's lifecycle. From foundational planning for startups to strategic realignment for
                established companies, expert consultants can help identify and implement impactful solutions.
              </p>

              <motion.div
                className="p-6 lg:p-20 rounded-xl lg:flex lg:gap-10 space-y-6 lg:space-y-0 bg-BgColor-contactcolor shadow-lg"
                variants={containerStagger}
                initial="hidden"
                animate={isInView2 ? "visible" : "hidden"}
              >
                {[
                  {
                    title: "Experienced Workforce:",
                    desc: "Our in-house team and extended network of recruiters bring a wealth of experience to every project.",
                  },
                  {
                    title: "Comprehensive Process:",
                    desc: "From sourcing to onboarding, we handle every aspect of recruitment with professionalism and precision.",
                  },
                  {
                    title: "Quick Turnaround Time:",
                    desc: "Our streamlined processes ensure timely delivery without compromising quality.",
                  },
                  {
                    title: "Continuous Support:",
                    desc: "We provide ongoing assistance to clients and candidates, ensuring long-term satisfaction and success.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex-1 space-y-4 flex flex-col items-center"
                    variants={fadeSlideUp}
                  >
                    <FaCheckDouble className="ml-2 text-BgColor-accent" size={30} />
                    <h3 className="text-xl font-semibold text-center text-BgColor-Primaryclr">
                      {item.title}
                    </h3>
                    <span className="text-center text-base text-BgColor-TextPrimary">{item.desc}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;


