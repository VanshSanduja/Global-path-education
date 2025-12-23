import React from "react";
import { Link } from "react-router-dom";
import Rpl from "../assets/RPL-Strategy.jpg";
import {
  GraduationCap,
  Globe,
  Clock,
  ChevronRight,
  Compass,
  Gift,
  Briefcase,
} from "lucide-react";

function AcademicExcellence() {
  const journeySteps = [
    {
      icon: <Compass className="text-green-700" size={24} />,
      title: "Assessment & Planning",
      description:
        "We evaluate your qualifications and create a personalized education roadmap.",
    },
    {
      icon: <GraduationCap className="text-green-700" size={24} />,
      title: "Program Matching",
      description:
        "We identify universities that maximize your credits and align with your career goals.",
    },
    {
      icon: <Briefcase className="text-green-700" size={24} />,
      title: "Application Support",
      description:
        "From paperwork to interviews, we guide you through every step of the application process.",
    },
    {
      icon: <Globe className="text-green-700" size={24} />,
      title: "Transition Assistance",
      description:
        "Pre-departure guidance and resources to ensure a smooth transition abroad.",
    },
  ];

  const benefits = [
    {
      text: "Save up to 1-2 years on degree completion",
      icon: <Clock size={18} />,
    },
    { text: "Reduce education costs significantly", icon: <Gift size={18} /> },
    { text: "Access to top universities worldwide", icon: <Globe size={18} /> },
  ];

  return (
    <section
      data-aos="fade-up"
      className="w-full py-16 bg-gradient-to-br from-green-50 via-white to-green-50"
    >
      <div className="container mx-auto">
        {/* Main Section */}
        <div className="flex flex-col md:flex-row-reverse w-full items-center px-6 md:px-12 md:mb-16 gap-12">
          {/* Text Content */}
          <div className="md:w-[50%] w-full">
            <h1 className="font-bold text-xl my-4 text-gray-800 leading-tight">
              Your Journey Starts Here
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl">
              Embarking on an international or local education journey is a
              life-changing decision, and we’re here to make it rewarding and
              accessible. With{" "}
              <span className="font-bold text-green-600">
                Apex Education PathFinder
              </span>
              , you gain a trusted partner committed to your success. Let us
              help you turn your Singapore qualifications into a gateway for
              global opportunities, equipping you with the credentials and
              confidence to thrive in today’s competitive world.
            </p>

            {/* Benefits */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="font-semibold text-xl mb-4 text-gray-800">
                Key Benefits
              </h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      {benefit.icon}
                    </div>
                    <p className="text-gray-700">{benefit.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              Let us help you turn your Singapore qualifications into a gateway for global opportunities, equipping you with the credentials and confidence to thrive in today's competitive world.
            </p> */}

            {/* CTA Button */}
            <div className="mt-8">
              <button className="bg-green-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-green-700 transition duration-300 shadow-lg flex items-center group">
                Start Your Journey
                <ChevronRight
                  size={20}
                  className="ml-2 transform group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>

          {/* Image Container */}
          <div className="md:w-[50%] h-[60vh] w-full md:mb-0 mb-12">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-green-200 rounded-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-green-400 rounded-2xl"></div>
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={Rpl}
                  alt="Student success story"
                  className="w-full h-[60vh] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div> */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap size={20} />
                    <span className="font-medium">Success Stories</span>
                  </div>
                  <p className="text-sm opacity-90">
                    Our students achieve their academic dreams in less time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Steps Section */}
        <div className="px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Your Educational Journey With Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive support throughout your entire
              educational journey, from initial assessment to successful program
              completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {journeySteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-8 text-white text-center max-w-4xl mx-auto shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Take the Next Step?
            </h3>
            <p className="mb-6 text-xl text-blue-100">
              Contact us today to explore your options and start building your
              future with a shorter, smarter path to higher education!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="px-8 py-3 bg-white text-green-700 rounded-xl font-medium hover:bg-blue-50 transition duration-300">
                  Schedule Consultation
                </button>
              </Link>
              <button className="px-8 py-3 border-2 border-white text-white rounded-xl font-medium hover:bg-blue-700 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AcademicExcellence;
