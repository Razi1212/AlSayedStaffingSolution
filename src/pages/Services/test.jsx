// import React from 'react'

// const test = () => {
//     return (
//         <div className='bg-white lg:px-[8%]  p-5'>


//             <div className="bg-BgColor-homecolor w-full lg:flex p-10">
//                 <div>
//                     <h4 className="text-xl font-medium mb-2">Job Search Assistance</h4>
//                     <p className="text-gray-700 mb-4">
//                         Finding the right job can be challenging, but our expert team is here
//                         to guide you every step of the way. We help job seekers identify the
//                         best career opportunities that align with their skills, experience,
//                         and professional aspirations.
//                     </p>

//                     <h4 className="text-xl font-medium mb-2 mt-4">
//                         How We Support Your Job Search:
//                     </h4>
//                     <ul className="list-disc list-inside text-gray-700 space-y-2">
//                         <li>
//                             <strong>Personalized Job Matching:</strong> We analyze your
//                             qualifications, industry preferences, and career goals to connect
//                             you with the best job opportunities.
//                         </li>
//                         <li>
//                             <strong>Optimized Job Portal Navigation:</strong> We guide you
//                             through the most effective job search platforms, helping you create
//                             strong profiles and use the right keywords to stand out.
//                         </li>
//                         <li>
//                             <strong>Networking Strategies:</strong> We offer insights on
//                             building professional connections, leveraging LinkedIn, and
//                             attending industry events to expand your career opportunities.
//                         </li>
//                     </ul>
//                 </div>
//                 <div>
//                     <img
//                         src="/Laptop.jpeg"
//                         alt="Sample"
//                         className="w-full h-auto object-contain 
//                         "
//                     />
//                 </div>
//             </div>

//             <div className="bg-slate-200 w-full lg:flex p-10">
//                 <div>
//                     <img
//                         src="/Laptop.jpeg"
//                         alt="Sample"
//                         className="w-full h-auto object-contain 
//                         "
//                     />
//                 </div>
//                 <div>
//                     <h4 className="text-xl font-medium mb-2">Resume Modification</h4>
//                     <p className="text-gray-700 mb-4">
//                         A well-structured resume is key to making a strong impression on
//                         potential employers. Our experts refine your resume to highlight your
//                         strengths, achievements, and relevant experience
//                     </p>
//                     <h4 className="text-xl font-medium mb-2 mt-4">
//                         Our Resume Services Include:
//                     </h4>
//                     <ul className="list-disc list-inside text-gray-700 space-y-2">
//                         <li>
//                             <strong>Content Optimization:</strong> We ensure that your resume
//                             effectively showcases your skills, experience, and accomplishments
//                             in a professional manner.
//                         </li>
//                         <li>
//                             <strong>Keyword Integration:</strong> Many employers use applicant
//                             tracking systems (ATS) to filter resumes. We optimize your resume
//                             with relevant industry keywords to improve visibility.
//                         </li>
//                         <li>
//                             <strong>Formatting & Design:</strong> A visually appealing and
//                             well-organized resume enhances readability and professionalism. We
//                             adjust the layout, fonts, and structure to make your resume stand
//                             out.
//                         </li>
//                     </ul>
//                 </div>
//             </div>

//             <div className="bg-green-200 w-full lg:flex p-10">
//                 <div>
//                     <h4 className="text-xl font-medium mb-2">Interview Coaching</h4>
//                     <p className="text-gray-700 mb-4">
//                         Confidence and preparation are key to acing job interviews. Our
//                         interview coaching sessions equip you with the skills and strategies
//                         needed to impress employers.
//                     </p>
//                     <h4 className="text-xl font-medium mb-2 mt-4">
//                         How We Support Your Job Search::
//                     </h4>
//                     <ul className="list-disc list-inside text-gray-700 space-y-2">
//                         <li>
//                             <strong>Mock Interviews:</strong>We conduct simulated interviews to
//                             help you practice answering common and industry-specific questions.
//                         </li>
//                         <li>
//                             <strong>Personalized Feedback:</strong> Our experts provide
//                             constructive feedback on your responses, body language, and overall
//                             presentation.
//                         </li>
//                         <li>
//                             <strong>Effective Communication Strategies:</strong> Learn how to
//                             articulate your experiences, skills, and strengths confidently and
//                             professionally.
//                         </li>
//                     </ul>
//                 </div>


//                 <div>
//                     <img
//                         src="/Laptop.jpeg"
//                         alt="Sample"
//                         className="w-full h-auto object-contain 
//                         "
//                     />
//                 </div>

//             </div>



//         </div>


//     )
// }

// export default test

'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StickySection = ({ children, index }) => {
  const sectionRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <motion.div
      ref={sectionRef}
      className="h-screen sticky top-0 flex items-center justify-center px-4"
      style={{ opacity }}
    >
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-xl p-10">
        {children}
      </div>
    </motion.div>
  );
};

const Test = () => {
  return (
    <div>
      <StickySection index={0}>
        <div className="lg:flex gap-10 items-center">
          <div>
            <h4 className="text-xl font-medium mb-2">Job Search Assistance</h4>
            <p className="text-gray-700 mb-4">
              Finding the right job can be challenging, but our expert team is here
              to guide you every step of the way...
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Personalized Job Matching:</strong> We analyze your qualifications...</li>
              <li><strong>Optimized Job Portal Navigation:</strong> We guide you through...</li>
              <li><strong>Networking Strategies:</strong> We offer insights on...</li>
            </ul>
          </div>
          <img
            src="/Laptop.jpeg"
            alt="Job search assistance"
            className="w-full max-w-[400px] object-contain"
          />
        </div>
      </StickySection>

      <StickySection index={1}>
        <div className="lg:flex gap-10 items-center">
          <img
            src="/Laptop.jpeg"
            alt="Resume help"
            className="w-full max-w-[400px] object-contain"
          />
          <div>
            <h4 className="text-xl font-medium mb-2">Resume Modification</h4>
            <p className="text-gray-700 mb-4">
              A well-structured resume is key to making a strong impression...
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Content Optimization:</strong> Effectively showcase your skills...</li>
              <li><strong>Keyword Integration:</strong> Optimize for ATS systems...</li>
              <li><strong>Formatting & Design:</strong> Improve readability and design...</li>
            </ul>
          </div>
        </div>
      </StickySection>

      <StickySection index={2}>
        <div className="lg:flex gap-10 items-center">
          <div>
            <h4 className="text-xl font-medium mb-2">Interview Coaching</h4>
            <p className="text-gray-700 mb-4">
              Confidence and preparation are key to acing job interviews...
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Mock Interviews:</strong> Simulated real-world questions...</li>
              <li><strong>Personalized Feedback:</strong> Tips to improve your answers...</li>
              <li><strong>Communication:</strong> Speak clearly and confidently...</li>
            </ul>
          </div>
          <img
            src="/Laptop.jpeg"
            alt="Interview coaching"
            className="w-full max-w-[400px] object-contain"
          />
        </div>
      </StickySection>
    </div>
  );
};

export default Test;
