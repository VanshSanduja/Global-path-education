import React from 'react';
import AboutImage from '../assets/Home-About Us-2.jpg';
import AboutImage2 from "../assets/Chinese-girl.png";
import { MapPin, Award, Clock, Globe, Sparkles } from 'lucide-react';

function EducationalMission() {
  const destinations = [
    { name: 'Australia', icon: <MapPin size={16} /> },
    { name: 'United Kingdom', icon: <MapPin size={16} /> },
    { name: 'Canada', icon: <MapPin size={16} /> },
    { name: 'United States', icon: <MapPin size={16} /> },
    { name: 'New Zealand', icon: <MapPin size={16} /> },
    { name: 'Malaysia', icon: <MapPin size={16} /> },
    { name: 'Singapore', icon: <MapPin size={16} /> },
    { name: 'China', icon: <MapPin size={16} /> },
  ];

  const benefits = [
    { title: 'Faster Completion', icon: <Clock className="text-red-600" size={24} />, description: 'Reduce your degree duration with RPL credits' },
    { title: 'Cost Savings', icon: <Award className="text-red-600" size={24} />, description: 'Lower tuition fees through credit recognition' },
    { title: 'Global Recognition', icon: <Globe className="text-red-600" size={24} />, description: 'Credits accepted by leading institutions' },
  ];

  return (
    <section 
      data-aos="fade-up"
      className="w-full py-16 bg-gradient-to-br from-[#ffb0b0] to-white overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="mb-12 flex items-center justify-center">
          <div className="h-1 w-12 bg-red-600 mr-4"></div>
          <h3 className="text-red-600 font-semibold tracking-wider uppercase text-3xl">Our Mission</h3>
          <div className="h-1 w-12 bg-red-600 ml-4"></div>
        </div>
        
        {/* First Part - Seamless Pathways to Study Destinations */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          {/* Image Section with floating elements */}
          <div className="w-full lg:w-[50%] relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                className="w-full h-[60vh] md:h-[80vh] object-cover"
                src={AboutImage}
                alt="Students in an international university campus"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent rounded-3xl"></div> */}
            </div>
            
            {/* Floating element - stat */}
            <div className="absolute top-8 -left-6 md:left-8 bg-red-600 text-white rounded-xl shadow-xl p-4 transform rotate-3 hidden md:block">
              <p className="font-bold text-2xl">98%</p>
              <p className="text-xs">successful placements</p>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="w-full lg:w-[50%] px-4">
            <h1 className="text-xl font-bold mb-6 text-gray-800">
              Seamless Pathways to Higher Education
            </h1>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-8">
              <p className="text-base font-bold md:text-lg text-gray-700 leading-relaxed">
                We specialize in assisting students who have completed Singapore based qualifications such as diplomas, advanced diplomas, or other recognized credentials and wish to advance their studies abroad or locally. Our team of experienced education consultants works closely with you to identify the best universities and programs that align with your academic background, career aspirations, and personal goals. Whether you dream of studying at a prestigious institution in Australia, United Kingdom, Canada, United States, New Zealand, Malaysia or even within Singapore, we make the transition smooth and stress-free.
              </p>
            </div>
            
            {/* Destination chips */}
            <div className="mb-8">
              <h4 className="text-lg font-medium text-gray-800 mb-3">Study Destinations:</h4>
              <div className="flex flex-wrap gap-2">
                {destinations.map((destination, index) => (
                  <div key={index} className="flex items-center gap-1 bg-blue-200 text-blue-950 px-3 py-1 rounded-full text-sm font-medium">
                    {destination.icon}
                    {destination.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Second Part - Maximize Your Potential with RPL Credits to Request Consultation */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-[40%] relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                className="w-full h-[65vh] md:h-[90vh]"
                src={AboutImage2}
                alt="Students preparing for university"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent rounded-3xl"></div> */}
            </div>
          </div>

          {/* Text Content Section */}
          <div className="w-full lg:w-[60%] px-4">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
              <span className="bg-blue-100 p-2 rounded-full mr-3">
                <Award className="text-red-500" size={24} />
              </span>
              Maximize Your Potential with RPL Credits
            </h2>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-8">
            <p className="text-base font-bold md:text-lg text-gray-700 leading-relaxed mb-6">
              One of our key offerings is leveraging the Recognition of Prior Learning (RPL) credit system to accelerate your academic journey. The RPL system evaluates your prior qualifications, skills, and experiences to grant course credits, significantly reducing the duration of your degree or diploma program. This means you can achieve your educational goals faster, save on tuition fees, and enter the workforce sooner. Our experts navigate the complexities of RPL assessments, ensuring your credits are maximized and recognized by leading institutions worldwide.
            </p>
            </div>
            
            {/* Benefits grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-md flex flex-col items-center text-center">
                  <div className="bg-blue-50 p-3 rounded-full mb-3">
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-[#ffb0b0] to-white rounded-xl p-6 text-gray-700 shadow-lg">
              <p className="font-bold text-xl">
                We work hand in hand with various institutions in Singapore and universities worldwide to select the best programmes to meet your needs.
              </p>
              <button className="mt-4 cursor-pointer bg-white text-red-500 px-6 py-2 rounded-lg font-bold hover:bg-blue-50 transition duration-300">
                Request Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationalMission;