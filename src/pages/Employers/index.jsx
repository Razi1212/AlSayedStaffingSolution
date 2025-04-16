// import React from "react";
// import Navigation from "../Components/Navigations";
// import Footer from "../Components/Footer";
// import SpotlightCard from './SpotlightCard';


// const Industries = () => {

//   return (
//     <>
//       <Navigation />

//       <div className="bg-stone-50">
//         <div className="lg:mx-20 mx-5 py-6">
//           <p className="leading-relaxed mb-6">
//             At <strong>Al Sayed Staffing</strong>, we take pride in delivering top-tier consulting and staffing solutions across diverse industries.
//             With years of experience and a deep understanding of industry-specific requirements, we bridge the gap between businesses and the
//             right talent to drive success.

//             Our expert team ensures your staffing needs are met with precision and professionalism, enabling seamless operations and enhanced productivity.
//             Whether you're seeking specialized engineers, healthcare professionals, or skilled construction workers, we have the expertise and network
//             to provide the right solutions.
//           </p>

//           <h2 className="text-xl font-semibold mb-4">We proudly support the following industries:</h2>

//           <div className="text-black ">
//             {/* Oil & Gas */}
//             <div className="w-full lg:flex">
//               <div>
//                 <h6 className="text-lg font-semibold mb-2">Oil & Gas</h6>
//                 <p className="text-sm leading-relaxed mb-4">
//                   The Oil & Gas industry demands highly skilled and experienced professionals to handle complex projects, ensure safety, and maintain efficiency in a challenging work environment.
//                   At Al Sayed Staffing, we provide a wide range of specialists to meet the dynamic needs of this sector.
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

//               <div>
//                 <img src="./AboutHero2.webp" alt="Sample" className="w-full object-cover" />
//               </div>

//             </div>

//             {/* Construction */}
//             <div className="w-full lg:flex">

//               <div>
//                 <img src="./AboutHero2.webp" alt="Sample" className="w-full object-cover" />
//               </div>

//               <div>
//                 <h6 className="text-lg font-semibold mb-2">Construction</h6>
//                 <p className="text-sm leading-relaxed mb-4">
//                   The construction industry is the backbone of infrastructure development. It requires a workforce with technical skills, physical strength, and a strong understanding of building codes and safety regulations.
//                   We supply experienced professionals who can work under pressure
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
//               <div>
//                 <h6 className="text-lg font-semibold mb-2">Healthcare</h6>
//                 <p className="text-sm leading-relaxed mb-4">
//                   Healthcare is a critical industry that requires highly trained and compassionate professionals to provide quality patient care.
//                   We understand the unique demands of the healthcare sector and provide staffing solutions that cover everything from specialized doctors to support staff.

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

//               <div>
//                 <img src="./AboutHero2.webp" alt="Sample" className="w-full object-cover" />
//               </div>
//             </div>


//             <p>others industries that we support</p>

//             <div className="lg:flex gap-20 m-9">

//               <div className="border-red-500 border-2 p-10 rounded-lg shadow-md w-full sm:w-[300px] hover:bg-red-500 hover:text-white">
//                 <h3 className="text-lg font-semibold mb-4">Hi-Tech</h3>
//                 <ul className="space-y-2 text-sm">
//                   <li>✔️ Product Engineering</li>
//                   <li>✔️ Product Testing (Automated)</li>
//                   <li>✔️ Mobility</li>
//                   <li>✔️ Internet Of Things</li>
//                 </ul>
//               </div>

//               <div className=" border-blue-500 border-2 p-10 rounded-lg shadow-md w-full sm:w-[300px] hover:bg-blue-500 hover:text-white">
//                 <h6 className="text-lg font-semibold mb-4"> Banking & Finance</h6>
//                 <ul className="space-y-2 text-sm">
//                   <li>✔️ Core Banking Application Implementation</li>
//                   <li>✔️ Interface Development</li>
//                   <li>✔️ Products (Govt .Business Framework)</li>
//                 </ul>
//               </div>

//               <div className=" border-yellow-500 border-2 p-10 rounded-lg shadow-md w-full sm:w-[300px] hover:bg-yellow-500 hover:text-white" >
//                 <h6 className="text-lg font-semibold mb-4">Retail & E-commerce</h6>
//                 <ul className="space-y-2 text-sm">
//                   <li>✔️ E-commerce Enablement</li>
//                   <li>✔️ Product Catalog Systems/Warehouse Systems</li>
//                   <li>✔️ Enterprise Mobility</li>
//                   <li>✔️ Cloud Native Development</li>
//                 </ul>
//               </div>


//             </div>


//             <div className="lg:flex gap-20 m-9">

//               <div className=" border-green-500 border-2 p-10 rounded-lg shadow-md w-full sm:w-[300px] hover:bg-bg:green-500 hover:text-white ">
//                 <h6 className="text-lg font-semibold mb-4">Consumer Electronics</h6>
//                 <ul className="space-y-2 text-sm">
//                   <li>✔️ Networking</li>
//                   <li>✔️ Embedded</li>
//                   <li>✔️ Test Automation</li>
//                   <li>✔️ Firmware Development</li>
//                   <li>✔️ Product Engineering</li>
//                 </ul>
//               </div>


//               <div className="border-amber-500 border-2 p-10  rounded-lg shadow-md w-full sm:w-[300px] hover:bg-amber-500 hover:text-white">
//                 <h6 className="text-lg font-semibold mb-4">Consumer Electronics</h6>
//                 <ul className="space-y-2 text-sm">
//                   <li>✔️ Networking</li>
//                   <li>✔️ Embedded</li>
//                   <li>✔️ Test Automation</li>
//                   <li>✔️ Firmware Development</li>
//                   <li>✔️ Product Engineering</li>
//                 </ul>
//               </div>

//               <div className="border-teal-500 border-2 p-10  rounded-lg shadow-md w-full sm:w-[300px] hover:bg-teal-500 hover:text-white">
//                 <h6 className="text-lg font-semibold mb-4">Automotive and Manufacturing</h6>
//                 <ul className="space-y-2 text-sm">
//                   <li>✔️ Customer Development and Maintence</li>
//                   <li>✔️ Application Migration (Cloud)</li>
//                   <li>✔️ Mobility</li>
//                   <li>✔️ Testing & QA/Devpos</li>
//                 </ul>
//               </div>


//               {/* <div>
//                 <h6>HealthCare & Life Sciences</h6>
//                 <ul className="space-y-2 text-sm">
//                   <li>✔️ Customer Application</li>
//                   <li>✔️ Plaform Based Development</li>
//                   <li>✔️ BigDate Analytics</li>
//                   <li>✔️ Patient Care (products & Framework)</li>
//                 </ul>
//               </div> */}
//             </div>

//           </div>

//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Industries;

import React from "react";
import Navigation from "../Components/Navigations";
import Footer from "../Components/Footer";
import SpotlightCard from './SpotlightCard';


const Industries = () => {

  return (
    <>
      <Navigation />

      <div className="bg-stone-200 lg:px-[5%]  lg:py-10 p-5">
        {/* <div className="lg:mx-20 mx-5 py-6"> */}
        <div className="">
          <p className="leading-relaxed mb-6">
            At <strong>Al Sayed Staffing</strong>, we take pride in delivering top-tier consulting and staffing solutions across diverse industries.
            With years of experience and a deep understanding of industry-specific requirements, we bridge the gap between businesses and the
            right talent to drive success.

            Our expert team ensures your staffing needs are met with precision and professionalism, enabling seamless operations and enhanced productivity.
            Whether you're seeking specialized engineers, healthcare professionals, or skilled construction workers, we have the expertise and network
            to provide the right solutions.
          </p>

          <h2 className="text-xl font-semibold mb-4">We proudly support the following industries:</h2>

          <div className="text-black ">
            {/* Oil & Gas */}
            <div className="w-full lg:flex">
              <div>
                <h6 className="text-lg font-semibold mb-2">Oil & Gas</h6>
                <p className="text-sm leading-relaxed mb-4">
                  The Oil & Gas industry demands highly skilled and experienced professionals to handle complex projects, ensure safety, and maintain efficiency in a challenging work environment.
                  At Al Sayed Staffing, we provide a wide range of specialists to meet the dynamic needs of this sector.
                </p>
                <div>
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
                </div>

              </div>

              <div>
                <img src="./AboutHero2.webp" alt="Sample" className="w-full object-cover" />
              </div>

            </div>

            {/* Construction */}
            <div className="w-full lg:flex">

              <div>
                <img src="./AboutHero2.webp" alt="Sample" className="w-full object-cover" />
              </div>

              <div>
                <h6 className="text-lg font-semibold mb-2">Construction</h6>
                <p className="text-sm leading-relaxed mb-4">
                  The construction industry is the backbone of infrastructure development. It requires a workforce with technical skills, physical strength, and a strong understanding of building codes and safety regulations.
                  We supply experienced professionals who can work under pressure
                </p>
                <div>
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
                </div>
              </div>

            </div>

            {/* Healthcare */}
            <div className="w-full lg:flex">
              <div>
                <h6 className="text-lg font-semibold mb-2">Healthcare</h6>
                <p className="text-sm leading-relaxed mb-4">
                  Healthcare is a critical industry that requires highly trained and compassionate professionals to provide quality patient care.
                  We understand the unique demands of the healthcare sector and provide staffing solutions that cover everything from specialized doctors to support staff.

                </p>
                <div>
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
                </div>

              </div>

              <div>
                <img src="./AboutHero2.webp" alt="Sample" className="w-full object-cover" />
              </div>
            </div>


            <p>others industries that we support</p>

            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:flex lg:justify-normal lg:gap-20 lg:m-9">

              <div className="bg-white">
                <div>
                  <img src="./construction.jpg" alt="Sample" className="w-full object-cover rounded-b-[100px] rounded-lg " />
                </div>

                <div className="p-5">
                  <h6 className="text-lg font-semibold">Banking & Finance</h6>
                  <ul className="text-sm">
                    <li>✔️  Core Banking Application Implementation</li>
                    <li>✔️ Interface Development</li>
                    <li>✔️ Test Automation</li>
                    <li>✔️ Firmware Development</li>

                  </ul>
                </div>


              </div>

              <div className="bg-white">
                <div>
                  <img src="./construction.jpg" alt="Sample" className="w-full object-cover rounded-b-[100px] rounded-lg " />
                </div>

                <div className="p-5">
                  <h6 className="text-lg font-semibold">Consumer Electronics</h6>
                  <ul className="text-sm">
                    <li>✔️ Networking</li>
                    <li>✔️ Embedded</li>
                    <li>✔️ Test Automation</li>
                    <li>✔️ Firmware Development</li>

                  </ul>
                </div>


              </div>

              <div className="bg-white">
                <div>
                  <img src="./construction.jpg" alt="Sample" className="w-full object-cover rounded-b-[100px] rounded-lg " />
                </div>

                <div className="p-5">
                  <h6 className="text-lg font-semibold">Hi-Tech</h6>
                  <ul className="text-sm">
                    <li>✔️  Product Engineering</li>
                    <li>✔️  Product Testing (Automated)</li>
                    <li>✔️  Mobility</li>
                    <li>✔️  Internet Of Things</li>

                  </ul>
                </div>


              </div>

            </div>

            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:flex lg:justify-normal lg:gap-20 lg:m-9">

              <div className="bg-white">
                <div>
                  <img src="./construction.jpg" alt="Sample" className="w-full object-cover rounded-b-[100px] rounded-lg " />
                </div>

                <div className="p-5">
                  <h6 className="text-lg font-semibold">Healthcare & Life Sciences</h6>
                  <ul className="text-sm">
                    <li>✔️ Customer Application </li>
                    <li>✔️ Interface of things</li>
                    <li>✔️ Patient Care (Products & Frameworks)</li>
                  </ul>
                </div>


              </div>

              <div className="bg-white">
                <div>
                  <img src="./construction.jpg" alt="Sample" className="w-full object-cover rounded-b-[100px] rounded-lg " />
                </div>

                <div className="p-5">
                  <h6 className="text-lg font-semibold">Retail & E-commerce</h6>
                  <ul className="text-sm">
                    <li>✔️ E-commerce Enablement</li>
                    <li>✔️ Product Catalog Systems/Warehouse Systems</li>
                    <li>✔️ Enterprise Mobility</li>

                  </ul>
                </div>


              </div>

              <div className="bg-white">
                <div>
                  <img src="./construction.jpg" alt="Sample" className="w-full object-cover rounded-b-[100px] rounded-lg " />
                </div>

                <div className="p-5">
                  <h6 className="text-lg font-semibold">Automotive and Manufacturing</h6>
                  <ul className="text-sm">
                    <li>✔️  Customer Development and Maintence</li>
                    <li>✔️ Application Migration (Cloud)</li>
                    <li>✔️  Testing & QA/Devpos</li>

                  </ul>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Industries;