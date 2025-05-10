import Navigations from "./Components/Navigations";
import Link from "next/link";
import CountUp from "./Countup";
import Footer from "./Components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function () {
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

  return (
    <>
      <Navigations />

      <div className="relative w-full h-[500px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src="./video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Your content on top of the video */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-bold"> Al Sayed-Staffing-Solution</h1>
          <p className="text-xl mt-4">
            Al Sayed Staffing Solutions is a premier recruitment agency
            specializing in connecting Gulf region businesses with exceptional
            talent
          </p>
        </div>
      </div>

      <section className="bg-gradient-to-bl from-[#ffe4e6] to-[#ccfbf1] lg:p-[8%] px-5 py-14">
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
              Explore a wide range of job openings in the thriving Oil & Gas and
              Healthcare industries...
            </motion.p>
          </motion.div>

          <motion.div
            variants={zoomInRotate}
            initial="hidden"
            animate={isInView1 ? "visible" : "hidden"}
            className="flex-1 space-y-2"
          >
            <motion.div variants={zoomInRotate} className="flex items-center">
              <CountUp
                from={0}
                to={50}
                separator=","
                direction="up"
                duration={1}
                className="text-3xl font-semibold"
              />
              <p className="ml-2">Strong Internal team</p>
            </motion.div>

            <motion.div variants={zoomInRotate} className="flex items-center">
              <CountUp
                from={0}
                to={30}
                separator=","
                direction="up"
                duration={1}
                className="text-3xl font-semibold"
              />
              <p className="ml-2">Recruiters</p>
            </motion.div>

            <motion.div variants={zoomInRotate} className="flex items-center">
              <CountUp
                from={0}
                to={10}
                separator=","
                direction="up"
                duration={1}
                className="text-3xl font-semibold"
              />
              <p className="ml-2">Admin Supporting Staff</p>
            </motion.div>
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

      <section className=" bg-BgColor-homecolor font-geist">
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
            className="flex-1 py-10 px-6"
          >
            <div className="flex-1  py-10 px-6">
              <h3 className="text-3xl font-bold text-gray-800  lg:text-gray-900 ">
                Connecting Regional Talent with Gulf Opportunities.
              </h3>
              <p className="mt-4 text-gray-900 md:text-lg text-base">
                We specialize in placing skilled professionals across key Gulf
                industries, including oil and gas, construction, manufacturing,
                finance, retail, hospitality, IT, and healthcare. Our tailored
                recruitment solutions bridge the gap between top talent and
                leading companies.
              </p>

              <Link href="/Services">
                <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Go to Services
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-cover bg-center bg-no-repeat py-16 px-8  flex items-center justify-center bg-BgColor-homecolor">
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
              <h6 className="lg:text-4xl xl:text-3xl md:text-4xl font-bold text-gray-900">
                Let’s Collaborate with Us!
              </h6>
              <p className="mt-4 text-gray-700 leading-relaxed lg:text-xl">
                Looking for a job or seeking top talent to join your team?
                Whether you're a job seeker searching for the perfect
                opportunity or an employer looking to hire skilled
                professionals, we've got you covered! Browse career
                opportunities, or get in touch with us for personalized
                assistance and more details. Let's build successful careers and
                teams together!
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
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className=" bg-BgColor-homecolor font-white py-14">
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
                src="./AboutHero22.png"
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
                resources. Whether you're scaling quickly or searching for niche
                skills, our team is here to support your growth.
              </p>

              <Link href="/Employers">
                <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Go to Employers
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="lg:p-[8%]">
        <h6 className="text-xl font-semibold text-gray-800">
          Insights from the People We've Placed
        </h6>
        <br />
        <span className="text-base text-gray-600">
          Hear from individuals who trusted us with their careers. Their stories
          reflect the value, guidance, and impact our consulting services
          deliver every day.
        </span>

        <div className="lg:flex">
          <div className="p-10 ">
            <div className="flex justify-center items-center mb-4">
              <img
                src="./pic2.jpeg"
                alt="Sample"
                className="w-40 h-40 object-cover rounded-full border-4 border-rose-400"
              />
            </div>

            <h3 className="bg-rose-400 text-white  p-4 text-center rounded-2xl">
              Abdullah
            </h3>
            <h3 className="text-rose-400 p-4">
              Designation : Software Developer
            </h3>
            <div className="border-2  border-rose-400 p-10 rounded-md">
              <p>
                The team understood my career goals and matched me with a role
                that truly fits. Highly recommend their services
              </p>
            </div>
          </div>

          <div className="p-10">
            <div className="flex justify-center items-center mb-4">
              <img
                src="./pic2.jpeg"
                alt="Sample"
                className="w-40 h-40 object-cover rounded-full border-4  border-teal-900 "
              />
            </div>
            <h3 className="bg-teal-900 text-white  p-4 text-center rounded-2xl">
              Imran H
            </h3>
            <h3 className="text-teal-900 p-4">Designation : Data Analyst</h3>
            <div className="border-2  border-teal-900 p-10 rounded-md">
              <p>
                Their team took care of everything — scheduling, follow-ups, and
                even salary negotiation. I felt truly supported.
              </p>
            </div>
          </div>

          <div className="p-10">
            <div className="flex justify-center items-center mb-4    ">
              <img
                src="./pic2.jpeg"
                alt="Sample"
                className="w-40 h-40 object-cover rounded-full border-4 border-zinc-600"
              />
            </div>
            <h3 className="bg-zinc-600 text-white  p-4 text-center rounded-2xl">
              Fatima A., UX Designer
            </h3>
            <h3 className="text-zinc-600 p-4">
              Designation : Front-End Developer
            </h3>
            <div className="border-2  border-zinc-600 p-10 rounded-md">
              <p>
                From CV optimization to company insights, their guidance gave me
                the edge I needed. Can’t thank them enough!
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
