import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaSkype,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="  bg-BgColor-NavNewColor text-white py-10 px-6 md:px-20  w-full ">
      <div className="flex flex-wrap justify-between gap-8">
        <div className="max-w-md">
          <h4 className="text-xl font-bold text-white">Al Sayed Staffing Solutions.</h4>
          <p className="mt-10">
            We understand that business can be chaotic. That’s where we come in. We’re focused on adding some much-needed balance to the mix.
          </p>
          <h3 className="mt-10 text-lg font-bold">Company Information</h3>
          <p className="mt-5">
            <strong>Office:</strong> Al Sayed Staffing Solution, 6th Floor, Astral Heights, Banjara Hills Road, 1, Hyderabad, Telangana 500082, India.
          </p>
          <p><strong>Email:</strong> <a href="mailto:recruitment@sayedstaffing.com" className="text-white">recruitment@sayedstaffing.com</a></p>
          <p><strong>Call:</strong> <a href="tel:+917093961892" className="text-white">7093961892</a></p>

          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/share/1FSs7oeRiL/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebookF size={24} />
            </a>

            <a
              href="https://youtube.com/@alsayedstaffingsolutionpvtltd?si=T1dvI_SA0VLksWzL"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              <FaYoutube size={24} />
            </a>

            <a
              href="https://www.instagram.com/YOUR_INSTAGRAM_USERNAME/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram size={24} />
            </a>

            <a
              href="https://www.linkedin.com/company/al-sayed-staffing-solutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaLinkedinIn size={24} />

            </a>
          </div>
        </div>

        <div className="flex gap-10">


          <div>
            <h3 className="text-white font-semibold mb-3">Our Industries</h3>
            <ul className="space-y-2">
              <li><Link href="/Services" className="hover:text-blue-400">Oil & Gas</Link></li>
              <li><Link href="/Services" className="hover:text-blue-400">Construction</Link></li>
              <li><Link href="/Services" className="hover:text-blue-400">Marine & Shipping</Link></li>
              <li><Link href="/Services" className="hover:text-blue-400">Procurement</Link></li>
              <li><Link href="/Services" className="hover:text-blue-400">Logistics</Link></li>
            </ul>
          </div>


          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/About" className="hover:text-blue-400">About Us</Link></li>
              <li><Link href="/Services" className="hover:text-blue-400">Services</Link></li>
              <li><Link href="/Jobseekers" className="hover:text-blue-400">Jobseekers</Link></li>
              <li><Link href="/Employers" className="hover:text-blue-400">Employers</Link></li>
              <li><Link href="/Contactus" className="hover:text-blue-400">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>

    <hr className="my-6 border-gray-700" />
      <div className="flex flex-wrap justify-between text-sm text-white">
        <p>Copyright © 2025 Al Sayed Staffing Solution All Rights Reserved.</p>
        <p>Confidentiality & Privacy</p>
      </div>
    </div>
  );
}
