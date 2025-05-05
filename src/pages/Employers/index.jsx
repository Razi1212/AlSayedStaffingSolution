// import React from "react";
// import { motion } from "framer-motion";
// import Navigation from "../Components/Navigations";
// import Footer from "../Components/Footer";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0 },
// };

// const staggerContainer = {
//   visible: {
//     transition: {
//       staggerChildren: 0.6,
//     },
//   },
// };

// const Industries = () => {
//   return (
//     <>
//       <Navigation />
//       <div className="bg-BgColor-testing lg:px-[5%] lg:py-10 p-5">
//         <motion.div
//           variants={staggerContainer}
//           initial="hidden"
//           animate="visible"
//         >
//           <motion.p
//             variants={fadeInUp}
//             className="leading-relaxed mb-6"
//           >
//             At <strong>Al Sayed Staffing</strong>, we take pride in delivering
//             top-tier consulting and staffing solutions across diverse industries.
//             With years of experience and a deep understanding of
//             industry-specific requirements, we bridge the gap between businesses
//             and the right talent to drive success.
//             <br />
//             <br />
//             Our expert team ensures your staffing needs are met with precision
//             and professionalism, enabling seamless operations and enhanced
//             productivity. Whether you're seeking specialized engineers,
//             healthcare professionals, or skilled construction workers, we have
//             the expertise and network to provide the right solutions.
//           </motion.p>

//           <motion.h2
//             variants={fadeInUp}
//             className="text-xl font-semibold mb-4"
//           >
//             We proudly support the following industries:
//           </motion.h2>

//           <motion.div variants={fadeInUp} className="text-black space-y-10">
//             {/* Oil & Gas */}
//             <div className="w-full lg:flex">
//               <div className="flex-[1.5]">
//                 <h6 className="text-lg font-semibold mb-2">Oil & Gas</h6>
//                 <p className="text-sm leading-relaxed mb-4">
//                   The Oil & Gas industry demands highly skilled and experienced
//                   professionals to handle complex projects, ensure safety, and
//                   maintain efficiency in a challenging work environment. At Al
//                   Sayed Staffing, we provide a wide range of specialists to meet
//                   the dynamic needs of this sector.
//                 </p>
//                 <div >
//                   <h3 className="font-semibold mb-2">Key Roles We Provide:</h3>
//                   <ul className="space-y-2 text-sm">
//                     <li>✔️ Brick Mason</li>
//                     <li>✔️ Ceramic Carver</li>
//                     <li>✔️ Mosaic Fitter</li>
//                     <li>✔️ Stone Boring Worker</li>
//                     <li>✔️ Decorator Building Worker</li>
//                     <li>✔️ Cooling Installation Asphalt Worker</li>
//                     <li>✔️ Roof Worker Brick Mason</li>
//                     <li>✔️ Stone Fixer</li>
//                     <li>✔️ Insulation Worker</li>
//                   </ul>
//                 </div>
//               </div>

//               <div className="flex-[1]">
//                 <img
//                   src="./Construction.png"
//                   alt="Sample"
//                   className="w-full h-auto object-contain  hover:rotate-6
//              max-h-[200px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[400px] xl:max-h-[400px]"
//                 />
//               </div>
//             </div>

//             {/* Construction */}
//             <div className="w-full lg:flex">
//               <div className="flex-[1]">
//                 <img
//                   src="./EmployerWorking.png"
//                   alt="Sample"
//                   className="w-full h-auto object-contain 
//                   max-h-[200px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[400px] xl:max-h-[400px]"
//                 />
//               </div>
//               <div className="flex-[1.5]">
//                 <h6 className="text-lg font-semibold mb-2">Construction</h6>
//                 <p className="text-sm leading-relaxed mb-4">
//                   The construction industry is the backbone of infrastructure
//                   development. It requires a workforce with technical skills,
//                   physical strength, and a strong understanding of building codes
//                   and safety regulations. We supply experienced professionals who
//                   can work under pressure.
//                 </p>
//                 <div>
//                   <h3 className="font-semibold mb-2">Key Roles We Provide:</h3>
//                   <ul className="space-y-2 text-sm">
//                     <li>✔️ Brick Mason</li>
//                     <li>✔️ Ceramic Carver</li>
//                     <li>✔️ Mosaic Fitter</li>
//                     <li>✔️ Stone Boring Worker</li>
//                     <li>✔️ Decorator Building Worker</li>
//                     <li>✔️ Cooling Installation Asphalt Worker</li>
//                     <li>✔️ Roof Worker Brick Mason</li>
//                     <li>✔️ Stone Fixer</li>
//                     <li>✔️ Insulation Worker</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             {/* Healthcare */}
//             <div className="w-full lg:flex">
//               <div className="flex-[1.5]">
//                 <h6 className="text-lg font-semibold mb-2">Healthcare</h6>
//                 <p className="text-sm leading-relaxed mb-4">
//                   Healthcare is a critical industry that requires highly trained
//                   and compassionate professionals to provide quality patient care.
//                   We understand the unique demands of the healthcare sector and
//                   provide staffing solutions that cover everything from
//                   specialized doctors to support staff.
//                 </p>
//                 <div>
//                   <h3 className="font-semibold mb-2">Key Roles We Provide:</h3>
//                   <ul className="space-y-2 text-sm">
//                     <li>✔️ Brick Mason</li>
//                     <li>✔️ Ceramic Carver</li>
//                     <li>✔️ Mosaic Fitter</li>
//                     <li>✔️ Stone Boring Worker</li>
//                     <li>✔️ Decorator Building Worker</li>
//                     <li>✔️ Cooling Installation Asphalt Worker</li>
//                     <li>✔️ Roof Worker Brick Mason</li>
//                     <li>✔️ Stone Fixer</li>
//                     <li>✔️ Insulation Worker</li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="flex-[1]">
//                 <img
//                   src="./HealthCare.png"
//                   alt="Sample"
//                   className="w-full h-auto object-contain 
//                   max-h-[200px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[400px] xl:max-h-[400px]"
//                 />
//               </div>
//             </div>

//             {/* Other industries */}
//             <p>Others industries that we support:</p>
//             <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:flex lg:justify-normal lg:gap-20 lg:m-9">
//               {[
//                 {
//                   title: "Banking & Finance",
//                   points: [
//                     "Core Banking Application Implementation",
//                     "Interface Development",
//                     "Test Automation",
//                     "Firmware Development",
//                   ],
//                 },
//                 {
//                   title: "Consumer Electronics",
//                   points: ["Networking", "Embedded", "Test Automation", "Firmware Development"],
//                 },
//                 {
//                   title: "Hi-Tech",
//                   points: ["Product Engineering", "Product Testing (Automated)", "Mobility", "Internet Of Things"],
//                 },
//               ].map((industry, idx) => (
//                 <div key={idx} className="bg-white">
//                   <img
//                     src="./construction.jpg"
//                     alt="Sample"
//                     className="w-full object-cover rounded-b-[100px] rounded-lg"
//                   />
//                   <div className="p-5">
//                     <h6 className="text-lg font-semibold">{industry.title}</h6>
//                     <ul className="text-sm">
//                       {industry.points.map((p, i) => (
//                         <li key={i}>✔️ {p}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:flex lg:justify-normal lg:gap-20 lg:m-9">
//               {[
//                 {
//                   title: "Healthcare & Life Sciences",
//                   points: ["Customer Application", "Interface of things", "Patient Care (Products & Frameworks)"],
//                 },
//                 {
//                   title: "Retail & E-commerce",
//                   points: [
//                     "E-commerce Enablement",
//                     "Product Catalog Systems/Warehouse Systems",
//                     "Enterprise Mobility",
//                   ],
//                 },
//                 {
//                   title: "Automotive and Manufacturing",
//                   points: [
//                     "Customer Development and Maintenance",
//                     "Application Migration (Cloud)",
//                     "Testing & QA/DevOps",
//                   ],
//                 },
//               ].map((industry, idx) => (
//                 <div key={idx} className="bg-white">
//                   <img
//                     src="./construction.jpg"
//                     alt="Sample"
//                     className="w-full object-cover rounded-b-[100px] rounded-lg"
//                   />
//                   <div className="p-5">
//                     <h6 className="text-lg font-semibold">{industry.title}</h6>
//                     <ul className="text-sm">
//                       {industry.points.map((p, i) => (
//                         <li key={i}>✔️ {p}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Industries;


import React from "react";
import { motion } from "framer-motion";
import Navigation from "../Components/Navigations";
import Footer from "../Components/Footer";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const MotionSection = ({ children, className = "" }) => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    className={className}
  >
    {children}
  </motion.div>
);

const Industries = () => {
  return (
    <>
      <Navigation />
      <div className="bg-BgColor-testing lg:px-[5%] lg:py-10 p-5 space-y-16">
        {/* Intro Section */}
        <MotionSection>
          <motion.p variants={fadeInUp} className="leading-relaxed mb-6">
            At <strong>Al Sayed Staffing</strong>, we take pride in delivering
            top-tier consulting and staffing solutions across diverse industries.
            With years of experience and a deep understanding of
            industry-specific requirements, we bridge the gap between businesses
            and the right talent to drive success.

          </motion.p>

          <motion.p variants={fadeInUp} className="leading-relaxed mb-6">
            Our expert team ensures your staffing needs are met with precision
            and professionalism, enabling seamless operations and enhanced
            productivity. Whether you're seeking specialized engineers,
            healthcare professionals, or skilled construction workers, we have
            the expertise and network to provide the right solutions.

          </motion.p>

          <motion.h2 variants={fadeInUp} className="text-xl font-semibold mb-4">
            We proudly support the following industries:
          </motion.h2>
        </MotionSection>

        {/* Oil & Gas */}
        <MotionSection className="w-full lg:flex items-center gap-6">
          <motion.div variants={fadeInUp} className="flex-[1.5]">
            <h6 className="text-lg font-semibold mb-2">Oil & Gas</h6>
            <p className="text-sm leading-relaxed mb-4">
              The Oil & Gas industry demands highly skilled and experienced
              professionals to handle complex projects, ensure safety, and
              maintain efficiency in a challenging work environment. At Al
              Sayed Staffing, we provide a wide range of specialists to meet
              the dynamic needs of this sector.
            </p>
            <h3 className="font-semibold mb-2">Key Roles We Provide:</h3>
            <ul className="space-y-2 text-sm">
              <li>✔️ Brick Mason</li>
              <li>✔️ Ceramic Carver</li>
              <li>✔️ Mosaic Fitter</li>
              <li>✔️ Stone Boring Worker</li>
              <li>✔️ Decorator Building Worker</li>
              <li>✔️ Cooling Installation Asphalt Worker</li>
              <li>✔️ Roof Worker Brick Mason</li>
              <li>✔️ Stone Fixer</li>
              <li>✔️ Insulation Worker</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex-[1]">
            <img
              src="./Construction.png"
              alt="Oil & Gas"
              className="w-full h-auto object-contain max-h-[400px]"
            />
          </motion.div>
        </MotionSection>

        {/* Construction */}
        <MotionSection className="w-full lg:flex items-center gap-6">
          <motion.div variants={fadeInUp} className="flex-[1]">
            <img
              src="./EmployerWorking.png"
              alt="Construction"
              className="w-full h-auto object-contain max-h-[400px]"
            />
          </motion.div>
          <motion.div variants={fadeInUp} className="flex-[1.5]">
            <h6 className="text-lg font-semibold mb-2">Construction</h6>
            <p className="text-sm leading-relaxed mb-4">
              The construction industry is the backbone of infrastructure
              development. It requires a workforce with technical skills,
              physical strength, and a strong understanding of building codes
              and safety regulations. We supply experienced professionals who
              can work under pressure.
            </p>
            <h3 className="font-semibold mb-2">Key Roles We Provide:</h3>
            <ul className="space-y-2 text-sm">
              <li>✔️ Brick Mason</li>
              <li>✔️ Ceramic Carver</li>
              <li>✔️ Mosaic Fitter</li>
              <li>✔️ Stone Boring Worker</li>
              <li>✔️ Decorator Building Worker</li>
              <li>✔️ Cooling Installation Asphalt Worker</li>
              <li>✔️ Roof Worker Brick Mason</li>
              <li>✔️ Stone Fixer</li>
              <li>✔️ Insulation Worker</li>
            </ul>
          </motion.div>
        </MotionSection>

        {/* Healthcare */}
        <MotionSection className="w-full lg:flex items-center gap-6">
          <motion.div variants={fadeInUp} className="flex-[1.5]">
            <h6 className="text-lg font-semibold mb-2">Healthcare</h6>
            <p className="text-sm leading-relaxed mb-4">
              Healthcare is a critical industry that requires highly trained
              and compassionate professionals to provide quality patient care.
              We understand the unique demands of the healthcare sector and
              provide staffing solutions that cover everything from
              specialized doctors to support staff.
            </p>
            <h3 className="font-semibold mb-2">Key Roles We Provide:</h3>
            <ul className="space-y-2 text-sm">
              <li>✔️ Brick Mason</li>
              <li>✔️ Ceramic Carver</li>
              <li>✔️ Mosaic Fitter</li>
              <li>✔️ Stone Boring Worker</li>
              <li>✔️ Decorator Building Worker</li>
              <li>✔️ Cooling Installation Asphalt Worker</li>
              <li>✔️ Roof Worker Brick Mason</li>
              <li>✔️ Stone Fixer</li>
              <li>✔️ Insulation Worker</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex-[1]">
            <img
              src="./HealthCare.png"
              alt="Healthcare"
              className="w-full h-auto object-contain max-h-[400px]"
            />
          </motion.div>
        </MotionSection>

        {/* Other Industries */}
        <MotionSection>
          <motion.p variants={fadeInUp}>Other industries we support:</motion.p>

          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:flex lg:justify-normal lg:gap-20 lg:m-9 ">
            {[
              {
                title: "Banking & Finance",
                img: "./Bank.jpg",
                points: [
                  "Core Banking Application Implementation",
                  "Interface Development",
                  "Test Automation",
                  "Firmware Development",
                ],
              },
              {
                title: "Consumer Electronics",
                img: "./Automation.jpg",
                points: ["Networking", "Embedded", "Test Automation", "Firmware Development"],
              },
              {
                title: "Hi-Tech",
                img: "./ProductEngineering.jpeg",
                points: ["Product Engineering", "Product Testing (Automated)", "Mobility", "Internet Of Things"],
              },
            ].map((industry, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-gradient-to-tr from-[#f0f4f8] via-white to-[#e0e7ff] rounded-lg  shadow-2xl">
                <img
                  src={industry.img}
                  alt={industry.title}
                  // className="w-full object-cover rounded-b-[100px]"
                  className="w-[600px] h-[200px] object-cover rounded-b-[100px]"
                />
                <div className="p-5">
                  <h6 className="text-lg font-semibold">{industry.title}</h6>
                  <ul className="text-sm">
                    {industry.points.map((p, i) => (
                      <li key={i}>✔️ {p}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:flex lg:justify-normal lg:gap-20 lg:m-9">
            {[
              {
                title: "Healthcare & Life Sciences",
                img: "./DoctorPatient.jpeg",
                points: ["Customer Application", "Interface of things", "Patient Care (Products & Frameworks)"],
              },
              {
                title: "Retail & E-commerce",
                img: "./Warehouse.jpeg",
                points: [
                  "E-commerce Enablement",
                  "Product Catalog Systems/Warehouse Systems",
                  "Enterprise Mobility",
                ],
              },
              {
                title: "Automotive and Manufacturing",
                img: "./Software.jpeg",
                points: [
                  "Customer Development and Maintenance",
                  "Application Migration (Cloud)",
                  "Testing & QA/DevOps",
                ],
              },
            ].map((industry, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-gradient-to-tr from-[#f0f4f8] via-white to-[#e0e7ff] rounded-lg  shadow-2xl">
                <img
                  src={industry.img}
                  alt={industry.title}
                  className="w-[600px] h-[200px] object-cover rounded-b-[100px]"
                />
                <div className="p-5">
                  <h6 className="text-lg font-semibold">{industry.title}</h6>
                  <ul className="text-sm">
                    {industry.points.map((p, i) => (
                      <li key={i}>✔️ {p}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </MotionSection>

      </div>
      <Footer />
    </>
  );
};

export default Industries;
