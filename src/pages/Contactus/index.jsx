// "use client";
// import React, { useState } from "react";
// import Navigation from "../Components/Navigations";
// import Footer from "../Components/Footer";
// import { Checkbox } from "@/components/ui/checkbox";
// import { FiUser, FiMail, FiPhone, FiMessageSquare } from "react-icons/fi";
// import { motion } from "framer-motion";

// // Animation Variants with Delay
// const fadeInUp = (delay = 0) => ({
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
// });

// const Contactus = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     tel: "",
//     email: "",
//     message: "",
//   });
//   const [agreed, setAgreed] = useState(false);
//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!agreed) return;

//     setStatus("Sending...");

//     const response = await fetch("/api/contact", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     if (response.ok) {
//       setStatus("Message sent successfully!");
//       setFormData({ name: "", tel: "", email: "", message: "" });
//       setAgreed(false);
//     } else {
//       setStatus("Failed to send message. Please try again.");
//     }
//   };

//   return (
//     <div className="w-full bg-BgColor-testing min-h-screen">
//       <Navigation />

//       {/* Hero Section */}
//       <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center py-16 px-5">
//         <motion.h1 variants={fadeInUp(0)} className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
//           Contact Us
//         </motion.h1>
//         <motion.div variants={fadeInUp(0.2)} className="w-24 h-1 bg-BgColor-buttonclr mx-auto rounded-full mb-4"></motion.div>
//         <motion.p variants={fadeInUp(0.4)} className="text-gray-700 max-w-2xl mx-auto text-lg md:text-xl">
//           Have a question, feedback, or want to collaborate? Send us a message and we’ll respond within 24 hours.
//         </motion.p>
//       </motion.div>

//       {/* Main Section */}
//       <div className="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">

//         {/* Contact Form */}
//         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
//           className="bg-BgColor-contactcolor rounded-3xl shadow-xl p-10 hover:shadow-2xl transition-shadow duration-300"
//         >
//           <motion.h2 variants={fadeInUp(0)} className="text-3xl font-semibold mb-6 text-gray-900">Send a Message</motion.h2>

//           <motion.form className="space-y-5" onSubmit={handleSubmit}>
//             <motion.div variants={fadeInUp(0.1)} className="relative">
//               <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Full Name"
//                 required
//                 className="w-full pl-12 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-BgColor-buttonclr transition-all duration-300 hover:border-BgColor-buttonclr"
//               />
//             </motion.div>

//             <motion.div variants={fadeInUp(0.2)} className="relative">
//               <FiPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <input
//                 type="tel"
//                 name="tel"
//                 value={formData.tel}
//                 onChange={handleChange}
//                 placeholder="Phone Number"
//                 required
//                 className="w-full pl-12 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-BgColor-buttonclr transition-all duration-300 hover:border-BgColor-buttonclr"
//               />
//             </motion.div>

//             <motion.div variants={fadeInUp(0.3)} className="relative">
//               <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Email Address"
//                 required
//                 className="w-full pl-12 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-BgColor-buttonclr transition-all duration-300 hover:border-BgColor-buttonclr"
//               />
//             </motion.div>

//             <motion.div variants={fadeInUp(0.4)} className="relative">
//               <FiMessageSquare className="absolute left-4 top-4 text-gray-400" />
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Your Message"
//                 rows={5}
//                 required
//                 className="w-full pl-12 pt-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-BgColor-buttonclr transition-all duration-300 hover:border-BgColor-buttonclr"
//               ></textarea>
//             </motion.div>

//             <motion.div variants={fadeInUp(0.5)} className="flex items-center gap-3">
//               <Checkbox id="terms" checked={agreed} onCheckedChange={setAgreed} />
//               <label htmlFor="terms" className="text-gray-700 text-sm">
//                 I agree to terms and conditions.
//               </label>
//             </motion.div>

//             <motion.button
//               variants={fadeInUp(0.6)}
//               type="submit"
//               disabled={!agreed}
//               className={`w-full p-4 rounded-xl text-white font-semibold transition-colors duration-300 ${agreed ? "bg-BgColor-buttonclr hover:bg-green-600" : "bg-gray-400 cursor-not-allowed"
//                 }`}
//             >
//               Submit
//             </motion.button>

//             {status && <motion.p variants={fadeInUp(0.7)} className="mt-3 text-center text-gray-800">{status}</motion.p>}
//           </motion.form>
//         </motion.div>

//         {/* Contact Info + Map */}
//         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.3 } } }}
//           className="space-y-8"
//         >
//           <motion.div variants={fadeInUp(0.1)} className="bg-BgColor-contactcolor rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 space-y-4">
//             <h3 className="text-2xl font-semibold text-gray-900">Contact Info</h3>
//             <div className="flex items-center gap-2">
//               <FiMail className="text-BgColor-buttonclr" />
//               <a href="mailto:recruitment@sayedstaffing.com" className="text-gray-900 hover:text-BgColor-buttonclr">
//                 recruitment@sayedstaffing.com
//               </a>
//             </div>
//             <div className="flex items-center gap-2">
//               <FiPhone className="text-BgColor-buttonclr" />
//               <a href="tel:+917093961892" className="text-gray-900 hover:text-BgColor-buttonclr">
//                 +91 7093961892
//               </a>
//             </div>
//             <div>
//               <p className="text-gray-900 text-sm">
//                 Al Sayed Staffing Solution, 6th Floor, Astral Heights, Banjara Hills Road 1,
//                 opposite Anjani Vishnu Center, Mothi Nagar, Dwarakapuri, Punjagutta,
//                 Hyderabad, Telangana 500034, India.
//               </p>
//             </div>
//           </motion.div>

//           <motion.div variants={fadeInUp(0.3)} className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.706625559503!2d78.44761537340263!3d17.42586128346788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97f7ccc4ee8d%3A0x326a62f2e2d6c19!2sAl%20Sayed%20Staffing%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1738605996565!5m2!1sen!2sin"
//               width="100%"
//               height="400"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </motion.div>
//         </motion.div>
//       </div>

//       <Footer />
//     </div>
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

    if (!agreed) {
      setStatus("Please agree to the terms and conditions.");
      return;
    }

    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Thank you! We will contact you soon.");
        setFormData({ name: "", tel: "", email: "", message: "" });
        setAgreed(false);

        // auto-hide message after 5 seconds
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Network error. Please try again later.");
    }
  };

  return (
    <div className="w-full bg-BgColor-testing min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center py-16 px-5"
      >
        <motion.h1
          variants={fadeInUp(0)}
          className="text-3xl md:text-5xl font-bold text-gray-900 mb-3"
        >
          Contact Us
        </motion.h1>
        <motion.div
          variants={fadeInUp(0.2)}
          className="w-24 h-1 bg-BgColor-buttonclr mx-auto rounded-full mb-4"
        ></motion.div>
        <motion.p
          variants={fadeInUp(0.4)}
          className="text-gray-700 max-w-2xl mx-auto text-lg md:text-xl"
        >
          Have a question, feedback, or want to collaborate? Send us a message
          and we’ll respond within 24 hours.
        </motion.p>
      </motion.div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">

        {/* Contact Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
          className="bg-BgColor-contactcolor rounded-3xl shadow-xl p-10 hover:shadow-2xl transition-shadow duration-300"
        >
          <motion.h2
            variants={fadeInUp(0)}
            className="text-3xl font-semibold mb-6 text-gray-900"
          >
            Send a Message
          </motion.h2>

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
              className={`w-full p-4 rounded-xl text-white font-semibold transition-colors duration-300 ${
                agreed ? "bg-BgColor-buttonclr hover:bg-green-600" : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Submit
            </motion.button>

            {/* ✅ Status Message */}
            {status && (
              <motion.div
                variants={fadeInUp(0.7)}
                initial="hidden"
                animate="visible"
                className="mt-4 text-center text-green-600 font-medium text-lg"
              >
                {status}
              </motion.div>
            )}
          </motion.form>
        </motion.div>

        {/* Contact Info + Map */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.3 } } }}
          className="space-y-8"
        >
          <motion.div
            variants={fadeInUp(0.1)}
            className="bg-BgColor-contactcolor rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 space-y-4"
          >
            <h3 className="text-2xl font-semibold text-gray-900">Contact Info</h3>
            <div className="flex items-center gap-2">
              <FiMail className="text-BgColor-buttonclr" />
              <a
                href="mailto:recruitment@sayedstaffing.com"
                className="text-gray-900 hover:text-BgColor-buttonclr"
              >
                recruitment@sayedstaffing.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FiPhone className="text-BgColor-buttonclr" />
              <a
                href="tel:+917093961892"
                className="text-gray-900 hover:text-BgColor-buttonclr"
              >
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

          <motion.div
            variants={fadeInUp(0.3)}
            className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
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
