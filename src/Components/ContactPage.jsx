import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.phone && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", phone: "", message: "" });
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-red-500 text-white py-20">
        <div id="contact-header" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Contact us
          </h1>
          <div className="flex items-center justify-center gap-2 text-red-50">
            <span>Home</span>
            <span>•</span>
            <span>Contact us</span>
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* <div className="grid md:grid-cols-3 gap-8 mb-16"> */}
          {/* Karnal Office */}
          {/* <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Karnal Office:</h3>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-red-600 mt-1 flex-shrink-0" />
                <p className="text-sm">SCO 385, First Floor Mugal Canal, Near Dr. Kuldeep, Karnal</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-red-600 flex-shrink-0" />
                <div className="text-sm">
                  <p>+91 0184-4024008, 4004981</p>
                  <p className="font-semibold text-red-600">+91 96756-96756</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-red-600 flex-shrink-0" />
                <p className="text-sm">charlie@charliegroup.in</p>
              </div>
            </div>
          </div> */}

          {/* Panipat Office */}
          {/* <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Panipat Office:</h3>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-red-600 mt-1 flex-shrink-0" />
                <p className="text-sm">76-R Model Town, Opposite Sanatan Dharam Mandir, Panipat</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-red-600 flex-shrink-0" />
                <div className="text-sm">
                  <p>+91 0180-3594280, 4084347</p>
                  <p className="font-semibold text-red-600">+91 96756-96756</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-red-600 flex-shrink-0" />
                <p className="text-sm">pnp@charliegroup.in</p>
              </div>
            </div>
          </div> */}

          {/* Singapore Office */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Singapore Office:</h3>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-sm">223 MOUNTBATTEN ROAD, #03-16, 223, MOUNTBATTEN, SINGAPORE 398008</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-red-500 flex-shrink-0" />
                <p className="text-sm"> singapore@apexeducation.sg</p>
              </div>
            </div>
          </div>
        {/* </div> */}

        {/* Contact Form Section */}
        <div className="flex flex-col-reverse gap-8">
          {/* Google Map */}
          <div className="order-2 md:order-1">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.1944476368398!2d103.87860246951294!3d1.308572440672871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da190d4a6fae09%3A0xf17f6b0180f306b5!2s223%20%40%20Mountbatten!5e0!3m2!1sen!2sin!4v1766314070622!5m2!1sen!2sin" 
              width="100%" 
              height="500" 
              style={{ border: 0 }} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Contact Form */}
          <div className="order-1 md:order-2 shadow-2xl shadow-gray-300 p-8 rounded-2xl">
            <div className="mb-6 text-center">
              <p className="text-red-500 font-semibold mb-2">Any query?</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Get in touch with us!
              </h2>
              <p className="text-gray-600">
                Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            {submitted && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-500 font-medium">Thank you! Your message has been sent.</p>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email *"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone *"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Your Message *"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="bg-red-500 text-white py-3 px-8 rounded-lg font-medium hover:from-red-600 hover:to-emerald-700 transition flex items-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}