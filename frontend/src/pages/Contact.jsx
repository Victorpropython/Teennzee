import React from 'react';
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      
      {/* Browse Jobs Section */}
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">You Can Reach Out To Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Job Listing 1 */}
            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Our Stake Holders</div>
                  <h3 className="text-xl font-bold">With the passion for The Youth</h3>
                </div>
                <div className="mb-5">
                  <img src="/assets/ceo.jpg" alt="Teenagers" className="rounded-lg mb-4" />
                </div>
                <h3 className="text-indigo-500 mb-2"></h3>
                <div className="border border-gray-100 mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Mr Victor
                  </div>
                  <a
                    href="job.html"
                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Being there for the Youth...
                  </a>
                </div>
              </div>
            </div>

            {/* Job Listing 2 */}
            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Unleashing</div>
                  <h3 className="text-xl font-bold">A man With a purpose</h3>
                </div>
                <div className="mb-5">
                  <img src="/assets/my-pix.png" alt="Teenagers" className="rounded-lg mb-4" />
                </div>
                <h3 className="text-indigo-500 mb-2">Never UnderEstimate your Abilities</h3>
                <div className="border border-gray-100 mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Victor Chibuike
                  </div>
                  <a
                    href="../job"
                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* Job Listing 3 */}
            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Born To Rule</div>
                  <h3 className="text-xl font-bold">Your Limit is More than the Sky </h3>
                </div>
                <div className="mb-5">
                Here, we don't just teach skills – we shape future leaders. TeenZee offers a platform designed to help you discover your passions, gain real-world experience, and connect with like-minded individuals. Whether you're interested in technology, design, business, or more, we provide resources, job opportunities, and mentoring that cater to your unique talents.
                </div>
                <h3 className="text-indigo-500 mb-2">Any thing is Possible Believe</h3>
                <div className="border border-gray-100 mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Chibuike, NY
                  </div>
                  <a
                    href="../jobs"
                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h1>You can Check Us Up @<a href='victorchibuzor3109@gmail.com'><FaEnvelope/>Gmail </a></h1>
      <p>Email: support@teenzee.com</p>
      <p>Phone: +234924088860</p>
    </>
  );
};

export default Contact;
