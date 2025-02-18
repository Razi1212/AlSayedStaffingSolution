import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaSkype, FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-gray-600 text-white py-10 px-6 md:px-20 min-h-screen w-full ">
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
          <p><strong>Email:</strong> <a href="mailto:recruitment@sayedstaffing.com" className="text-blue-400">recruitment@sayedstaffing.com</a></p>
          <p><strong>Call:</strong> <a href="tel:+917093961892" className="text-blue-400">7093961892</a></p>
        
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400"><FaSkype /></a>
            <a href="#" className="hover:text-blue-500"><FaTelegram /></a>
          </div>
        </div>

        <div className="flex gap-10">
          
        
          <div>
            <h3 className="text-white font-semibold mb-3">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/career" className="hover:text-blue-400">Oil & Gas</Link></li>
              <li><Link href="/career" className="hover:text-blue-400">Construction</Link></li>
              <li><Link href="/career" className="hover:text-blue-400">Marine & Shipping</Link></li>
              <li><Link href="/services" className="hover:text-blue-400">Procurement</Link></li>
              <li><Link href="/career" className="hover:text-blue-400">Logistics</Link></li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
              <li><Link href="/services" className="hover:text-blue-400">Services</Link></li>
              <li><Link href="/jobseekers" className="hover:text-blue-400">Jobseekers</Link></li>
              <li><Link href="/employers" className="hover:text-blue-400">Employers</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />
      <div className="flex flex-wrap justify-between text-sm text-gray-400">
        <p>Copyright © 2024 Graviton by BravisThemes. All Rights Reserved.</p>
        <p>Developed by <span className="text-blue-400">Shah Razi</span></p>
        <p>Confidentiality & Privacy</p>
      </div>
    </div>
  );
}
