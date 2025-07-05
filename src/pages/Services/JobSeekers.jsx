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
//       className="sticky top-0 flex  px-4 py-10  bg-BgColor-testing lg:px-[8%] lg:py-[5%] md:px-[10%]"
//     >
//       {/* <div className=" w-full  shadow-lg rounded-xl bg-yellow-200 p-0 m-0">hjhj */}
//       {children}
//       {/* </div> */}
//     </motion.div>
//   );
// };

// export default function JobSeekers() {
//   return (
//     <>
//       <Navigation />
//       <div >
//         <div className="px-4 py-10  bg-BgColor-testing lg:px-[8%] lg:py-[5%] md:px-[10%]">
//           <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
//             Empowering Employers with Tailored Talent Solutions
//           </h1>
//           <p className="text-gray-600 text-lg">
//             At Al Sayed Staffing Solutions, we understand that building a high-performing team starts with finding the right talent.
//             Our employer-focused services are designed to streamline your hiring process, enhance candidate quality,
//             and help you achieve your business goals faster. Whether you're a startup or an enterprise,
//             our customized recruitment solutions ensure you connect with professionals who are not just qualified,
//             but aligned with your company culture and vision.
//           </p>
//           <h6 className="text-3xl font-bold text-gray-800 mt-4">Services we offer to Employers</h6>
//         </div>


//         <StickySection index={0} >
//           <div className="bg-gradient-to-b from-white/70 to-white/90 backdrop-blur-xl border border-white/40  w-full lg:flex lg:p-10 md:10 p-5 rounded-3xl gap-16 shadow-2xl" >
//             <div className='flex-1'>
//               <h4 className="text-xl font-medium mb-2">Job Search Assistance</h4>
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
//             <div className="w-[250px] h-[250px] overflow-hidden rounded-2xl shadow-md">
//               <img
//                 src="/Jobsearch.jpeg"strong
//                 alt="Sample"
//                 // className="w-full h-auto object-contain 
//                 //  max-h-[200px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[200px] xl:max-h-[350px] rounded-2xl"
//                     className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </StickySection>

//         <StickySection index={1}>
//           <div className="bg-gradient-to-b from-white/70 to-white/90 backdrop-blur-xl w-full lg:flex lg:p-10 md:10 p-5 rounded-3xl gap-16 shadow-2xl">

//             <div className='flex-1'>
//               <h4 className="text-xl font-medium mb-2">Resume Modification</h4>
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

//            <div className="w-[250px] h-[250px] overflow-hidden rounded-2xl shadow-md">

//               <img
//                 src="/Resume.jpeg"
//                 alt="Sample"
//                 // className="w-full h-auto object-contain 
//                 //  max-h-[200px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[200px] xl:max-h-[350px] rounded-2xl"
//                     className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </StickySection>

//         <StickySection index={2}>
//           <div className="bg-gradient-to-b from-white/70 to-white/90 backdrop-blur-xl0 w-full lg:flex lg:p-10 md:10 p-5 rounded-3xl gap-16 shadow-2xl">
//             <div className='flex-1'>
//               <h4 className="text-xl font-medium mb-2">Interview Coaching</h4>
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


//            <div className="w-[250px] h-[250px] overflow-hidden rounded-2xl shadow-md">

//               <img
//                 src="/friends3.jpeg"
//                 alt="Sample"
//           // className="w-full h-auto object-contain 
//           //        max-h-[200px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[200px] xl:max-h-[350px] rounded-2xl"
//             className="w-full h-full object-cover"
                 
//               />

//             </div>

//           </div>
//         </StickySection>

//         <StickySection index={3}>
//           <div className="bg-gradient-to-b from-white/70 to-white/90 backdrop-blur-xl w-full lg:flex lg:p-10 md:10 p-5 rounded-3xl gap-16 shadow-2xl">
//             <div>
//               <h4 className="text-xl font-medium mb-2">Documents Attestation</h4>
//               <p className="text-gray-700 mb-4">
//                 Many employers and visa authorities require verified documents for job applications and immigration purposes. We assist in attesting your essential documents to meet regulatory and employer requirements.
//               </p>
//               <h4 className="text-xl font-medium mb-2 mt-4">
//                 Our Resume Services Include:
//               </h4>
//               <ul className="list-disc list-inside text-gray-700 space-y-2">
//                 <li>
//                   <strong>Educational Document Attestation:</strong> Verification and authentication of degrees, diplomas, and transcripts.
//                 </li>
//                 <li>
//                   <strong>Professional Document Attestation:</strong> Certification of work experience letters, licenses, and professional certifications.

//                 </li>
//                 <li>
//                   <strong>Legalization & Embassy Verification:</strong>Assistance in notarization, legalization, and embassy verification of documents as per country-specific requirements.
//                 </li>
//               </ul>
//             </div>


//             <div className="w-[250px] h-[250px] overflow-hidden rounded-2xl shadow-md">

//               <img
//                 src="/pics4.jpeg"
//                 alt="Sample"
//               // className="w-full h-auto object-contain 
//               //    max-h-[200px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[200px] xl:max-h-[350px] rounded-2xl"
//                 className="w-full h-full object-cover"
//               />

//             </div>

//           </div>
//         </StickySection>

//         <StickySection index={4}>
//           <div className="bg-gradient-to-b from-white/70 to-white/90 backdrop-blur-xl w-full lg:flex lg:p-10 md:10 p-5  rounded-3xl gap-16 shadow-2xl">
//             <div>
//               <h4 className="text-xl font-medium mb-2">Visa Processing Assistance</h4>
//               <p className="text-gray-700 mb-4">
//                 Securing a work visa can be a complex and time-consuming process. Our team simplifies the process by providing step-by-step guidance and ensuring compliance with immigration regulations.
//               </p>
//               <h4 className="text-xl font-medium mb-2 mt-4">
//                 How We Support Your Job Search:
//               </h4>
//               <ul className="list-disc list-inside text-gray-700 space-y-2">
//                 <li>
//                   <strong>Eligibility Assessment:</strong>We help determine the best visa category based on your qualifications and job offer.
//                 </li>
//                 <li>
//                   <strong>Document Preparation:</strong> Guidance on gathering and organizing required documents such as passports, employment contracts, and medical reports
//                 </li>
//                 <li>
//                   <strong>Application Submission Support:</strong>  We assist in completing and submitting visa applications correctly to avoid delays or rejections.
//                 </li>
//               </ul>
//             </div>

//             <div className="w-[250px] h-[250px] overflow-hidden rounded-2xl shadow-md">


//               <img
//                 src="/pics6.jpeg"
//                 alt="Sample"
//                 //   className="w-full h-auto object-contain 
//                 //  max-h-[200px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[200px] xl:max-h-[350px] rounded-2xl"
//                  className="w-full h-full object-cover"
//               />

//             </div>

//           </div>
//         </StickySection>


//         <StickySection index={5}>
//           <div className="bg-gradient-to-b from-white/70 to-white/90 backdrop-blur-xl w-full lg:flex lg:p-10 md:10 p-5 rounded-3xl gap-16 shadow-2xl">
//             <div>
//               <h4 className="text-xl font-medium mb-2">Pre departure Guidance</h4>
//               <p className="text-gray-700 mb-4">
//                 Securing a work visa can be a complex and time-consuming process. Our team simplifies the process by providing step-by-step guidance and ensuring compliance with immigration regulations.
//               </p>
//               <h4 className="text-xl font-medium mb-2 mt-4">
//                 How We Support Your Job Search:
//               </h4>
//               <ul className="list-disc list-inside text-gray-700 space-y-2">
//                 <li>
//                   <strong>Eligibility Assessment:</strong>We help determine the best visa category based on your qualifications and job offer.
//                 </li>
//                 <li>
//                   <strong>Document Preparation:</strong> Guidance on gathering and organizing required documents such as passports, employment contracts, and medical reports
//                 </li>
//                 <li>
//                   <strong>Application Submission Support:</strong>  We assist in completing and submitting visa applications correctly to avoid delays or rejections.
//                 </li>
//               </ul>
//             </div>

//            <div className="w-[250px] h-[250px] overflow-hidden rounded-2xl shadow-md">


//               <img
//                 src="/pics5.jpeg"
//                 alt="Sample"
//             // className="w-full h-auto object-contain 
//             //      max-h-[200px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[200px] xl:max-h-[350px] rounded-2xl"
//              className="w-full h-full object-cover"
//               />

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
      className="sticky top-0 flex  px-4 py-10  bg-BgColor-testing lg:px-[8%] lg:py-[5%] md:px-[10%]"
    >
      {/* <div className=" w-full  shadow-lg rounded-xl bg-yellow-200 p-0 m-0">hjhj */}
      {children}
      {/* </div> */}
    </motion.div>
  );
};

export default function JobSeekers() {
  return (
    <>
      <Navigation />
      <div >
        <div className="px-4 py-10  bg-BgColor-testing  lg:px-[8%] lg:py-[5%] md:px-[10%]">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Empowering Employers with Tailored Talent Solutions
          </h1>
          <p className="text-gray-600 text-lg">
            At Al Sayed Staffing Solutions, we understand that building a high-performing team starts with finding the right talent.
            Our employer-focused services are designed to streamline your hiring process, enhance candidate quality,
            and help you achieve your business goals faster. Whether you're a startup or an enterprise,
            our customized recruitment solutions ensure you connect with professionals who are not just qualified,
            but aligned with your company culture and vision.
          </p>
          <h6 className="text-3xl font-bold text-gray-800 mt-4">Services we offer to Employers</h6>
        </div>


        <StickySection index={0} >
          <div className="bg-BgColor-contactcolor backdrop-blur-xl border border-white/40  w-full lg:flex lg:p-10 md:10 p-5 rounded-3xl gap-16 shadow-2xl" >
            <div className='flex-1'>
              <h4 className="text-xl font-medium mb-2">Job Search Assistance</h4>
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
              <img src="/Jobsearch.jpeg" alt="Sample" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
        </StickySection>

        <StickySection index={1}>
          <div className="bg-BgColor-contactcolor backdrop-blur-xl w-full lg:flex lg:p-10 md:10 p-5 rounded-3xl gap-16 shadow-2xl">

            <div className='flex-1'>
              <h4 className="text-xl font-medium mb-2">Resume Modification</h4>
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

           <div className="min-w-[300px] min-h-[300px] max-w-[300px] max-h-[300px] overflow-hidden rounded-2xl shadow-md flex items-center justify-center">
              <img src="/Resume.jpeg" alt="Sample" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
        </StickySection>

        <StickySection index={2}>
          <div className="bg-BgColor-contactcolor backdrop-blur-xl0 w-full lg:flex lg:p-10 md:10 p-5 rounded-3xl gap-16 shadow-2xl">
            <div className='flex-1'>
              <h4 className="text-xl font-medium mb-2">Interview Coaching</h4>
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
              <img src="/friends3.jpeg" alt="Sample" className="w-full h-full object-cover rounded-2xl" />
            </div>

          </div>
        </StickySection>

        <StickySection index={3}>
          <div className="bg-BgColor-contactcolor backdrop-blur-xl w-full lg:flex lg:p-10 md:10 p-5 rounded-3xl gap-16 shadow-2xl">
            <div>
              <h4 className="text-xl font-medium mb-2">Documents Attestation</h4>
              <p className="text-gray-700 mb-4">
                Many employers and visa authorities require verified documents for job applications and immigration purposes. We assist in attesting your essential documents to meet regulatory and employer requirements.
              </p>
              <h4 className="text-xl font-medium mb-2 mt-4">
                Our Resume Services Include:
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <strong>Educational Document Attestation:</strong> Verification and authentication of degrees, diplomas, and transcripts.
                </li>
                <li>
                  <strong>Professional Document Attestation:</strong> Certification of work experience letters, licenses, and professional certifications.

                </li>
                <li>
                  <strong>Legalization & Embassy Verification:</strong>Assistance in notarization, legalization, and embassy verification of documents as per country-specific requirements.
                </li>
              </ul>
            </div>


             <div className="min-w-[300px] min-h-[300px] max-w-[300px] max-h-[300px] overflow-hidden rounded-2xl shadow-md flex items-center justify-center">
              <img src="/pics4.jpeg" alt="Sample" className="w-full h-full object-cover rounded-2xl" />
            </div>

          </div>
        </StickySection>

        <StickySection index={4}>
          <div className="bg-BgColor-contactcolor backdrop-blur-xl w-full lg:flex lg:p-10 md:10 p-5  rounded-3xl gap-16 shadow-2xl">
            <div>
              <h4 className="text-xl font-medium mb-2">Visa Processing Assistance</h4>
              <p className="text-gray-700 mb-4">
                Securing a work visa can be a complex and time-consuming process. Our team simplifies the process by providing step-by-step guidance and ensuring compliance with immigration regulations.
              </p>
              <h4 className="text-xl font-medium mb-2 mt-4">
                How We Support Your Job Search:
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <strong>Eligibility Assessment:</strong>We help determine the best visa category based on your qualifications and job offer.
                </li>
                <li>
                  <strong>Document Preparation:</strong> Guidance on gathering and organizing required documents such as passports, employment contracts, and medical reports
                </li>
                <li>
                  <strong>Application Submission Support:</strong>  We assist in completing and submitting visa applications correctly to avoid delays or rejections.
                </li>
              </ul>
            </div>

            <div className="min-w-[300px] min-h-[300px] max-w-[300px] max-h-[300px] overflow-hidden rounded-2xl shadow-md flex items-center justify-center">
              <img src="/pics6.jpeg" alt="Sample" className="w-full h-full object-cover rounded-2xl" />
            </div>

          </div>
        </StickySection>


        <StickySection index={5}>
          <div className="bg-BgColor-contactcolor backdrop-blur-xl w-full lg:flex lg:p-10 md:10 p-5 rounded-3xl gap-16 shadow-2xl">
            <div>
              <h4 className="text-xl font-medium mb-2">Pre departure Guidance</h4>
              <p className="text-gray-700 mb-4">
                Securing a work visa can be a complex and time-consuming process. Our team simplifies the process by providing step-by-step guidance and ensuring compliance with immigration regulations.
              </p>
              <h4 className="text-xl font-medium mb-2 mt-4">
                How We Support Your Job Search:
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <strong>Eligibility Assessment:</strong>We help determine the best visa category based on your qualifications and job offer.
                </li>
                <li>
                  <strong>Document Preparation:</strong> Guidance on gathering and organizing required documents such as passports, employment contracts, and medical reports
                </li>
                <li>
                  <strong>Application Submission Support:</strong>  We assist in completing and submitting visa applications correctly to avoid delays or rejections.
                </li>
              </ul>
            </div>

           <div className="min-w-[300px] min-h-[300px] max-w-[300px] max-h-[300px] overflow-hidden rounded-2xl shadow-md flex items-center justify-center">
              <img src="/pics5.jpeg" alt="Sample" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
        </StickySection>
      </div>
      <Footer />
    </>
  );
}
