import React from "react";
import Navigation from "../Components/Navigations";
import Footer from "../Components/Footer";
import SpotlightCard from './SpotlightCard';


const Industries = () => {

  return (
    <>
      <Navigation />

      <div className="bg-stone-50">
        <div className="lg:mx-20 mx-5 py-6">
          <p className="leading-relaxed mb-6">
            At <strong>Al Sayed Staffing</strong>, we take pride in delivering top-tier consulting and staffing solutions across diverse industries.
            With years of experience and a deep understanding of industry-specific requirements, we bridge the gap between businesses and the
            right talent to drive success.

            Our expert team ensures your staffing needs are met with precision and professionalism, enabling seamless operations and enhanced productivity.
            Whether you're seeking specialized engineers, healthcare professionals, or skilled construction workers, we have the expertise and network
            to provide the right solutions.
          </p>

          <h2 className="text-xl font-semibold mb-4">We proudly support the following industries:</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            {/* Oil & Gas */}
            <div className="w-full">
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
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
              </SpotlightCard>
            </div>

            {/* Construction */}
            <div className="w-full">
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
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
              </SpotlightCard>
            </div>

            {/* Healthcare */}
            <div className="w-full">
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
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
              </SpotlightCard>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Industries;
