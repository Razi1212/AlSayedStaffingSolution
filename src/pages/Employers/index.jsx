
// import React from "react";
// import { motion } from "framer-motion";
// import Navigation from "../Components/Navigations";
// import Footer from "../Components/Footer";

// // Animation Variants
// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// const staggerContainer = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.3,
//     },
//   },
// };

// const MotionSection = ({ children, className = "" }) => (
//   <motion.div
//     variants={staggerContainer}
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true, amount: 0.3 }}
//     className={className}
//   >
//     {children}
//   </motion.div>
// );

// const Industries = () => {
//   return (
//     <>
//       <Navigation />
//       <div className="w-full bg-white">
//         <div className="bg-BgColor-testing min-h-screen w-full lg:max-w-[1600px] mx-auto lg:px-[5%] lg:py-10 p-5 space-y-16 md:p-20">

//           <MotionSection>
//             <motion.p variants={fadeInUp} className="leading-relaxed mb-6 text-base">
//               At <strong>Al Sayed Staffing</strong>, we take pride in delivering
//               top-tier consulting and staffing solutions across diverse industries.
//               With years of experience and a deep understanding of
//               industry-specific requirements, we bridge the gap between businesses
//               and the right talent to drive success.

//             </motion.p>

//             <motion.p variants={fadeInUp} className="leading-relaxed mb-6 text-base">
//               Our expert team ensures your staffing needs are met with precision
//               and professionalism, enabling seamless operations and enhanced
//               productivity. Whether you're seeking specialized engineers,
//               healthcare professionals, or skilled construction workers, we have
//               the expertise and network to provide the right solutions.

//             </motion.p>

//             <motion.h2 variants={fadeInUp} className="text-xl font-semibold mb-4">
//               We proudly support the following industries:
//             </motion.h2>
//           </MotionSection>

//           {/* Oil & Gas */}
//           <MotionSection className="w-full lg:flex items-center gap-6">
//             <motion.div variants={fadeInUp} className="flex-[1.5]">
//               <h6 className="text-gray-900 text-3xl font-bold mb-2">Oil & Gas</h6>
//               <p className="text-gray-900 text-base leading-relaxed mb-4">
//                 The Oil & Gas industry demands highly skilled and experienced
//                 professionals to handle complex projects, ensure safety, and
//                 maintain efficiency in a challenging work environment. At Al
//                 Sayed Staffing, we provide a wide range of specialists to meet
//                 the dynamic needs of this sector.
//               </p>
//               <h3 className="font-semibold mb-2">Key Roles We Provide:</h3>
//               <ul className="space-y-2 text-gray-900 text-base">
//                 <li>✔️ Scheduler/ Planner</li>
//                 <li>✔️ Project Engineer</li>
//                 <li>✔️ Instrument Technician</li>
//                 <li>✔️ Mechanical Technician </li>
//                 <li>✔️ Refinery Operator</li>
//                 <li>✔️ Electrical Technician</li>
//                 <li>✔️ Lead Instrument Engineer</li>
//                 <li>✔️ Operation Engineer</li>
//                 <li>✔️ Senior Technician</li>
//                 <li>✔️ Process Engineer</li>
//                 <li>✔️ Safety Engineer</li>
//                 <li>✔️ Drilling Supervisor</li>
//                 <li>✔️ Petroleum Engineer</li>
//               </ul>
//             </motion.div>

//             <motion.div variants={fadeInUp} className="flex-[1]">
//               <img
//                 src="./Construction.png"
//                 alt="Oil & Gas"
//                 // className="w-full h-auto object-contain max-h-[400px]"
//                 className="w-full h-auto object-contain 
//              max-h-[200px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[400px] xl:max-h-[450px]"
//               />
//             </motion.div>
//           </MotionSection>

//           {/* Construction */}
//           <MotionSection className="w-full lg:flex items-center gap-6">
//             <motion.div variants={fadeInUp} className="flex-[1]">
//               <img
//                 src="./Construction.png"
//                 alt="Construction"
//                 // className="w-full h-auto object-contain max-h-[400px]"
//                 className="w-full h-auto object-contain 
//              max-h-[200px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[400px] xl:max-h-[450px]"
//               />
//             </motion.div>
//             <motion.div variants={fadeInUp} className="flex-[1.5]">
//               <h6 className="text-gray-900 text-3xl font-bold mb-2">Construction</h6>
//               <p className="text-gray-900 text-base leading-relaxed mb-4">
//                 The construction industry is the backbone of infrastructure
//                 development. It requires a workforce with technical skills,
//                 physical strength, and a strong understanding of building codes
//                 and safety regulations. We supply experienced professionals who
//                 can work under pressure.
//               </p>
//               <h3 className="font-semibold mb-2">Key Roles We Provide:</h3>
//               <ul className="space-y-2 text-gray-900 text-base">
//                 <li>✔️ Brick Mason</li>
//                 <li>✔️ Ceramic Carver</li>
//                 <li>✔️ Mosaic Fitter</li>
//                 <li>✔️ Stone Boring Worker</li>
//                 <li>✔️ Decorator Building Worker</li>
//                 <li>✔️ Cooling Installation Asphalt Worker</li>
//                 <li>✔️ Roof Worker Brick Mason</li>
//                 <li>✔️ Stone Fixer</li>
//                 <li>✔️ Insulation Worker</li>
//               </ul>
//             </motion.div>
//           </MotionSection>

//           {/* Healthcare */}
//           <MotionSection className="w-full lg:flex items-center gap-6">
//             <motion.div variants={fadeInUp} className="flex-[1.5]">
//               <h6 className="text-gray-900 text-3xl font-bold mb-2">Healthcare</h6>
//               <p className="text-base leading-relaxed mb-4">
//                 Healthcare is a critical industry that requires highly trained
//                 and compassionate professionals to provide quality patient care.
//                 We understand the unique demands of the healthcare sector and
//                 provide staffing solutions that cover everything from
//                 specialized doctors to support staff.
//               </p>
//               <h3 className="font-semibold mb-2">Key Roles We Provide:</h3>
//               <ul className="space-y-2 text-base">
//                 <li>✔️ Consultant - Doctors</li>
//                 <li>✔️ Specialist – Doctors</li>
//                 <li>✔️ Technician AHS</li>
//                 <li>✔️ Radiographer</li>
//                 <li>✔️ Sonographer</li>
//                 <li>✔️ Nurse (B.Sc Holder) Nurse</li>
//                 <li>✔️ Nurse(Registered Nurse)</li>
//                 <li>✔️ Female/ Male(RegisteredNurse)</li>
//                 <li>✔️ Mid Wife</li>
//               </ul>
//             </motion.div>

//             <motion.div variants={fadeInUp} className="flex-[1]">
//               <img
//                 src="./HealthCare.png"
//                 alt="Healthcare"
//                 // className="w-full h-auto object-contain max-h-[400px]"
//                 className="w-full h-auto object-contain 
//              max-h-[200px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[400px] xl:max-h-[450px]"
//               />
//             </motion.div>
//           </MotionSection>

//           {/* Other Industries */}
//           <MotionSection>
//             <motion.p variants={fadeInUp} className="font-semibold">Other industries we support:</motion.p>

//             <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:flex lg:justify-normal lg:gap-20 lg:m-9 text-base">
//               {[
                

//                 {
//                   title: "Manufacturing",
//                   img: "./Software.jpeg",
//                   points: [
//                     "Automotive/Car Mechanic",
//                     "Automobile Technician",
//                     "Auto Electrician",
//                     "Automobile Sales Executive/Consultant"
//                   ],
//                 },
//                 {
//                   title: "Automobile ",
//                   img: "./Automation.jpg",
//                   points: ["Production Engineer/Manufacturing Engineer", "Quality Assurance/Quality Control", "Process Engineer", "Maintenance Engineer"],
//                 },
//                 {
//                   title: "Hi-Tech",
//                   img: "./ProductEngineering.jpeg",
//                   points: ["Product Engineering", "Product Testing (Automated)", "Mobility", "Internet Of Things"],
//                 },
//               ].map((industry, idx) => (
//                 <motion.div key={idx} variants={fadeInUp} className="bg-gradient-to-tr from-[#f0f4f8] via-white to-[#e0e7ff] rounded-lg  shadow-2xl">
//                   <img
//                     src={industry.img}
//                     alt={industry.title}
//                     // className="w-full object-cover rounded-b-[100px]"
//                     className="w-[600px] h-[200px] object-cover rounded-b-[100px]"
//                   />
//                   <div className="p-5">
//                     <h6 className="text-lg font-semibold">{industry.title}</h6>
//                     <ul className="text-sm">
//                       {industry.points.map((p, i) => (
//                         <li key={i}>✔️ {p}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:flex lg:justify-normal lg:gap-20 lg:m-9 text-base">
//               {[

//                 {
//                   title: "Banking & Finance",
//                   img: "./Bank.jpg",
//                   points: [
//                     "Core Banking Application Implementation",
//                     "Interface Development",
//                     "Test Automation",
//                     "Firmware Development",
//                   ],
//                 },
//                 {
//                   title: "Healthcare & Life Sciences",
//                   img: "./DoctorPatient.jpeg",
//                   points: ["Customer Application", "Interface of things", "Patient Care (Products & Frameworks)"],
//                 },
//                 {
//                   title: "Retail & E-commerce",
//                   img: "./Warehouse.jpeg",
//                   points: [
//                     "E-commerce Enablement",
//                     "Product Catalog Systems/Warehouse Systems",
//                     "Enterprise Mobility",
//                   ],
//                 }
//               ].map((industry, idx) => (
//                 <motion.div key={idx} variants={fadeInUp} className="bg-gradient-to-tr from-[#f0f4f8] via-white to-[#e0e7ff] rounded-lg  shadow-2xl ">
//                   <img
//                     src={industry.img}
//                     alt={industry.title}
//                     className="w-[600px] h-[200px] object-cover rounded-b-[100px]"
//                   />
//                   <div className="p-5">
//                     <h6 className="text-lg font-semibold">{industry.title}</h6>
//                     <ul className="text-sm">
//                       {industry.points.map((p, i) => (
//                         <li key={i}>✔️ {p}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </MotionSection>

//         </div>
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
      staggerChildren: 0.2,
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
      <div className="w-full bg-white">
        <div className="bg-BgColor-testing min-h-screen w-full lg:max-w-[1600px] mx-auto lg:px-[5%] lg:py-10 p-5 space-y-16 md:p-20">
          
          {/* Intro Section */}
          <MotionSection>
            <motion.p variants={fadeInUp} className="leading-relaxed mb-6 text-base">
              At <strong>Al Sayed Staffing</strong>, we take pride in delivering
              top-tier consulting and staffing solutions across diverse industries.
              With years of experience and a deep understanding of
              industry-specific requirements, we bridge the gap between businesses
              and the right talent to drive success.
            </motion.p>

            <motion.p variants={fadeInUp} className="leading-relaxed mb-6 text-base">
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
              <h6 className="text-gray-900 text-3xl font-bold mb-2">Oil & Gas</h6>
              <p className="text-gray-900 text-base leading-relaxed mb-4">
                The Oil & Gas industry demands highly skilled and experienced
                professionals to handle complex projects, ensure safety, and
                maintain efficiency in a challenging work environment. At Al
                Sayed Staffing, we provide a wide range of specialists to meet
                the dynamic needs of this sector.
              </p>
              <h3 className="font-semibold mb-2">Key Roles We Provide:</h3>
              <ul className="space-y-2 text-gray-900 text-base">
                <li>✔️ Scheduler/ Planner</li>
                <li>✔️ Project Engineer</li>
                <li>✔️ Instrument Technician</li>
                <li>✔️ Mechanical Technician </li>
                <li>✔️ Refinery Operator</li>
                <li>✔️ Electrical Technician</li>
                <li>✔️ Lead Instrument Engineer</li>
                <li>✔️ Operation Engineer</li>
                <li>✔️ Senior Technician</li>
                <li>✔️ Process Engineer</li>
                <li>✔️ Safety Engineer</li>
                <li>✔️ Drilling Supervisor</li>
                <li>✔️ Petroleum Engineer</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex-[1]">
              <img
                src="./Construction.png"
                alt="Oil & Gas"
                className="w-full h-auto object-contain max-h-[200px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[400px] xl:max-h-[450px]"
              />
            </motion.div>
          </MotionSection>

          {/* Construction */}
          <MotionSection className="w-full lg:flex items-center gap-6">
            <motion.div variants={fadeInUp} className="flex-[1]">
              <img
                src="./Construction.png"
                alt="Construction"
                className="w-full h-auto object-contain max-h-[200px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[400px] xl:max-h-[450px]"
              />
            </motion.div>
            <motion.div variants={fadeInUp} className="flex-[1.5]">
              <h6 className="text-gray-900 text-3xl font-bold mb-2">Construction</h6>
              <p className="text-gray-900 text-base leading-relaxed mb-4">
                The construction industry is the backbone of infrastructure
                development. It requires a workforce with technical skills,
                physical strength, and a strong understanding of building codes
                and safety regulations. We supply experienced professionals who
                can work under pressure.
              </p>
              <h3 className="font-semibold mb-2">Key Roles We Provide:</h3>
              <ul className="space-y-2 text-gray-900 text-base">
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
              <h6 className="text-gray-900 text-3xl font-bold mb-2">Healthcare</h6>
              <p className="text-base leading-relaxed mb-4">
                Healthcare is a critical industry that requires highly trained
                and compassionate professionals to provide quality patient care.
                We understand the unique demands of the healthcare sector and
                provide staffing solutions that cover everything from
                specialized doctors to support staff.
              </p>
              <h3 className="font-semibold mb-2">Key Roles We Provide:</h3>
              <ul className="space-y-2 text-base">
                <li>✔️ Consultant - Doctors</li>
                <li>✔️ Specialist – Doctors</li>
                <li>✔️ Technician AHS</li>
                <li>✔️ Radiographer</li>
                <li>✔️ Sonographer</li>
                <li>✔️ Nurse (B.Sc Holder) Nurse</li>
                <li>✔️ Nurse(Registered Nurse)</li>
                <li>✔️ Female/ Male(RegisteredNurse)</li>
                <li>✔️ Mid Wife</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex-[1]">
              <img
                src="./HealthCare.png"
                alt="Healthcare"
                className="w-full h-auto object-contain max-h-[200px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[400px] xl:max-h-[450px]"
              />
            </motion.div>
          </MotionSection>

          {/* Redesigned Industry Cards */}
          <MotionSection>
            <motion.p variants={fadeInUp} className="font-semibold mb-6 text-lg">
              Other industries we support:
            </motion.p>

            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Manufacturing",
                  img: "./Software.jpeg",
                  points: [
                    "Automotive/Car Mechanic",
                    "Automobile Technician",
                    "Auto Electrician",
                    "Automobile Sales Executive/Consultant",
                  ],
                },
                {
                  title: "Automobile",
                  img: "./Automation.jpg",
                  points: [
                    "Production Engineer/Manufacturing Engineer",
                    "Quality Assurance/Quality Control",
                    "Process Engineer",
                    "Maintenance Engineer",
                  ],
                },
                {
                  title: "Hi-Tech",
                  img: "./ProductEngineering.jpeg",
                  points: [
                    "Product Engineering",
                    "Product Testing (Automated)",
                    "Mobility",
                    "Internet Of Things",
                  ],
                },
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
                  title: "Healthcare & Life Sciences",
                  img: "./DoctorPatient.jpeg",
                  points: [
                    "Customer Application",
                    "Interface of things",
                    "Patient Care (Products & Frameworks)",
                  ],
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
              ].map((industry, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(0,0,0,0.2)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer"
                >
                  <img
                    src={industry.img}
                    alt={industry.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h6 className="text-xl font-semibold mb-3">{industry.title}</h6>
                    <ul className="text-gray-700 text-sm space-y-1">
                      {industry.points.map((p, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-green-500">✔️</span> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </MotionSection>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Industries;
