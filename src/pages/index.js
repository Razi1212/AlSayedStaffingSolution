import Navigations from "./Components/Navigations";
import Link from "next/link";
import Footer from "./Components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Navigation } from "swiper/modules";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function () {

   const swiperRef = useRef(null);
  const handleVideoEnd = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };


  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });

  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: true });

  const ref4 = useRef(null);
  const isInView4 = useInView(ref4, { once: true });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const zoomInRotate = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delayChildren: 0.3, // Add delay to children
        staggerChildren: 0.3, // Stagger delay between child elements
      },
    },
  };

    const videos = ['./video1.mp4', './video22.mp4', './video33.mp4','./video44.mp4'];

  return (
    <>
      <Navigations />

     <div className="relative w-full h-[500px] overflow-hidden">
      <Swiper
        loop={true}
        modules={[Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = { swiper };
        }}
        className="h-full w-full"
      >
        {videos.map((src, index) => (
          <SwiperSlide key={index}>
            <video
              onEnded={handleVideoEnd}
              autoPlay
              muted
              playsInline
              preload="auto"
              className="absolute top-0 left-0 w-full h-full object-cover"
            >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-5xl font-bold">Al Sayed-Staffing-Solution</h1>
        <p className="text-xl mt-4 max-w-2xl text-center">
          Al Sayed Staffing Solutions is a premier recruitment agency
          specializing in connecting Gulf region businesses with exceptional talent.
        </p>
      </div>
    </div>

      <div className="w-full bg-gradient-to-bl from-[#ffe4e6] to-[#ccfbf1]">
        <section className=" bg-gradient-to-bl from-[#ffe4e6] to-[#ccfbf1] lg:max-w-[1600px] mx-auto font-geist">
          <div className="lg:flex lg:p-[8%] py-14">
            <motion.div
              ref={ref2}
              variants={fadeInUp}
              initial="hidden"
              animate={isInView2 ? "visible" : "hidden"}
              transition={{ duration: 1.2 }}
              className="flex-1"
            >
              <div className="flex-1">
                <img
                  src="./AboutHero22.png"
                  alt="Description of the image"
                  // className="lg:w-full lg:h-auto max-h-[500px]"
                  className="w-full h-auto object-contain 
             max-h-[200px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[400px] xl:max-h-[450px]"
                />
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isInView2 ? "visible" : "hidden"}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="flex-1 lg:py-10 lg:px-6"
            >
              <div className="flex-1  py-10 px-6">
                <h3 className="text-3xl font-bold text-gray-800  lg:text-gray-900 ">
                  Connecting Regional Talent with Gulf Opportunities.
                </h3>
                <p className="mt-4 text-gray-900 md:text-lg text-base">
                  We specialize in placing skilled professionals across key Gulf
                  industries, including oil and gas, construction,
                  manufacturing, finance, retail, hospitality, IT, and
                  healthcare. Our tailored recruitment solutions bridge the gap
                  between top talent and leading companies.
                </p>

                {/* <Link href="/Services">
                <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Go to Services
                </button>
              </Link> */}

                <Link href="/Services">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "bg-gray-900 ",
                      boxShadow: "0px 4px 15px rgba(59, 130, 246, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="mt-10  px-6 py-3 bg-BgColor-buttonclr text-white rounded-lg"
                  >
                    Go To Services
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>


      <div className="w-full bg-white">
        <section className="bg-BgColor-testing lg:max-w-[1600px] mx-auto  lg:p-[8%] px-5 py-14">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6">
            <motion.div
              variants={zoomInRotate}
              initial="hidden"
              animate={isInView1 ? "visible" : "hidden"}
              transition={{ delay: 0.3 }}
              className="flex-1 space-y-4"
              ref={ref1} // Attach the ref for Intersection Observer
            >
              <motion.h6
                variants={zoomInRotate}
                className="text-3xl font-bold text-gray-900"
              >
                Career Opportunities Await You in the Gulf – Start Your Journey
                Now!
              </motion.h6>
              <motion.p variants={zoomInRotate} className="text-base">
                Looking for exciting career opportunities in the Gulf region?
                Explore a wide range of job openings in the thriving Oil & Gas
                and Healthcare industries...
              </motion.p>
            </motion.div>
            <motion.div
              variants={zoomInRotate}
              initial="hidden"
              animate={isInView1 ? "visible" : "hidden"}
              className="flex-1"
            >
              <img
                src="./lo22.png"
                alt="Professional team working together in the Gulf region"
                className="w-full h-auto object-contain max-h-[200px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[500px] xl:max-h-[500px]"
              />
            </motion.div>
          </div>

          <motion.div
            variants={zoomInRotate}
            initial="hidden"
            animate={isInView1 ? "visible" : "hidden"}
            transition={{ delay: 0.5 }}
            className="mt-6"
          >
            <Link href="/Jobseekers">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "bg-gray-900 ",
                  boxShadow: "0px 4px 15px rgba(59, 130, 246, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="px-6 py-3 bg-BgColor-buttonclr text-white rounded-lg"
              >
                Find Job
              </motion.button>
            </Link>
          </motion.div>
        </section>
      </div>

      <div className="w-full bg-white">
        <section className=" bg-BgColor-testing  lg:max-w-[1600px] mx-auto font-white py-14">
          <div className="lg:flex lg:p-[8%] ">
            <div className="flex-1">
              <motion.div
                ref={ref4}
                variants={fadeInUp}
                initial="hidden"
                animate={isInView4 ? "visible" : "hidden"}
                transition={{ duration: 1.2 }}
                className="flex-1 space-y-4"
              >
                <img
                  src="./Details.png"
                  alt="Description of the image"
                  className="w-full h-auto object-contain 
             max-h-[200px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[400px] xl:max-h-[450px]"
                />
              </motion.div>
            </div>

            <div className="flex-1  py-10 px-6">
              <motion.div
                ref={ref4}
                variants={fadeInUp}
                initial="hidden"
                animate={isInView4 ? "visible" : "hidden"}
                transition={{ duration: 1.2 }}
                className="flex-1 space-y-4"
              >
                <h3 className="text-3xl font-bold text-gray-800  lg:text-gray-900 ">
                  From Search to Success — We’ve Got You Covered
                </h3>
                <p className="mt-4 text-gray-900 md:text-lg text-base">
                  Looking to hire top talent or streamline your recruitment
                  process? Our consultancy services are tailored to meet your
                  hiring needs. We partner with companies across industries to
                  deliver customized staffing solutions, saving you time and
                  resources. Whether you're scaling quickly or searching for
                  niche skills, our team is here to support your growth.
                </p>

                <Link href="/Employers">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "bg-gray-900 ",
                      boxShadow: "0px 4px 15px rgba(59, 130, 246, 0.5)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="mt-10  px-6 py-3 bg-BgColor-buttonclr text-white rounded-lg"
                  >
                    Go to Employers
                  </motion.button>
                </Link>

                {/* <Link href="/Employers">
                <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Go to Employers
                </button>
              </Link> */}
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <div className="w-full bg-white">
        <section className="bg-cover bg-center bg-no-repeat py-16 px-8 lg:max-w-[1600px] mx-auto flex items-center justify-center bg-BgColor-testing">
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="text-center md:text-left max-w-2xl">
              <motion.div
                ref={ref3}
                variants={fadeInUp}
                initial="hidden"
                animate={isInView3 ? "visible" : "hidden"}
                transition={{ duration: 1.2 }}
                className="flex-1 space-y-4"
              >
                <h6 className=" text-gray-900 text-3xl font-bold">
                  Let’s Collaborate with Us!
                </h6>
                <p className="mt-4 text-gray-700 leading-relaxed lg:text-xl">
                  Looking for a job or seeking top talent to join your team?
                  Whether you're a job seeker searching for the perfect
                  opportunity or an employer looking to hire skilled
                  professionals, we've got you covered! Browse career
                  opportunities, or get in touch with us for personalized
                  assistance and more details. Let's build successful careers
                  and teams together!
                </p>

                <div className="mt-6 flex flex-col md:flex-row gap-4 lg:text-xl">
                  <Link href="/Jobseekers">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition">
                      Find a Job
                    </button>
                  </Link>
                  <Link href="/Employers">
                    <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition">
                      Hire Talent
                    </button>
                  </Link>
                  <Link href="/Contactus">
                    <button className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-900 transition">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right Image */}
            <div className="max-w-md md:max-w-lg w-full">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate={isInView3 ? "visible" : "hidden"}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="flex-1"
              >
                <img
                  src="./Carrer1.png"
                  alt="Professional team working together"
                  // className="w-full h-auto object-cover"
                  className="w-full h-auto object-contain 
             max-h-[200px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[400px] xl:max-h-[450px]"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <section className="relative bg-[#f3f6fb] py-16 px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/topography.svg')] bg-repeat opacity-10 pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto space-y-12">
          {/* Intro block */}
          <div className="p-6 text-black rounded-md bg-white/80 backdrop-blur">
            <p className="mb-4">
              At <strong>Al Sayeed Staffing Solutions</strong>, we believe
              recruitment is more than filling a position — it’s about building
              lasting relationships and empowering growth for both employers and
              job seekers.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                🔒 <strong>Integrity First:</strong> Transparent and ethical
                recruitment standards.
              </li>
              <li>
                🕒 <strong>Time-Saving Processes:</strong> We handle the heavy
                lifting so you can focus on your business.
              </li>
              <li>
                🌟 <strong>Quality Over Quantity:</strong> Every candidate is
                vetted for skills, attitude, and fit.
              </li>
            </ul>
          </div>

          {/* FAQ Block */}
          <div>
            <h6 className="text-3xl font-bold text-center text-BgColor-Primaryclr mb-6">
              Quick Answers for a Smooth Experience.
            </h6>

            <Accordion
              type="single"
              collapsible
              className="w-full max-w-4xl mx-auto"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1" className="mb-5">
                <AccordionTrigger className="text-base text-BgColor-TextPrimary">
                  What services does Al Sayeed Staffing Solutions provide?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance text-base text-BgColor-TextPrimary">
                  <p>
                    At Al Sayeed Staffing Solutions, we offer tailored staffing
                    and recruitment services for both employers and job seekers.
                  </p>
                  <p>
                    For employers, we help find and hire the best talent to meet
                    your unique business needs — from permanent placements to
                    temporary and contract staffing.
                  </p>
                  <p>
                    For job seekers, we connect you with rewarding career
                    opportunities that match your skills, experience, and goals.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="mb-5">
                <AccordionTrigger className="text-base text-BgColor-TextPrimary">
                  Where are you located and which regions do you serve?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance text-base text-BgColor-TextPrimary">
                  <p>
                    Al Sayeed Staffing Solutions is based in Punjagutta,
                    Hyderabad, India. We proudly serve clients and candidates
                    across the GCC region, including Saudi Arabia, UAE, Qatar,
                    Oman, Kuwait, and Bahrain.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="mb-5">
                <AccordionTrigger className="text-base text-BgColor-TextPrimary">
                  How can I apply for a job through Al Sayeed Staffing
                  Solutions?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance text-base text-BgColor-TextPrimary">
                  <p>
                    You can explore available job openings in the Job Seekers
                    section on our website and apply directly online. If you’re
                    looking for a specific role that’s not listed, you can also
                    contact us with your requirements — our team will help you
                    find the right opportunity.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="mb-5">
                <AccordionTrigger className="text-base text-BgColor-TextPrimary">
                  Which industries do you specialize in?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance text-base text-BgColor-TextPrimary">
                  <p>
                    We specialize in providing skilled talent for industries
                    such as oil & gas, construction, engineering, and other key
                    sectors. To see a full list of industries we serve, please
                    visit our Employers section or contact us for more details.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="mb-5">
                <AccordionTrigger className="text-base text-BgColor-TextPrimary">
                  Is my information kept confidential?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance text-base text-BgColor-TextPrimary">
                  <p>
                    Yes — we take your privacy seriously. All personal and
                    professional information you share with Al Sayeed Staffing
                    Solutions is 100% confidential and is only used to match you
                    with suitable job opportunities or clients. We never share
                    your details without your consent.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
