import { useState } from 'react';
import { BookOpen, Plane, Home, FileText, Check } from 'lucide-react';

export default function ConsultingServices() {
  const [activeTab, setActiveTab] = useState('visa');
  
  const services = [
    {
      id: 'visa',
      title: 'Visa Guidance',
      icon: <FileText className="w-6 h-6" />,
      description: 'Navigating the student visa application process can be complex, but we make it straightforward and stress-free.',
      content: (
        <div>
          <p className="mb-4">Navigating the student visa application process can be complex, but at <span className='text-green-500 font-bold'>Apex Education PathFinder</span>, we make it straightforward and stress-free. Our dedicated visa guidance services are designed to support students with Singapore qualifications who aspire to pursue higher education in top global destinations, including Australia, United Kingdom, Canada, United States, New Zealand, Malaysia and Singapore. With our expert assistance, you can confidently secure the necessary visas to start your academic journey abroad or locally.</p>
          
          <h3 className="text-lg font-semibold mb-2">Comprehensive Visa Support Tailored to Your Needs</h3>
          <p className="mb-4">Our experienced visa consultants provide personalized guidance to ensure your student visa application meets the specific requirements of your chosen study destination. We stay up-to-date with the latest immigration policies and procedures, offering accurate advice and practical solutions to streamline the process.</p>
          
          <h3 className="text-lg font-semibold mb-2">Why Trust Us for Visa Guidance?</h3>
          <p className="mb-4">With years of experience in education and visa assistance, we have helped countless students successfully obtain student visas for leading study destinations. Our deep understanding of country-specific visa regulations, combined with our commitment to personalized service, sets us apart.</p>
          
          <div className="my-4">
            <p className="font-medium mb-2">We take pride in:</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span><span className="font-medium">Expert Knowledge:</span> Our consultants are well-versed in the Student visa policies of Australia, UK, Canada, USA, New Zealand, Malaysia and Singapore, ensuring accurate and reliable advice.</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span><span className="font-medium">High Success Rates:</span> Our meticulous approach to application preparation and submission maximizes your chances of visa approval.</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span><span className="font-medium">Time Efficiency:</span> We prioritize timely submissions and proactive communication to meet application deadlines and keep your study plans on track.</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span><span className="font-medium">Holistic Support:</span> Beyond visa assistance, we integrate our services with university applications and Recognition of Prior Learning (RPL) credit evaluations to create a seamless transition to your chosen program.</span>
              </li>
            </ul>
          </div>
          
          <h3 className="text-lg font-semibold mb-2">Start Your Journey with Confidence</h3>
          <p className="mb-4">Securing a student visa is a critical step toward achieving your global education goals. We are committed to making this process as smooth and successful as possible. Let our visa experts guide you through every detail, from initial consultation to visa approval, so you can focus on preparing for an exciting new chapter in your academic and professional life.</p>
          <p className='font-bold text-center my-16'>Ready to apply for your student visa? Contact us today to schedule a consultation and take the first step toward studying in Australia, United Kingdom, Canada, USA, New Zealand, Malaysia and Singapore!</p>
        </div>
      )
    },
    {
      id: 'admission',
      title: 'Admission Consulting',
      icon: <BookOpen className="w-6 h-6" />,
      description: 'Swift admission process for your chosen institute.',
      content: (
        <div>
          <p className="mb-4">Swift admission process of your chosen institute. <span className='text-green-500 font-bold'>Apex Education PathFinder</span> is Singapore's leading source of information on opportunities for students to study . We will help you find the right course and university that is the best for you.</p>
          <p className="mb-4">At <span className='text-green-500 font-bold'>Apex Education PathFinder</span> Admission Consulting service, we don't just guide; we empower you to present the strongest possible application for your educational pursuits. Let us be your partner in achieving academic success and unlocking the doors to a promising future.</p>
        </div>
      )
    },
    {
      id: 'predeparture',
      title: 'Pre-Departure',
      icon: <Plane className="w-6 h-6" />,
      description: 'Comprehensive preparation before you leave.',
      content: (
        <div>
          <p className="mb-4"><span className='text-green-500 font-bold'>Apex Education PathFinder</span> details its students with the visa procedure to be followed in the guides them in preparing the various documents required for obtaining a valid student visa. Sessions to provide an insight to the various facets of student life.</p>
          <p className="mb-4">From handling intricate travel logistics to providing comprehensive orientation sessions, we go beyond the ordinary to prepare you for the adventure ahead. Let us take care of the details, including flight arrangements, transportation, and accommodation, so you can focus on the exciting experiences awaiting you.</p>
        </div>
      )
    },
    {
      id: 'postarrival',
      title: 'Post-Arrival',
      icon: <Home className="w-6 h-6" />,
      description: '24/7 support in your new environment.',
      content: (
        <div>
          <p className="mb-4">We are constantly in touch with the Universities/Colleges to ensure that our students do not face any problems related to courses and accommodation. We provide 24/7 support when things would be unfamiliar.</p>
          <p className="mb-4">At <span className='text-green-500 font-bold'>Apex Education PathFinder</span>, our commitment goes beyond the initial stages of your journey. We are here to support you post-arrival, ensuring you have the resources and assistance needed for a successful and enriching experience in your new academic and cultural environment. Welcome to a new chapter of growth and exploration!</p>
        </div>
      )
    }
  ];

  const destinations = [
    'Australia', 'United Kingdom', 'Canada', 'United States', 
    'New Zealand', 'Malaysia', 'Singapore'
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-green-500 mb-4">Student Services</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We provide comprehensive support services to help students achieve their educational goals abroad.
          Our expert team assists at every stage of your academic journey.
        </p>
      </div>
      
      {/* Destinations Banner */}
      <div className="bg-green-50 rounded-lg p-6 mb-12 shadow-sm">
        <h2 className="text-xl font-semibold text-center mb-4 text-green-500">Supporting Students for Top Global Destinations</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {destinations.map((destination) => (
            <span key={destination} className="bg-white text-green-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
              {destination}
            </span>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-8">
        <div className="flex flex-wrap border-b border-gray-200">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`flex items-center px-4 py-3 text-base font-medium mr-2 ${
                activeTab === service.id 
                  ? 'text-green-500 border-b-2 border-green-500' 
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              <div className={`mr-2 ${activeTab === service.id ? 'text-green-700' : 'text-gray-500'}`}>
                {service.icon}
              </div>
              {service.title}
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        {services.map((service) => (
          <div 
            key={service.id} 
            className={`${activeTab === service.id ? 'block' : 'hidden'}`}
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <div className="text-green-600">
                  {service.icon}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
            <div className="prose max-w-none text-gray-700">
              {service.content}
            </div>
            <div className="mt-8 justify-center items-center flex">
              <button className="bg-green-500 hover:bg-green-800 text-xl text-white py-2 px-6 rounded-lg font-medium transition-colors duration-200">
                Contact Us
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}