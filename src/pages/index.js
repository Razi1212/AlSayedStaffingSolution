// import Navigations from "./Components/Navigations";
// import Image from "next/image";

// export default function () {
//   return (
//     <>
//       <div className="min-h-screen w-full bg-green-800">
//         {/* <div className="absolute inset-0 bg-[url('/RectLight2.webp')] bg-cover bg-center"> */}
//         <Navigations />
//         <div className="pl-14 pt-24">
//           <h6 className="text-4xl">
//             Your Gateway to Top Talent in the Gulf Region
//           </h6>
//           <p className="text-xl">
//             With a Strong Foundation of expertise and a team of dedicated
//             professionals,we cater to the recuirement needs of bussiness in the
//             Gulf Countries and the Middle East.Our mission is to connect the
//             right job opportunities with the right individuals.
//           </p>
//         </div>
//       </div>

//       <section className="bg-BgColor min-h-screen w-full">
      
//       </section>
//     </>
//   );
// }

import Navigations from "./Components/Navigations";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import Link from 'next/link';

const slides = [
  {
    image: './Construction.jpeg',
    title: 'About',
    description: 'Al Sayed Staffing Solutions is a premier recruitment agency specializing in connecting Gulf region businesses with exceptional talent',
    link: '/About',
  },
  {
    image: './Discussion.jpeg',
    title: 'Home',
    description: 'Specialized Recruiters For Different Skills, Domain & Industry Verticals.',
    link: '/About',
  },
  {
    image: './Research.jpeg',
    title: 'Services',
    description: 'Minimizing The Response Time – Sourcing to Onboarding',
    link: '/About',
  },
];

export default function () {
  const redirectToServices = () => {
    window.location.href = './Services'; // or provide the correct path
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
              <h1 className="text-2xl md:text-4xl font-bold mb-4">{slide.title}</h1>
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


      <section className='w-screen h-screen bg-cyan-50 font-geist'>
        <div className='lg:flex'>
          <div className='flex-1'>
            <img src="./about.png" alt="Description of the image" class="lg:w-full lg:h-auto 200px 200px" />

          </div>

          <div className='flex-1 lg:m-20 my-10 mx-6'>
            <h3>
              Your Brige to Top Talent in the Gulf Region
            </h3>
            <p>We specialize in providing employment opportunities across various sectors in the Gulf region, focusing on industries such as oil, construction, and healthcare.</p>

            <p>Our services connect skilled professionals with leading companies in these high-demand fields, offering tailored recruitment solutions that meet the unique needs of both employers and job seekers.</p>

            <p>With a deep understanding of the regional market, we ensure that candidates are matched with positions that align with their expertise, while helping businesses find top talent to drive growth and success. Whether in the energy sector, infrastructure development, or healthcare services, we are committed to fostering long-term employment relationships that benefit both workers and employers.</p>

            <button onClick={redirectToServices}>Go to Services</button>

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
    </>
  );
}
