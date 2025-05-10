import React, { useEffect } from "react";
import Navigation from "../Components/Navigations";

const index = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen w-full mt-16 lg:p-20 px-4">
        <section className="max-w-6xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            At Al Sayed Staffing Solutions, we provide comprehensive consulting services tailored to both job seekers and clients. Our expert team ensures a smooth and efficient process for employment and recruitment, making us your trusted partner in career and talent acquisition. We specialize in offering personalized support, expert guidance, and strategic solutions to enhance job placement and recruitment efficiency.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Services We Provide to Job Seekers</h3>

          <h4 className="text-xl font-medium mb-2">1.Job Search Assistance</h4>
          <p className="text-gray-700 mb-4">
            Finding the right job can be challenging, but our expert team is here to guide you every step of the way. We help job seekers identify the best career opportunities that align with their skills, experience, and professional aspirations.
          </p>

          <h4 className="text-xl font-medium mb-2">How We Support Your Job Search:</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Personalized Job Matching:</strong> We analyze your qualifications, industry preferences, and career goals to connect you with the best job opportunities.
            </li>
            <li>
              <strong>Optimized Job Portal Navigation:</strong> We guide you through the most effective job search platforms, helping you create strong profiles and use the right keywords to stand out.
            </li>
            <li>
              <strong>Networking Strategies:</strong> We offer insights on building professional connections, leveraging LinkedIn, and attending industry events to expand your career opportunities.
            </li>
          </ul>
        </section>

        <section className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-bl from-[#ffe4e6] to-[#ccfbf1] my-20 p-5 rounded-3xl lg:flex">
            <div >
              <h4 className="text-xl font-medium mb-2">2.Resume Modification</h4>
              <p className="text-gray-700 mb-4">
                A well-structured resume is key to making a strong impression on potential employers. Our experts refine your resume to highlight your strengths, achievements, and relevant experience
              </p>

              <h4 className="text-xl font-medium mb-2">Our Resume Services Include:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <strong>Content Optimization:</strong> We ensure that your resume effectively showcases your skills, experience, and accomplishments in a professional manner.
                </li>
                <li>
                  <strong>Keyword Integration:</strong> Many employers use applicant tracking systems (ATS) to filter resumes. We optimize your resume with relevant industry keywords to improve visibility.
                </li>
                <li>
                  <strong>Formatting & Design:</strong> A visually appealing and well-organized resume enhances readability and professionalism. We adjust the layout, fonts, and structure to make your resume stand out.
                </li>
              </ul>
            </div>

            <div>
              <img src="./Test.webp" alt="Sample" className="w-full object-cover" />
            </div>

          </div>
        </section>

        <section className="max-w-6xl mx-auto">
          <h4 className="text-xl font-medium mb-2">3.Interview Coaching</h4>
          <p className="text-gray-700 mb-4">
            Confidence and preparation are key to acing job interviews. Our interview coaching sessions equip you with the skills and strategies needed to impress employers.
          </p>

          <h4 className="text-xl font-medium mb-2">How We Support Your Job Search:</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Mock Interviews:</strong>We conduct simulated interviews to help you practice answering common and industry-specific questions.
            </li>
            <li>
              <strong>Personalized Feedback:</strong> Our experts provide constructive feedback on your responses, body language, and overall presentation.
            </li>
            <li>
              <strong>Effective Communication Strategies:</strong> Learn how to articulate your experiences, skills, and strengths confidently and professionally.
            </li>
          </ul>
        </section>

        <section className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-bl from-[#ffe4e6] to-[#ccfbf1] my-20 p-5 rounded-3xl lg:flex">
            <div >
              <h4 className="text-xl font-medium mb-2">4.Documents Attestation</h4>
              <p className="text-gray-700 mb-4">
              Many employers and visa authorities require verified documents for job applications and immigration purposes. We assist in attesting your essential documents to meet regulatory and employer requirements.
              </p>

              <h4 className="text-xl font-medium mb-2">Our Resume Services Include:</h4>
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

            <div>
              <img src="./Test.webp" alt="Sample" className="w-full object-cover" />
            </div>

          </div>
        </section>

        <section className="max-w-6xl mx-auto">
          <h4 className="text-xl font-medium mb-2">5.Visa Processing Assistance</h4>
          <p className="text-gray-700 mb-4">
          Securing a work visa can be a complex and time-consuming process. Our team simplifies the process by providing step-by-step guidance and ensuring compliance with immigration regulations.
          </p>

          <h4 className="text-xl font-medium mb-2">How We Support Your Job Search:</h4>
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
        </section>

        <section className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-bl from-[#ffe4e6] to-[#ccfbf1] my-20 p-5 rounded-3xl lg:flex">
          <div>
              <img src="./Test.webp" alt="Sample" className="w-full object-cover" />
            </div>

            <div >
              <h4 className="text-xl font-medium mb-2">6.Documents Attestation</h4>
              <p className="text-gray-700 mb-4">
              Relocating for work in a new country can be overwhelming. We provide essential pre-departure guidance to help you transition smoothly into your new job and environment.
              </p>

              <h4 className="text-xl font-medium mb-2">Our Resume Services Include:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <strong>Cultural Adaptation:</strong> Insights on workplace culture, social norms, and communication etiquette in your destination country.
                </li>
                <li>
                  <strong>Workplace Expectations:</strong> Understanding employment laws, contract terms, and employer expectations.

                </li>
                <li>
                  <strong>Essential Documentation:</strong>Ensuring you have all necessary documents, including medical certificates, insurance papers, and identification cards.
                </li>
              </ul>
            </div>
          </div>
        </section>
        
      </div>
    </>
  );
};

export default index;
