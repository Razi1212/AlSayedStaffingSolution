import Navigations from "./Components/Navigations";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import Link from "next/link";
import CountUp from "./Countup";
import Footer from "./Components/Footer";

export default function () {
  return (
    <>
      <Navigations />
      <div className="relative w-full h-[500px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src="./video3.mp4" type="video/mp4" />
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


      {/* <section className="bg-gradient-to-bl from-[#ffe4e6] to-[#ccfbf1]  px-8 py-6 lg:px-[5%] lg:py-[5%] xl:px-[8%] xl:py-[8%]"> */}
      <section className="bg-gradient-to-bl from-[#ffe4e6] to-[#ccfbf1]  lg:p-[8%] px-5 py-14">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 ">
          <div className="flex-1 space-y-4">
            <h6 className="text-3xl font-bold text-gray-900">
              Career Opportunities Await You in the Gulf – Start Your Journey
              Now!
            </h6>
            <p className="text-base">
              Looking for exciting career opportunities in the Gulf region?
              Explore a wide range of job openings in the thriving Oil & Gas and
              Healthcare industries, two of the most in-demand sectors in the
              region. With the Gulf's rapid development and investment in energy
              and healthcare infrastructure, top companies are actively seeking
              skilled professionals to fill roles in engineering, project
              management, healthcare administration, medical professionals, and
              more.
            </p>

            <div className="space-y-2">
              <div className="flex items-center">
                <CountUp
                  from={0}
                  to={50}
                  separator=","
                  direction="up"
                  duration={1}
                  className="text-3xl font-semibold"
                />
                <p className="ml-2">Strong Internal team</p>
              </div>

              <div className="flex items-center">
                <CountUp
                  from={0}
                  to={30}
                  separator=","
                  direction="up"
                  duration={1}
                  className="text-3xl font-semibold"
                />
                <p className="ml-2">Recruiters</p>
              </div>

              <div className="flex items-center">
                <CountUp
                  from={0}
                  to={10}
                  separator=","
                  direction="up"
                  duration={1}
                  className="text-3xl font-semibold"
                />
                <p className="ml-2">Admin Supporting Staff</p>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <img
              src="./lo22.png"
              alt="Professional team working together in the Gulf region"
              className="w-full h-auto object-contain 
             max-h-[200px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[500px] xl:max-h-[500px]"
            />
          </div>
        </div>

        <div className="mt-6">
          <Link href="/Jobseekers">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Find Job
            </button>
          </Link>
        </div>
      </section>

      <section className=" bg-BgColor-homecolor font-geist">
        <div className="lg:flex lg:p-[8%] py-14">
          <div className="flex-1">
            <img
              src="./AboutHero22.png"
              alt="Description of the image"
              // className="lg:w-full lg:h-auto max-h-[500px]"
              className="w-full h-auto object-contain 
             max-h-[200px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[500px] xl:max-h-[500px]"
            />
          </div>

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
        </div>
      </section>


      <section className="bg-cover bg-center bg-no-repeat py-16 px-8  flex items-center justify-center bg-BgColor-homecolor">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="text-center md:text-left max-w-2xl">
            <h6 className="lg:text-4xl xl:text-3xl md:text-4xl font-bold text-gray-900">
              Let’s Collaborate with Us!
            </h6>
            <p className="mt-4 text-gray-700 leading-relaxed lg:text-xl">
              Looking for a job or seeking top talent to join your team? Whether
              you're a job seeker searching for the perfect opportunity or an
              employer looking to hire skilled professionals, we've got you
              covered! Browse career opportunities, or get in touch with us for
              personalized assistance and more details. Let's build successful
              careers and teams together!
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
          </div>

          {/* Right Image */}
          <div className="max-w-md md:max-w-lg w-full">
            <img
              src="./Carrer1.png"
              alt="Professional team working together"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section className=" bg-BgColor-homecolor font-white py-14">
        <div className="lg:flex lg:p-[8%] ">
          <div className="flex-1">
            <img
              src="./AboutHero22.png"
              alt="Description of the image"
              className="w-full h-auto object-contain 
             max-h-[200px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[500px] xl:max-h-[500px]"
            />
          </div>

          <div className="flex-1  py-10 px-6">
            <h3 className="text-3xl font-bold text-gray-800  lg:text-gray-900 ">
              From Search to Success — We’ve Got You Covered
            </h3>
            <p className="mt-4 text-gray-900 md:text-lg text-base">
              Looking to hire top talent or streamline your recruitment process? Our consultancy services are tailored to meet your hiring needs. We partner with companies across industries to deliver customized staffing solutions, saving you time and resources. Whether you're scaling quickly or searching for niche skills, our team is here to support your growth.
            </p>

            <Link href="/Employers">
              <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Go to Employers
              </button>
            </Link>
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
            <div className="flex justify-center items-center mb-4    " >
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
