import Navigations from "./Components/Navigations";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import Link from "next/link";
import CountUp from "./Countup";
import Footer from "./Components/Footer";

const slides = [
  {
    image: "./Construction.jpeg",
    title: "About",
    description:
      "Al Sayed Staffing Solutions is a premier recruitment agency specializing in connecting Gulf region businesses with exceptional talent",
    link: "/About",
  },
  {
    image: "./Discussion.jpeg",
    title: "Home",
    description:
      "Specialized Recruiters For Different Skills, Domain & Industry Verticals.",
    link: "/About",
  },
  {
    image: "./Research.jpeg",
    title: "Services",
    description: "Minimizing The Response Time – Sourcing to Onboarding",
    link: "/About",
  },
];

export default function () {
  const redirectToServices = () => {
    window.location.href = "./Services"; // or provide the correct path
  };
  return (
    <>
      <Navigations />

      <div className="relative w-full h-screen overflow-hidden">
        <Carousel
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop
          autoPlay
          emulateTouch
          interval={3000}
        >
          {slides.map((slide, index) => (
            <div key={index} className="relative w-full h-screen">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4">
                <h1 className="text-2xl md:text-4xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-base md:text-xl mb-4">{slide.description}</p>
                <Link
                  href={slide.link}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <section className="w-full h-screen bg-cyan-50 font-geist">
        <div className="lg:flex">
          <div className="flex-1">
            <img
              src="./about.png"
              alt="Description of the image"
              className="lg:w-full lg:h-auto w-52 h-52 mx-auto"
            />
          </div>

          <div className="flex-1 lg:m-20 my-10 mx-6">
            <h3 className="text-2xl font-bold text-gray-800">
              Your Bridge to Top Talent in the Gulf Region
            </h3>
            <p className="mt-4 text-gray-600">
              We specialize in providing employment opportunities across various
              sectors in the Gulf region, focusing on industries such as oil,
              construction, and healthcare.
            </p>

            <p className="mt-4 text-gray-600">
              Our services connect skilled professionals with leading companies
              in these high-demand fields, offering tailored recruitment
              solutions that meet the unique needs of both employers and job
              seekers.
            </p>

            <button
              onClick={redirectToServices}
              className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Go to Services
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-bl from-[#ffe4e6] to-[#ccfbf1] min-h-screen w-full px-8 py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-8">
          <div className="flex-1 space-y-4">
            <h6 className="text-xl font-bold">
              Career Opportunities Await You in the Gulf – Start Your Journey
              Now!
            </h6>
            <p className="text-lg">
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
              src="./Test.webp"
              alt="Professional team working together in the Gulf region"
              className="w-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            onClick={redirectToServices}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Find Job
          </button>
        </div>
      </section>

      <section
  className="bg-cover bg-center bg-no-repeat py-16 px-8 w-full min-h-screen flex items-center justify-center"
  style={{ backgroundImage: "url('/Contact.webp')" }}
>
  <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
    {/* Left Content */}
    <div className="text-center md:text-left max-w-2xl">
      <h6 className="text-3xl md:text-4xl font-bold text-gray-900">
        Let’s Collaborate with Us!
      </h6>
      <p className="mt-4 text-gray-700 leading-relaxed">
        Looking for a job or seeking top talent to join your team? Whether
        you're a job seeker searching for the perfect opportunity or an
        employer looking to hire skilled professionals, we've got you covered!
        Browse career opportunities, or get in touch with us for personalized
        assistance and more details. Let's build successful careers and teams
        together!
      </p>

      <div className="mt-6 flex flex-col md:flex-row gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition">
          Find a Job
        </button>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition">
          Hire Talent
        </button>
        <button className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-900 transition">
          Contact Us
        </button>
      </div>
    </div>

    {/* Right Image */}
    <div className="max-w-md md:max-w-lg w-full">
      <img
        src="./Test.webp"
        alt="Professional team working together"
        className="w-full h-auto object-cover rounded-lg shadow-xl"
      />
    </div>
  </div>
     </section>



      {/* <section className='w-screen h-screen bg-violet-200 lg:p-10 px-6 font-geist'>
        <h4 className="text-xl font-bold font-open-sans">Our Recruitment Process</h4>
        <p>Our systematic recruitment process is designed to deliver results with efficiency and precision. We follow a structured approach that includes:</p>
        <div className="lg:flex">
          <div className="flex-1 bg-slate-200 p-6">
            <p className="font-semibold">1. Requirement Gathering</p>
            <p>Understanding your organization's unique needs and job requirements.</p>
            <p>Collaborating closely with clients to create detailed job descriptions and expectations for the Telesales Executive role.</p>

            <p className="font-semibold mt-4">2. Candidate Sourcing</p>
            <p>We employ a multi-faceted approach to identify top talent:</p>
            <ul>
              <li>Internal Database: Leveraging our extensive pool of pre-screened candidates.</li>
              <li>Industry References: Engaging with our trusted network to find high-quality referrals.</li>
              <li>Field Recruiting: Identifying and approaching professionals actively working in relevant industries.</li>
              <li>Vendor Collaboration: Partnering with recruitment vendors to expand our reach.</li>
              <li>Social Media Platforms: Utilizing LinkedIn, Facebook, and other platforms for targeted sourcing.</li>
              <li>Job Portals: Posting openings and sourcing profiles on leading platforms like Naukri, Monster, and Indeed.</li>
            </ul>
          </div>

          <div className="flex-1 bg-orange-100 p-6">
            <p className="font-semibold">3. Screening & Quality Control</p>
            <p>We perform a detailed evaluation to ensure candidates align with your requirements:</p>
            <ul>
              <li>Resume Screening: Thorough evaluation of resumes to shortlist candidates with relevant experience and skills.</li>
              <li>Two-Level Quality Check: A rigorous process to verify candidates' backgrounds, skills, and alignment with job requirements.</li>
              <li>Skill Assessment: Testing candidates on their communication, sales aptitude, and ability to meet sales targets.</li>
            </ul>
          </div>
        </div>
      </section> */}
       <Footer />
    </>
  );
}
