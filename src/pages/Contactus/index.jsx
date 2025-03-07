import React from "react";
import Navigation from "../Components/Navigations";
import { useState } from "react";
import Footer from "../Components/Footer";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      setFormData({ name: "", tel: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <>
      <Navigation />
      <div className="bg-BgColor-homecolor min-h-screen w-full lg:flex gap-5 mt-20">
        <div className="min-h-screen w-full flex-1 bg-BgColor-contactcolor lg:ml-20 lg:mt-12 rounded-2xl p-11 shadow-2xl">
          <p className="mb-5">Get In Touch!</p>
          <h3 className="text-4xl font-semibold mb-6">
            Let’s Chat, Reach Out to Us for any Query.
          </h3>
          <p className="mb-10">
            Have questions or feedback? We 're here to help. Send us a message,
            and we'll respond within 24 hours
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="First Name"
            />
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="tel"
              name="tel"
              id="tel"
              value={formData.tel}
              onChange={handleChange}
              required
              placeholder="Your Phone"
            ></input>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              name="email"
              id="email1"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
            ></input>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="message"
              id="message1"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="How we can help?"
              style={{ height: "307px" }}
            ></textarea>
            <label htmlFor="remember">I agree to terms and conditions.</label>
            <button
              type="submit"
              className="bg-green-500 text-white hover:bg-green-600 transition-colors duration-300 p-2">
              Submit
            </button>
          </form>
          {status && <p className="mt-3 text-center">{status}</p>}
        </div>
        <div className="min-h-screen w-full flex-1 bg-gray-100 lg:mr-20 lg:mt-12 rounded-2xl shadow-2xl">
          <img
            src="./contact-img.jpg"
            alt="Sample"
            className="w-full rounded-lg shadow-lg object-cover"
          />

          <div className="p-8 space-y-6">
            {/* Email Section */}
            <div>
              <h5 className="font-semibold text-black mb-2">Email</h5>
              <a
                href="mailto:syed.farooq@sayedstaffing.com"
                className="text-gray-900 hover:text-blue-600"
              >
                syed.farooq@sayedstaffing.com
              </a>
            </div>

            {/* Phone Section */}
            <div>
              <h5 className="font-semibold text-black mb-2">Phone</h5>
              <a
                href="tel:+91 7093961892"
                className="text-gray-900 hover:text-blue-600"
              >
                +91 7093961892
              </a>
            </div>

            {/* Address Section */}
            <div>
              <h5 className="font-semibold text-black mb-2">Address</h5>
              <p className="text-gray-900">
                Al Sayed Staffing Solution 6th Floor, Astral Heights Banjara
                Hills Road, 1, Rd Number 1, opposite to Anjani Vishnu Center,
                Mothi Nagar, Dwarakapuri, Punjagutta, Hyderabad, Telangana
                500082, India.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-BgColor-homecolor min-h-screen w-full">
        <div className="p-8">
          <h3 className="text-2xl font-semibold mb-4">Find Us on the Map</h3>
          <div className="relative w-full pt-[56.25%]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.706625559503!2d78.44761537340263!3d17.42586128346788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97f7ccc4ee8d%3A0x326a62f2e2d6c19!2sAl%20Sayed%20Staffing%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1738605996565!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute top-0 left-0 w-full h-full rounded-lg"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contactus;
