// import React from "react";
// import Navigation from "../Components/Navigations";
// import { useState } from "react";
// import Footer from "../Components/Footer";
// import { Checkbox } from "@/components/ui/checkbox"
// import Link from "next/link";


// const Contactus = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     tel: "",
//     email: "",
//     message: "",
//   });

//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");

//     const response = await fetch("/api/contact", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     if (response.ok) {
//       setStatus("Message sent successfully!");
//       setFormData({ name: "", tel: "", email: "", message: "" });
//     } else {
//       setStatus("Failed to send message. Please try again.");
//     }
//   };

//   return (
//     <>
//       <Navigation />
//       {/* ////bg-gradient-to-r from-slate-300 to-slate-500 */}
//       <div className="w-full bg-white">

//         <div className="bg-BgColor-testing min-h-screen w-full lg:max-w-[1600px] mx-auto lg:px-[5%] lg:py-10 p-5 space-y-16 md:p-20">
//           <div className=" flex flex-col gap-5 lg:flex-row lg:gap-10 ">
//             <div className="w-full flex-1 bg-BgColor-contactcolor  rounded-2xl p-11 shadow-2xl">
//               <p className="mb-5 text-xl font-semibold">Get In Touch!</p>
//               <h3 className="text-3xl font-semibold mb-6">
//                 Let’s Chat, Reach Out to Us for any Query.
//               </h3>
//               <p className="mb-10">
//                 Have questions or feedback? We're here to help. Send us a message,
//                 and we'll respond within 24 hours
//               </p>

//               <form className="space-y-4" onSubmit={handleSubmit}>
//                 <input
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   type="text"
//                   name="name"
//                   id="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   placeholder="First Name"
//                 />
//                 <input
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   type="tel"
//                   name="tel"
//                   id="tel"
//                   value={formData.tel}
//                   onChange={handleChange}
//                   required
//                   placeholder="Your Phone"
//                 ></input>
//                 <input
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   type="email"
//                   name="email"
//                   id="email1"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   placeholder="Your Email"
//                 ></input>
//                 <textarea
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   name="message"
//                   id="message1"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   placeholder="How we can help?"
//                   style={{ height: "70px" }}

//                 ></textarea>


//                 <div className="flex items-center gap-2">

//                   <Checkbox />
//                   <label htmlFor="remember text-base">I agree to terms and conditions.</label>
//                 </div>

//                 <button
//                   type="submit"
//                   className="bg-BgColor-buttonclr text-white rounded-lg  hover:bg-green-600 transition-colors duration-300 p-2">
//                   Submit
//                 </button>
//               </form>
//               {status && <p className="mt-3 text-center">{status}</p>}
//             </div>

//             <div className="min-h-screen w-full flex-1  bg-BgColor-contactcolor rounded-2xl shadow-2xl text-base">
//               <img
//                 src="./contact-img22.jpeg"
//                 alt="Sample"
//                 className="w-full rounded-lg shadow-lg object-cover"
//               />

//               <div className="p-8 space-y-6">
//                 {/* Email Section */}
//                 <div>
//                   <h5 className="font-semibold text-black mb-2 text-base">Email</h5>
//                   <a
//                     href="mailto:recruitment@sayedstaffing.com"
//                     className="text-gray-900 hover:text-blue-600 text-base"
//                   >
//                     recruitment@sayedstaffing.com
//                   </a>
//                 </div>

//                 {/* Phone Section */}
//                 <div>
//                   <h5 className="font-semibold text-black mb-2 text-base">Phone</h5>
//                   <a
//                     href="tel:+91 7093961892"
//                     className="text-gray-900 hover:text-blue-600"
//                   >
//                     +91 7093961892
//                   </a>
//                 </div>

//                 {/* Address Section */}
//                 <div>
//                   <h5 className="font-semibold text-black mb-2 text-base">Address</h5>
//                   <p className="text-gray-900 text-base">
//                     Al Sayed Staffing Solution 6th Floor, Astral Heights Banjara
//                     Hills Road, 1, Rd Number 1, opposite to Anjani Vishnu Center,
//                     Mothi Nagar, Dwarakapuri, Punjagutta, Hyderabad, Telangana
//                     500034, India.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="mt-20">
//             <h3 className="text-3xl font-semibold mb-4">Find Us on the Map</h3>
//             <div className="relative w-full pt-[56.25%]">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.706625559503!2d78.44761537340263!3d17.42586128346788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97f7ccc4ee8d%3A0x326a62f2e2d6c19!2sAl%20Sayed%20Staffing%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1738605996565!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 className="absolute top-0 left-0 w-full h-full rounded-lg"
//               ></iframe>
//             </div>
//           </div>
//         </div>

//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Contactus;


"use client";
import React, { useState } from "react";
import Navigation from "../Components/Navigations";
import Footer from "../Components/Footer";
import { Checkbox } from "@/components/ui/checkbox";
import { FiUser, FiMail, FiPhone, FiMessageSquare } from "react-icons/fi";
import { motion } from "framer-motion";

// Animation Variants with Delay
const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
    message: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) return;

    setStatus("Sending...");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      setFormData({ name: "", tel: "", email: "", message: "" });
      setAgreed(false);
    } else {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="w-full bg-BgColor-testing min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center py-16 px-5">
        <motion.h1 variants={fadeInUp(0)} className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
          Contact Us
        </motion.h1>
        <motion.div variants={fadeInUp(0.2)} className="w-24 h-1 bg-BgColor-buttonclr mx-auto rounded-full mb-4"></motion.div>
        <motion.p variants={fadeInUp(0.4)} className="text-gray-700 max-w-2xl mx-auto text-lg md:text-xl">
          Have a question, feedback, or want to collaborate? Send us a message and we’ll respond within 24 hours.
        </motion.p>
      </motion.div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">

        {/* Contact Form */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
          className="bg-BgColor-contactcolor rounded-3xl shadow-xl p-10 hover:shadow-2xl transition-shadow duration-300"
        >
          <motion.h2 variants={fadeInUp(0)} className="text-3xl font-semibold mb-6 text-gray-900">Send a Message</motion.h2>

          <motion.form className="space-y-5" onSubmit={handleSubmit}>
            <motion.div variants={fadeInUp(0.1)} className="relative">
              <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full pl-12 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-BgColor-buttonclr transition-all duration-300 hover:border-BgColor-buttonclr"
              />
            </motion.div>

            <motion.div variants={fadeInUp(0.2)} className="relative">
              <FiPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="tel"
                name="tel"
                value={formData.tel}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full pl-12 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-BgColor-buttonclr transition-all duration-300 hover:border-BgColor-buttonclr"
              />
            </motion.div>

            <motion.div variants={fadeInUp(0.3)} className="relative">
              <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full pl-12 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-BgColor-buttonclr transition-all duration-300 hover:border-BgColor-buttonclr"
              />
            </motion.div>

            <motion.div variants={fadeInUp(0.4)} className="relative">
              <FiMessageSquare className="absolute left-4 top-4 text-gray-400" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                required
                className="w-full pl-12 pt-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-BgColor-buttonclr transition-all duration-300 hover:border-BgColor-buttonclr"
              ></textarea>
            </motion.div>

            <motion.div variants={fadeInUp(0.5)} className="flex items-center gap-3">
              <Checkbox id="terms" checked={agreed} onCheckedChange={setAgreed} />
              <label htmlFor="terms" className="text-gray-700 text-sm">
                I agree to terms and conditions.
              </label>
            </motion.div>

            <motion.button
              variants={fadeInUp(0.6)}
              type="submit"
              disabled={!agreed}
              className={`w-full p-4 rounded-xl text-white font-semibold transition-colors duration-300 ${agreed ? "bg-BgColor-buttonclr hover:bg-green-600" : "bg-gray-400 cursor-not-allowed"
                }`}
            >
              Submit
            </motion.button>

            {status && <motion.p variants={fadeInUp(0.7)} className="mt-3 text-center text-gray-800">{status}</motion.p>}
          </motion.form>
        </motion.div>

        {/* Contact Info + Map */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.3 } } }}
          className="space-y-8"
        >
          <motion.div variants={fadeInUp(0.1)} className="bg-BgColor-contactcolor rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">Contact Info</h3>
            <div className="flex items-center gap-2">
              <FiMail className="text-BgColor-buttonclr" />
              <a href="mailto:recruitment@sayedstaffing.com" className="text-gray-900 hover:text-BgColor-buttonclr">
                recruitment@sayedstaffing.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FiPhone className="text-BgColor-buttonclr" />
              <a href="tel:+917093961892" className="text-gray-900 hover:text-BgColor-buttonclr">
                +91 7093961892
              </a>
            </div>
            <div>
              <p className="text-gray-900 text-sm">
                Al Sayed Staffing Solution, 6th Floor, Astral Heights, Banjara Hills Road 1,
                opposite Anjani Vishnu Center, Mothi Nagar, Dwarakapuri, Punjagutta,
                Hyderabad, Telangana 500034, India.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp(0.3)} className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.706625559503!2d78.44761537340263!3d17.42586128346788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97f7ccc4ee8d%3A0x326a62f2e2d6c19!2sAl%20Sayed%20Staffing%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1738605996565!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Contactus;
