import React from "react";
import LeftImage from "../assets/Chinese-2.jpeg";
// import LeftImage2 from "../assets/Hero-2-Copy.png";
import { Globe, Award, BookOpen } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-[#ffb0b0] to-white">
      <div className="container mx-auto px-4">
        {/* Main content section - flex column on mobile, row on large screens */}
        <div className="flex flex-col lg:flex-row items-center py-8">
          {/* Left Section (Image) - Full width on mobile, 60% on large screens */}
          <div className="w-full lg:w-[60%] mb-8 lg:mb-0 lg:pr-8">
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
                <img
                  src={LeftImage}
                  alt="Students celebrating graduation"
                  className="w-full h-[60vh] md:h-[80vh] object-cover"
                  // style={{ objectPosition: "start" }}
                />
              </div>

              {/* Floating stats boxes */}
              <div className="absolute top-2 md:top-8 right-2 md:right-12 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-3 md:p-4">
                <div className="flex items-center gap-2">
                  <Globe className="text-red-600" size={24} />
                  <span className="font-bold text-red-900">8+ Countries</span>
                </div>
              </div>

              <div className="absolute bottom-2 md:bottom-12 left-2 md:left-12 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-3 md:p-4">
                <div className="flex items-center gap-2">
                  <Award className="text-red-600" size={24} />
                  <span className="font-bold text-red-900">
                    100+ Universities
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section (Text Content) - Full width on mobile, 40% on large screens */}
          <div className="w-full lg:w-[40%] p-4">
            <div className="w-full">
              <div className="mb-6 flex items-center">
                <div className="h-1 w-12 bg-red-600 mr-4"></div>
                <h3 className="text-red-600 font-semibold tracking-wider uppercase text-2xl">
                  Your Education Journey
                </h3>
                <div className="h-1 w-12 bg-red-600 ml-4"></div>
              </div>

              <h1 className="text-xl font-bold text-gray-900 mb-6 leading-tight">
                Premier Overseas University Application Centre in Singapore
              </h1>

              <p className="text-base md:text-lg mb-8 leading-relaxed text-gray-700">
                At{" "}
                <span className="font-extrabold text-red-500">
                  Apex Education Pathfinder
                </span>
                , we are dedicated to transforming the educational journeys of
                students holding Singapore qualifications. Our mission is to
                empower you to pursue higher education in world-class
                destinations such as Australia, United Kingdom, Canada, United
                States, New Zealand, Malaysia and with in Singapore itself.
                Through our expert guidance and personalized support,{" "}
                <span className="font-bold">
                  we help you unlock global academic opportunities while
                  minimizing the time and cost of earning your degree or
                  diploma.
                </span>
              </p>

              <div className="mb-8 bg-blue-50 rounded-xl p-4 border-l-4 border-red-500">
                <p className="font-medium text-gray-800">
                  We help minimize{" "}
                  <span className="text-red-500 font-bold">
                    time and expenses
                  </span>{" "}
                  while maximizing your academic potential abroad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom feature bar */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-4 shadow-lg flex items-center gap-4 transform transition-transform duration-300 hover:scale-105">
            <div className="bg-blue-100 p-3 rounded-full">
              <Globe className="text-red-500" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Global Network</h3>
              <p className="text-sm text-gray-600">
                Connections with top universities
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-lg flex items-center gap-4 transform transition-transform duration-300 hover:scale-105">
            <div className="bg-blue-100 p-3 rounded-full">
              <Award className="text-red-500" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Personalized Path</h3>
              <p className="text-sm text-gray-600">
                Customized education roadmaps
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-lg flex items-center gap-4 transform transition-transform duration-300 hover:scale-105">
            <div className="bg-blue-100 p-3 rounded-full">
              <BookOpen className="text-red-500" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Expert Guidance</h3>
              <p className="text-sm text-gray-600">
                From application to enrollment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}