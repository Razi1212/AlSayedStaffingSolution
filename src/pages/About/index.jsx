import React from "react";
import Navigation from "../Components/Navigations";
import { FaArrowRight, FaCheckDouble } from "react-icons/fa";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <>
      <Navigation />
      <div className="bg-BgColor-homecolor min-h-screen w-full lg:flex lg:p-10">

        <div className="flex-1 ">
          <img src="./about.png" alt="Sample" className="w-full object-cover" />
        </div>

        <div className="flex-1">

          <p className="m-5 inline-flex items-start">

            <FaArrowRight className="ml-2 text-black" size={50} />
            <span className="ml-2">
              Founded in 2023, Al Sayed Staffing Solutions is a rapidly growing staffing agency in the market. Our team consists of highly experienced professionals with extensive expertise in handling client requirements across industries in the GCC region.
            </span>
          </p>


          <p className="m-5 inline-flex items-start">
            <FaArrowRight className="ml-2 text-black" size={50} />
            <span className="ml-2">
              We take pride in providing potential job opportunities with promising career prospects to hundreds of aspiring candidates. These placements are in highly rewarding positions for industrial clients across Gulf Countries and the Middle East, backed by robust processes for profile screening.
            </span>
          </p>


          <p className="m-5 inline-flex items-start">
            <FaArrowRight className="ml-2 text-black" size={50} />
            <span className="ml-2">
              Ensuring the satisfaction of both employers and employees is essential to us. We strive to support candidates' career growth in multinational companies and other industrial sectors across the GCC by thoroughly aligning job specifications with candidates' skills and experience.
            </span>
          </p>

          <p className="m-5 inline-flex items-start">
            <FaArrowRight className="ml-2 text-black" size={50} />
            <span className="ml-2">
              Our fully automated system and streamlined procedures guarantee that only top-quality candidates with the right expertise are onboarded. This enables them to effectively deliver their assigned roles in harmony with client requirements.
            </span>
          </p>
        </div>
      </div>

      <section className="bg-BgColor-homecolor min-h-screen w-full lg:p-12 p-5">
        <h3 className="text-3xl font-bold text-center mb-6">
          Why Choose Al Sayed Staffing Solutions?
        </h3>
        <span className="text-center text-gray-600 max-w-3xl mx-auto text-xl">
          The most useful time to seek professional business advice and support is
          before starting. A business startup consulting firm works directly with
          the client to identify the most critical first and next steps.
        </span>

        <div className="p-6 lg:p-20 rounded-xl lg:flex lg:gap-10 space-y-6 lg:space-y-0">
          <div className="flex-1 space-y-4 text-black flex flex-col items-center">
            <FaCheckDouble className="ml-2" size={30} />
            <h3 className="text-lg font-semibold text-center">Experienced Workforce:</h3>
            <span className="text-center">
              Our in-house team and extended network of recruiters bring a wealth
              of experience to every project.
            </span>
          </div>

          <div className="flex-1 space-y-4 text-black flex flex-col items-center">
            <FaCheckDouble className="ml-2" size={30} />
            <h3 className="text-lg font-semibold text-center">Comprehensive Process:</h3>
            <span className="text-center">
              From sourcing to onboarding, we handle every aspect of recruitment
              with professionalism and precision.
            </span>
          </div>

          <div className="flex-1 space-y-4 text-black flex flex-col items-center">
            <FaCheckDouble className="ml-2" size={30} />
            <h3 className="text-lg font-semibold text-center">Quick Turnaround Time:</h3>
            <span className="text-center">
              Our streamlined processes ensure timely delivery without compromising quality.
            </span>
          </div>

          <div className="flex-1 space-y-4 text-black flex flex-col items-center">
            <FaCheckDouble className="ml-2" size={30} />
            <h3 className="text-lg font-semibold text-center">Continuous Support:</h3>
            <span className="text-center">
              We provide ongoing assistance to clients and candidates, ensuring long-term satisfaction and success.
            </span>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
