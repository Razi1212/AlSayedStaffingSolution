import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "../Components/Navigations";
import Footer from "../Components/Footer";

export default function SidebarTabs() {
  const [activeTab, setActiveTab] = useState("JobSearchAssistance");

  const tabs = [
    { id: "JobSearchAssistance", label: "Job Search Assistance" },
    { id: "ResumeModification", label: "Resume Modification" },
    { id: "InterviewCoaching", label: "Interview Coaching" },
    { id: "DocumentsAttestation", label: "Documents Attestation" },
    { id: "VisaProcessingAssistance", label: "Visa Processing Assistance" },
    { id: "PredepartureGuidance", label: "Pre-departure Guidance" },
  ];

  const content = {
    JobSearchAssistance: (
      <div className="min-h-screen w-full">
        <h4 className="text-xl font-medium mb-2">Job Search Assistance</h4>
        <p className="text-gray-700 mb-4">
          Finding the right job can be challenging, but our expert team is here
          to guide you every step of the way. We help job seekers identify the
          best career opportunities that align with their skills, experience,
          and professional aspirations.
        </p>
        <img
          src="/JobSeekers.jpg"
          alt="Sample"
          className="w-full object-cover rounded-lg"
        />
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
    ),

    ResumeModification: (
      <div className="min-h-screen w-full">
        <h4 className="text-xl font-medium mb-2">Resume Modification</h4>
        <p className="text-gray-700 mb-4">
          A well-structured resume is key to making a strong impression on
          potential employers. Our experts refine your resume to highlight your
          strengths, achievements, and relevant experience
        </p>
        <img
          src="/JobSeekers.jpg"
          alt="Sample"
          className="w-full object-cover rounded-lg"
        />
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
    ),

    InterviewCoaching: (
      <div className="min-h-screen w-full">
        <h4 className="text-xl font-medium mb-2">Interview Coaching</h4>
        <p className="text-gray-700 mb-4">
          Confidence and preparation are key to acing job interviews. Our
          interview coaching sessions equip you with the skills and strategies
          needed to impress employers.
        </p>
        <img
          src="/JobSeekers.jpg"
          alt="Sample"
          className="w-full object-cover rounded-lg"
        />
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
    ),

    DocumentsAttestation: (
        <div className="min-h-screen w-full">
          <h4 className="text-xl font-medium mb-2">Documents Attestation</h4>
          <p className="text-gray-700 mb-4">
          Many employers and visa authorities require verified documents for job applications and immigration purposes. We assist in attesting your essential documents to meet regulatory and employer requirements.
          </p>
          <img
            src="/JobSeekers.jpg"
            alt="Sample"
            className="w-full object-cover rounded-lg"
          />
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
      ),

    VisaProcessingAssistance: (
        <div className="min-h-screen w-full">
          <h4 className="text-xl font-medium mb-2">Visa Processing Assistance</h4>
          <p className="text-gray-700 mb-4">
          Securing a work visa can be a complex and time-consuming process. Our team simplifies the process by providing step-by-step guidance and ensuring compliance with immigration regulations.
          </p>
          <img
            src="/JobSeekers.jpg"
            alt="Sample"
            className="w-full object-cover rounded-lg"
          />
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
        </div>
    ),

    PredepartureGuidance: (
        <div className="min-h-screen w-full">
          <h4 className="text-xl font-medium mb-2">Pre departure Guidance</h4>
          <p className="text-gray-700 mb-4">
          Securing a work visa can be a complex and time-consuming process. Our team simplifies the process by providing step-by-step guidance and ensuring compliance with immigration regulations.
          </p>
          <img
            src="/JobSeekers.jpg"
            alt="Sample"
            className="w-full object-cover rounded-lg"
          />
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
        </div>
    ),
  };

  return (
    <>
      <Navigation />
      <div className="bg-BgColor-Services">
        <h3 className="text-2xl font-semibold p-9">
          Services We Provide to Employeers
        </h3>
        <div className="lg:flex min-h-screen px-20">
          <div className="w-1/4 min-w-[250px] p-8 border-r shadow-md flex flex-col">
            <div className="space-y-10">
              {tabs.map((tab) => (
          <Button
          key={tab.id}
          className={`w-full justify-start px-6 py-6 rounded-lg font-semibold transition-all duration-300 shadow-sm
           `}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </Button>
        
              ))}
            </div>
          </div>

          <div className="w-3/4 p-6 overflow-y-auto">{content[activeTab]}</div>
        </div>
      </div>

      <Footer />
    </>
  );
}
