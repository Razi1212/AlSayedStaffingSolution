
// 'use client';
// import React from 'react';
// import Navigation from "../Components/Navigations";
// import Footer from "../Components/Footer";
// import { motion, useScroll, useTransform } from 'framer-motion';

// const StickySection = ({ children, index }) => {
//   const sectionRef = React.useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ['start end', 'end start'],
//   });

//   return (
//     <motion.div
//       ref={sectionRef}
//       ///bg-BgColor-ServicesJobseekers
//       className="sticky top-0 flex  px-4 py-10  bg-BgColor-testing lg:px-[8%] lg:py-[5%] md:px-[10%]"
//     >
//       {/* <div className=" w-full  shadow-lg rounded-xl bg-yellow-200 p-0 m-0">hjhj */}
//       {children}
//       {/* </div> */}
//     </motion.div>
//   );
// };

// export default function SidebarTabs() {
//   return (
//     <>
//       <Navigation />
//       <div >
//         {/* bg-gradient-to-r from-gray-100 */}
//         <div className="px-4 py-10 bg-BgColor-testing    lg:px-[8%] lg:py-[5%] md:px-[10%]">
//           <div className="lg:flex gap-10 items-center justify-center">
//             <div className="flex-1">

//               <img
//                 src="/ServicesEmployes.png"
//                 alt="Sample"
//                 className="w-full h-auto object-contain 
//              max-h-[200px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[400px] xl:max-h-[400px]"
//               />
//             </div>

//             <div className="flex-1">
//               <h6 className="text-3xl font-bold text-gray-900 mt-6">Empowering Employers with Tailored Talent Solutions</h6>
//               <p className="my-5 inline-flex items-start text-base ">
//                 <span>
//                   At Al Sayed Staffing Solutions, we understand that building a high-performing team starts with finding the right talent. Our employer-focused services are designed to streamline your hiring process, enhance candidate quality, and help you achieve your business goals faster. Whether you're a startup or an enterprise, our customized recruitment solutions ensure you connect with professionals who are not just qualified, but aligned with your company culture and vision.
//                 </span>
//               </p>
//             </div>
//           </div>

//           <div className="text-3xl font-bold text-gray-900 mt-6 text-center" >
//             Services we offer to job seekers
//           </div>
//         </div>


//         <StickySection index={0} >
//           <div className="bg-gradient-to-b from-white/70 to-white/90 backdrop-blur
//           w-full lg:flex lg:p-10 md:10 p-5 rounded-3xl gap-16 shadow-2xl" >
//             <div className='flex-1'>
//               <h4 className="text-xl font-medium mb-2">Pre Souring</h4>
//               <p className="text-gray-700 mb-4">
//                 Finding the right job can be challenging, but our expert team is here
//                 to guide you every step of the way. We help job seekers identify the
//                 best career opportunities that align with their skills, experience,
//                 and professional aspirations.
//               </p>

//               <h4 className="text-xl font-medium mb-2 mt-4">
//                 How We Support Your Job Search:
//               </h4>
//               <ul className="list-disc list-inside text-gray-700 space-y-2">
//                 <li>
//                   <strong>Personalized Job Matching:</strong> We analyze your
//                   qualifications, industry preferences, and career goals to connect
//                   you with the best job opportunities.
//                 </li>
//                 <li>
//                   <strong>Optimized Job Portal Navigation:</strong> We guide you
//                   through the most effective job search platforms, helping you create
//                   strong profiles and use the right keywords to stand out.
//                 </li>
//                 <li>
//                   <strong>Networking Strategies:</strong> We offer insights on
//                   building professional connections, leveraging LinkedIn, and
//                   attending industry events to expand your career opportunities.
//                 </li>

//               </ul>
//             </div>
//             <div className=''>
//               <img
//                 src="/pics.jpg"
//                 alt="Sample"
//                 className="w-full h-auto object-contain 
//                  max-h-[200px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[200px] xl:max-h-[350px] rounded-2xl"
//               />
//             </div>
//           </div>
//         </StickySection>

//         <StickySection index={1}>
//           <div className="bg-gradient-to-b from-white/70 to-white/90 w-full lg:flex lg:p-10 md:10 p-5 rounded-3xl gap-16 shadow-2xl">
//             <div>

//               <img
//                 src="/pics2.jpeg"
//                 alt="Sample"
//                 className="w-full h-auto object-contain 
//                  max-h-[200px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[200px] xl:max-h-[350px]"
//               />
//             </div>
//             <div>
//               <h4 className="text-xl font-medium mb-2">Interviews</h4>
//               <p className="text-gray-700 mb-4">
//                 A well-structured resume is key to making a strong impression on
//                 potential employers. Our experts refine your resume to highlight your
//                 strengths, achievements, and relevant experience
//               </p>
//               <h4 className="text-xl font-medium mb-2 mt-4">
//                 Our Resume Services Include:
//               </h4>
//               <ul className="list-disc list-inside text-gray-700 space-y-2">
//                 <li>
//                   <strong>Content Optimization:</strong> We ensure that your resume
//                   effectively showcases your skills, experience, and accomplishments
//                   in a professional manner.
//                 </li>
//                 <li>
//                   <strong>Keyword Integration:</strong> Many employers use applicant
//                   tracking systems (ATS) to filter resumes. We optimize your resume
//                   with relevant industry keywords to improve visibility.
//                 </li>
//                 <li>
//                   <strong>Formatting & Design:</strong> A visually appealing and
//                   well-organized resume enhances readability and professionalism. We
//                   adjust the layout, fonts, and structure to make your resume stand
//                   out.
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </StickySection>

//         <StickySection index={2}>
//           <div className="bg-gradient-to-b from-white/70 to-white/90 w-full lg:flex lg:p-10 md:10 p-5 rounded-3xl gap-16 shadow-2xl">
//             <div>
//               <h4 className="text-xl font-medium mb-2">Recruitment Drives</h4>
//               <p className="text-gray-700 mb-4">
//                 Confidence and preparation are key to acing job interviews. Our
//                 interview coaching sessions equip you with the skills and strategies
//                 needed to impress employers.
//               </p>
//               <h4 className="text-xl font-medium mb-2 mt-4">
//                 How We Support Your Job Search::
//               </h4>
//               <ul className="list-disc list-inside text-gray-700 space-y-2">
//                 <li>
//                   <strong>Mock Interviews:</strong>We conduct simulated interviews to
//                   help you practice answering common and industry-specific questions.
//                 </li>
//                 <li>
//                   <strong>Personalized Feedback:</strong> Our experts provide
//                   constructive feedback on your responses, body language, and overall
//                   presentation.
//                 </li>
//                 <li>
//                   <strong>Effective Communication Strategies:</strong> Learn how to
//                   articulate your experiences, skills, and strengths confidently and
//                   professionally.
//                 </li>
//               </ul>
//             </div>


//             <div>

//               <img
//                 src="/pics3.jpeg"
//                 alt="Sample"
//                 className="w-full h-auto object-contain 
//                  max-h-[200px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[200px] xl:max-h-[350px]"
//               />

//             </div>

//           </div>
//         </StickySection>


//         <StickySection index={3}>
//           <div className="bg-gradient-to-b from-white/70 to-white/90 w-full lg:flex lg:p-10 md:10 p-5 rounded-3xl gap-16 shadow-2xl">
//             <div>

//               <img
//                 src="/pics2.jpeg"
//                 alt="Sample"
//                 className="w-full h-auto object-contain 
//                  max-h-[200px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[200px] xl:max-h-[350px]"
//               />
//             </div>
//             <div>
//               <h4 className="text-xl font-medium mb-2">Candidate On-Boarding</h4>
//               <p className="text-gray-700 mb-4">
//                 A well-structured resume is key to making a strong impression on
//                 potential employers. Our experts refine your resume to highlight your
//                 strengths, achievements, and relevant experience
//               </p>
//               <h4 className="text-xl font-medium mb-2 mt-4">
//                 Our Resume Services Include:
//               </h4>
//               <ul className="list-disc list-inside text-gray-700 space-y-2">
//                 <li>
//                   <strong>Content Optimization:</strong> We ensure that your resume
//                   effectively showcases your skills, experience, and accomplishments
//                   in a professional manner.
//                 </li>
//                 <li>
//                   <strong>Keyword Integration:</strong> Many employers use applicant
//                   tracking systems (ATS) to filter resumes. We optimize your resume
//                   with relevant industry keywords to improve visibility.
//                 </li>
//                 <li>
//                   <strong>Formatting & Design:</strong> A visually appealing and
//                   well-organized resume enhances readability and professionalism. We
//                   adjust the layout, fonts, and structure to make your resume stand
//                   out.
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </StickySection>

//         <StickySection index={4}>
//           <div className="bg-gradient-to-b from-white/70 to-white/90 w-full lg:flex lg:p-10 md:10 p-5 rounded-3xl gap-16 shadow-2xl">
//             <div>
//               <h4 className="text-xl font-medium mb-2">Skill Test</h4>
//               <p className="text-gray-700 mb-4">
//                 Confidence and preparation are key to acing job interviews. Our
//                 interview coaching sessions equip you with the skills and strategies
//                 needed to impress employers.
//               </p>
//               <h4 className="text-xl font-medium mb-2 mt-4">
//                 How We Support Your Job Search::
//               </h4>
//               <ul className="list-disc list-inside text-gray-700 space-y-2">
//                 <li>
//                   <strong>Mock Interviews:</strong>We conduct simulated interviews to
//                   help you practice answering common and industry-specific questions.
//                 </li>
//                 <li>
//                   <strong>Personalized Feedback:</strong> Our experts provide
//                   constructive feedback on your responses, body language, and overall
//                   presentation.
//                 </li>
//                 <li>
//                   <strong>Effective Communication Strategies:</strong> Learn how to
//                   articulate your experiences, skills, and strengths confidently and
//                   professionally.
//                 </li>
//               </ul>
//             </div>


//             <div>

//               <img
//                 src="/pics3.jpeg"
//                 alt="Sample"
//                 className="w-full h-auto object-contain 
//                  max-h-[200px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[200px] xl:max-h-[350px]"
//               />

//             </div>

//           </div>
//         </StickySection>

//         <StickySection index={5}>
//           <div className="bg-gradient-to-b from-white/70 to-white/90 w-full lg:flex lg:p-10 md:10 p-5 rounded-3xl gap-16 shadow-2xl">
//             <div>

//               <img
//                 src="/pics2.jpeg"
//                 alt="Sample"
//                 className="w-full h-auto object-contain 
//                  max-h-[200px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[200px] xl:max-h-[350px]"
//               />
//             </div>
//             <div>
//               <h4 className="text-xl font-medium mb-2">Assessment</h4>
//               <p className="text-gray-700 mb-4">
//                 A well-structured resume is key to making a strong impression on
//                 potential employers. Our experts refine your resume to highlight your
//                 strengths, achievements, and relevant experience
//               </p>
//               <h4 className="text-xl font-medium mb-2 mt-4">
//                 Our Resume Services Include:
//               </h4>
//               <ul className="list-disc list-inside text-gray-700 space-y-2">
//                 <li>
//                   <strong>Content Optimization:</strong> We ensure that your resume
//                   effectively showcases your skills, experience, and accomplishments
//                   in a professional manner.
//                 </li>
//                 <li>
//                   <strong>Keyword Integration:</strong> Many employers use applicant
//                   tracking systems (ATS) to filter resumes. We optimize your resume
//                   with relevant industry keywords to improve visibility.
//                 </li>
//                 <li>
//                   <strong>Formatting & Design:</strong> A visually appealing and
//                   well-organized resume enhances readability and professionalism. We
//                   adjust the layout, fonts, and structure to make your resume stand
//                   out.
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </StickySection>
//       </div>
//       <Footer />
//     </>
//   );
// }


'use client';
import React from 'react';
import Navigation from "../Components/Navigations";
import Footer from "../Components/Footer";
import { motion, useScroll, useTransform } from 'framer-motion';

const StickySection = ({ children, index }) => {
  const sectionRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  return (
    <motion.div
      ref={sectionRef}
      ///bg-BgColor-ServicesJobseekers
      className="sticky top-0 flex  px-4 py-10  bg-BgColor-testing lg:px-[8%] lg:py-[5%] md:px-[10%]"
    >
      {/* <div className=" w-full  shadow-lg rounded-xl bg-yellow-200 p-0 m-0">hjhj */}
      {children}
      {/* </div> */}
    </motion.div>
  );
};

export default function SidebarTabs() {
  return (
    <>
      <Navigation />
      <div >
        <div className="px-4 py-10  bg-BgColor-testing  lg:px-[8%] lg:py-[5%] md:px-[10%]">
          <div className="lg:flex gap-10 items-center justify-center">
            <div className="flex-1">

              <img
                src="/ServicesEmployes.png"
                alt="Sample"
                className="w-full h-auto object-contain 
             max-h-[200px] sm:max-h-[500px] md:max-h-[500px] lg:max-h-[500px] xl:max-h-[500px]"
              />
            </div>

            <div className="flex-1">
              <h6 className="text-3xl font-bold text-gray-900 mt-6">Empowering Employers with Tailored Talent Solutions</h6>
              <p className="my-5 inline-flex items-start text-base ">
                <span>
                  At Al Sayed Staffing Solutions, we understand that building a high-performing team starts with finding the right talent. Our employer-focused services are designed to streamline your hiring process, enhance candidate quality, and help you achieve your business goals faster. Whether you're a startup or an enterprise, our customized recruitment solutions ensure you connect with professionals who are not just qualified, but aligned with your company culture and vision.
                </span>
              </p>
            </div>
          </div>

          <div className="text-3xl font-bold text-gray-900 mt-6 text-center" >
            Services we offer to job seekers
          </div>
        </div>


        <StickySection index={0} >
          <div className="bg-BgColor-contactcolor backdrop-blur
          w-full lg:flex lg:p-10 md:10 p-5 rounded-3xl gap-16 shadow-2xl" >
            <div className='flex-1'>
              <h4 className="text-xl font-medium mb-2">Pre Souring</h4>
              <p className="text-gray-700 mb-4">
                Finding the right job can be challenging, but our expert team is here
                to guide you every step of the way. We help job seekers identify the
                best career opportunities that align with their skills, experience,
                and professional aspirations.
              </p>

              <h4 className="text-xl font-medium mb-2 mt-4">
                How We Support Your Job Search:
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <strong>Personalized Job Matching:</strong> We analyze your
                  qualifications, industry preferences, and career goals to connect
                  you with the best job opportunities.
                </li>
                <li>
                  <strong>Optimized Job Portal Navigation:</strong> We guide you
                  through the most effective job search platforms, helping you create
                  strong profiles and use the right keywords to stand out.
                </li>
                <li>
                  <strong>Networking Strategies:</strong> We offer insights on
                  building professional connections, leveraging LinkedIn, and
                  attending industry events to expand your career opportunities.
                </li>

              </ul>
            </div>
             <div className="min-w-[300px] min-h-[300px] max-w-[300px] max-h-[300px] overflow-hidden rounded-2xl shadow-md flex items-center justify-center">
              <img src="/pics.jpg" alt="Sample" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
        </StickySection>

        <StickySection index={1}>
          <div className="bg-BgColor-contactcolor w-full lg:flex lg:p-10 md:10 p-5 rounded-3xl gap-16 shadow-2xl">
             <div className="min-w-[300px] min-h-[300px] max-w-[300px] max-h-[300px] overflow-hidden rounded-2xl shadow-md flex items-center justify-center">
              <img src="\software.jpeg" alt="Sample" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div>
              <h4 className="text-xl font-medium mb-2">Interviews</h4>
              <p className="text-gray-700 mb-4">
                A well-structured resume is key to making a strong impression on
                potential employers. Our experts refine your resume to highlight your
                strengths, achievements, and relevant experience
              </p>
              <h4 className="text-xl font-medium mb-2 mt-4">
                Our Resume Services Include:
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <strong>Content Optimization:</strong> We ensure that your resume
                  effectively showcases your skills, experience, and accomplishments
                  in a professional manner.
                </li>
                <li>
                  <strong>Keyword Integration:</strong> Many employers use applicant
                  tracking systems (ATS) to filter resumes. We optimize your resume
                  with relevant industry keywords to improve visibility.
                </li>
                <li>
                  <strong>Formatting & Design:</strong> A visually appealing and
                  well-organized resume enhances readability and professionalism. We
                  adjust the layout, fonts, and structure to make your resume stand
                  out.
                </li>
              </ul>
            </div>
          </div>
        </StickySection>

        <StickySection index={2}>
          <div className="bg-BgColor-contactcolor w-full lg:flex lg:p-10 md:10 p-5 rounded-3xl gap-16 shadow-2xl">
            <div>
              <h4 className="text-xl font-medium mb-2">Recruitment Drives</h4>
              <p className="text-gray-700 mb-4">
                Confidence and preparation are key to acing job interviews. Our
                interview coaching sessions equip you with the skills and strategies
                needed to impress employers.
              </p>
              <h4 className="text-xl font-medium mb-2 mt-4">
                How We Support Your Job Search::
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <strong>Mock Interviews:</strong>We conduct simulated interviews to
                  help you practice answering common and industry-specific questions.
                </li>
                <li>
                  <strong>Personalized Feedback:</strong> Our experts provide
                  constructive feedback on your responses, body language, and overall
                  presentation.
                </li>
                <li>
                  <strong>Effective Communication Strategies:</strong> Learn how to
                  articulate your experiences, skills, and strengths confidently and
                  professionally.
                </li>
              </ul>
            </div>


            <div className="min-w-[300px] min-h-[300px] max-w-[300px] max-h-[300px] overflow-hidden rounded-2xl shadow-md flex items-center justify-center">
              <img src="\rdrive.jpg" alt="Sample" className="w-full h-full object-cover rounded-2xl" />
            </div>

          </div>
        </StickySection>


        <StickySection index={3}>
          <div className="bg-BgColor-contactcolor w-full lg:flex lg:p-10 md:10 p-5 rounded-3xl gap-16 shadow-2xl">
             <div className="min-w-[300px] min-h-[300px] max-w-[300px] max-h-[300px] overflow-hidden rounded-2xl shadow-md flex items-center justify-center">
              <img src="\onboarding.jpg" alt="Sample" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div>
              <h4 className="text-xl font-medium mb-2">Candidate On-Boarding</h4>
              <p className="text-gray-700 mb-4">
                A well-structured resume is key to making a strong impression on
                potential employers. Our experts refine your resume to highlight your
                strengths, achievements, and relevant experience
              </p>
              <h4 className="text-xl font-medium mb-2 mt-4">
                Our Resume Services Include:
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <strong>Content Optimization:</strong> We ensure that your resume
                  effectively showcases your skills, experience, and accomplishments
                  in a professional manner.
                </li>
                <li>
                  <strong>Keyword Integration:</strong> Many employers use applicant
                  tracking systems (ATS) to filter resumes. We optimize your resume
                  with relevant industry keywords to improve visibility.
                </li>
                <li>
                  <strong>Formatting & Design:</strong> A visually appealing and
                  well-organized resume enhances readability and professionalism. We
                  adjust the layout, fonts, and structure to make your resume stand
                  out.
                </li>
              </ul>
            </div>
          </div>
        </StickySection>

        <StickySection index={4}>
          <div className="bg-BgColor-contactcolor w-full lg:flex lg:p-10 md:10 p-5 rounded-3xl gap-16 shadow-2xl">
            <div>
              <h4 className="text-xl font-medium mb-2">Skill Test</h4>
              <p className="text-gray-700 mb-4">
                Confidence and preparation are key to acing job interviews. Our
                interview coaching sessions equip you with the skills and strategies
                needed to impress employers.
              </p>
              <h4 className="text-xl font-medium mb-2 mt-4">
                How We Support Your Job Search::
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <strong>Mock Interviews:</strong>We conduct simulated interviews to
                  help you practice answering common and industry-specific questions.
                </li>
                <li>
                  <strong>Personalized Feedback:</strong> Our experts provide
                  constructive feedback on your responses, body language, and overall
                  presentation.
                </li>
                <li>
                  <strong>Effective Communication Strategies:</strong> Learn how to
                  articulate your experiences, skills, and strengths confidently and
                  professionally.
                </li>
              </ul>
            </div>


             <div className="min-w-[300px] min-h-[300px] max-w-[300px] max-h-[300px] overflow-hidden rounded-2xl shadow-md flex items-center justify-center">
              <img src="\skillT.jpg" alt="Sample" className="w-full h-full object-cover rounded-2xl" />
            </div>

          </div>
        </StickySection>

        <StickySection index={5}>
          <div className="bg-BgColor-contactcolor w-full lg:flex lg:p-10 md:10 p-5 rounded-3xl gap-16 shadow-2xl">
            <div className="min-w-[300px] min-h-[300px] max-w-[300px] max-h-[300px] overflow-hidden rounded-2xl shadow-md flex items-center justify-center">
              <img src="\assesment.jpg" alt="Sample" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div>
              <h4 className="text-xl font-medium mb-2">Assessment</h4>
              <p className="text-gray-700 mb-4">
                A well-structured resume is key to making a strong impression on
                potential employers. Our experts refine your resume to highlight your
                strengths, achievements, and relevant experience
              </p>
              <h4 className="text-xl font-medium mb-2 mt-4">
                Our Resume Services Include:
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <strong>Content Optimization:</strong> We ensure that your resume
                  effectively showcases your skills, experience, and accomplishments
                  in a professional manner.
                </li>
                <li>
                  <strong>Keyword Integration:</strong> Many employers use applicant
                  tracking systems (ATS) to filter resumes. We optimize your resume
                  with relevant industry keywords to improve visibility.
                </li>
                <li>
                  <strong>Formatting & Design:</strong> A visually appealing and
                  well-organized resume enhances readability and professionalism. We
                  adjust the layout, fonts, and structure to make your resume stand
                  out.
                </li>
              </ul>
            </div>
          </div>
        </StickySection>
      </div>
      <Footer />
    </>
  );
}
