import React from "react";
import Navigation from "../Components/Navigations";
import { FaArrowRight, FaCheckDouble } from "react-icons/fa";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <>
      <Navigation />
      <div className="bg-BgColor-homecolor min-h-screen w-full lg:flex lg:p-10">

        {/* <div className="flex-1 ">
          <img src="./AboutHero222.png" alt="Sample" className="w-full h-auto object-cover" />
        </div> */}
        <div className="flex-1">
          {/* <img
            src="./AboutHero222.png"
            alt="Sample"
            className="w-full h-auto max-h-[500px] object-contain"
          /> */}
          <img
            src="./AboutHero222.png"
            alt="Sample"
            // className="w-full h-auto max-h-[500px] max-w-[90%] sm:h-96 md:max-w-[70%] lg:max-w-[600px] mx-auto object-contain"
             className="w-full h-auto object-contain 
             max-h-[200px] sm:max-h-[300px] md:max-h-[400px] lg:max-h-[500px] xl:max-h-[500px]"
          />


        </div>

        <div className="flex-1">

          <h6 className="ml-6 text-xl">Unlock Your Potential with Al Sayed Staffing Solutions</h6>
          <p className="m-5 inline-flex items-start">


            <FaArrowRight className="ml-2 text-black" size={50} />
            <span className="ml-2">
              In today's competitive market, finding the right talent or the perfect career opportunity is crucial. Al Sayed Staffing Solutions, established in 2023, is your trusted partner in navigating this landscape. We bring together a team of highly experienced professionals dedicated to delivering exceptional staffing solutions across the GCC.
            </span>
          </p>


          <p className="m-5 inline-flex items-start">
            <FaArrowRight className="ml-2 text-black" size={50} />
            <span className="ml-2">
              Precision Matching: Our in-depth understanding of diverse industries allows us to meticulously align candidate skills and experience with your specific job requirements.
              Efficiency Through Automation: Our fully automated system and streamlined procedures ensure a seamless and efficient hiring process, saving you time and resources.
              Quality Assurance: We are committed to delivering only top-tier candidates, ensuring they can immediately contribute to your organization's success.
              For Candidates: Build Your Dream Career.
            </span>
          </p>


          <p className="m-5 inline-flex items-start">
            <FaArrowRight className="ml-2 text-black" size={50} />
            <span className="ml-2">
              Access to Premier Opportunities: We connect you with leading multinational companies and diverse industrial sectors across the GCC.
              Career Growth Support: We are dedicated to supporting your professional development, helping you achieve your career aspirations.
              Personalized Matching: We take the time to understand your skills and experience, ensuring you are matched with roles that are the perfect fit.
              Our Promise: We are driven by a commitment to excellence and the satisfaction of both our clients and candidates. We build lasting relationships based on trust, integrity, and mutual success.
            </span>
          </p>


        </div>
      </div>

      <section className="bg-BgColor-homecolor min-h-screen w-full lg:p-12 p-5">
        <h3 className="text-3xl font-bold text-center mb-6">
          Why Choose Al Sayed Staffing Solutions?
        </h3>
        <span className="text-center text-gray-600 max-w-3xl mx-auto text-xl">
          Professional business advice and support are essential for addressing challenges and capitalizing on opportunities at any stage of a business's lifecycle. From foundational planning for startups to strategic realignment for established companies, expert consultants can help identify and implement impactful solutions.

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
