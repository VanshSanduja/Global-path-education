import React from "react";
import "flag-icon-css/css/flag-icons.min.css";
import { Link } from "react-router-dom";

const DestinationsPage = () => {
  const destinations = [
    {
      country: "Canada",
      flag: "ca",
      bgColor: "bg-red-50",
      description:
        "Known for its high-quality education system and welcoming multicultural environment. Canadian universities offer a wide range of programs with affordable tuition compared to the US.",
      topUniversities: [
        "University of Toronto",
        "McGill University",
        "University of British Columbia",
      ],
    },
    {
      country: "Australia",
      flag: "au",
      bgColor: "bg-blue-50",
      description:
        "Offers world-class education with a relaxed lifestyle and beautiful natural surroundings. Australian universities are known for their research opportunities and practical approach.",
      topUniversities: [
        "University of Melbourne",
        "University of Sydney",
        "Australian National University",
      ],
    },
    {
      country: "UK",
      flag: "gb",
      bgColor: "bg-indigo-50",
      description:
        "Home to some of the world's oldest and most prestigious universities. UK degrees are highly respected worldwide, with programs typically shorter than in other countries.",
      topUniversities: [
        "University of Oxford",
        "University of Cambridge",
        "Imperial College London",
      ],
    },
    {
      country: "USA",
      flag: "us",
      bgColor: "bg-cyan-50",
      description:
        "Features the largest number of internationally ranked universities offering unparalleled program variety and research opportunities across all fields of study.",
      topUniversities: [
        "Harvard University",
        "Stanford University",
        "Massachusetts Institute of Technology",
      ],
    },
    {
      country: "New Zealand",
      flag: "nz",
      bgColor: "bg-blue-50",
      description:
        "Provides a high standard of education with a focus on student wellbeing and innovative teaching in a stunning natural environment.",
      topUniversities: [
        "University of Auckland",
        "University of Otago",
        "Victoria University of Wellington",
      ],
    },
    {
      country: "Malaysia",
      flag: "my",
      bgColor: "bg-yellow-50",
      description:
        "Emerging as an education hub in Southeast Asia with affordable quality education and many international branch campuses from UK, Australia and other countries.",
      topUniversities: [
        "Universiti Malaya",
        "Universiti Putra Malaysia",
        "Taylor's University",
      ],
    },
    {
      country: "Singapore",
      flag: "sg",
      bgColor: "bg-red-50",
      description:
        "A global education hub with world-class universities in a safe, clean environment. Singapore offers excellent career opportunities and connections throughout Asia.",
      topUniversities: [
        "National University of Singapore",
        "Nanyang Technological University",
        "Singapore Management University",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Global Education Destinations
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover world-class educational opportunities across seven
            countries through our partnership with International Management and
            Sports College in Singapore
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Global University Pathways
          </h2>
          <p className="text-lg text-gray-600">
            Through our collaboration with International Management and Sports
            College in Singapore, we will help students achieve their dreams of
            progressing to universities around the world:
          </p>
        </div>

        {/* Country Grid Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className={`${destination.bgColor} rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer`}
            >
              <span
                className={`flag-icon flag-icon-${destination.flag} text-6xl mb-4 block`}
              ></span>
              <h3 className="text-xl font-bold text-gray-800">
                {destination.country}
              </h3>
            </div>
          ))}
        </div>

        {/* Detailed Country Information */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Explore Our University Destinations
          </h2>

          {destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 mb-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <span
                  className={`flag-icon flag-icon-${destination.flag} text-5xl`}
                ></span>
                <h3 className="text-3xl font-bold text-gray-800">
                  {destination.country}
                </h3>
              </div>

              <p className="text-gray-600 mb-6 text-lg">
                {destination.description}
              </p>

              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  Top Universities:
                </h4>
                <ul className="space-y-2">
                  {destination.topUniversities.map((uni, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">{uni}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Global Education Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our advisors are ready to help you choose the perfect destination
            for your educational goals and career aspirations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact/#contact-header">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Schedule a Consultation
              </button>
            </Link>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationsPage;
