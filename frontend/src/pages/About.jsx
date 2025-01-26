import React, { useEffect } from 'react';

const About = ({ setTitle }) => {
  useEffect(() => {
    setTitle("About"); 
  }, [setTitle]); 

  return (
    <>
      
      {/* Browse Jobs Section */}
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">Why Teenzee</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Job Listing 1 */}
            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Believing  in Oneself</div>
                  <h3 className="text-xl font-bold">First see the Bright side of life(Who  You Are)</h3>
                </div>
                <div className="mb-5">
                TeenZee: Where destinies are forged. We believe every young person holds within them a unique purpose waiting to be unleashed.  At TeenZee, we provide the nurturing environment and unwavering encouragement needed to transform potential into reality.  We're not just a platform; we're a launchpad, guiding and supporting teens as they discover their passions, cultivate their talents, and step confidently into the future they were born to create.  Join us, and embark on the journey to becoming your most authentic, purposeful self.
                </div>
                <h3 className="text-indigo-500 mb-2"></h3>
                <div className="border border-gray-100 mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Boston, MA
                  </div>
                  <a
                    href="job.html"
                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* Job Listing 2 */}
            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Do You Know Who You Are</div>
                  <h3 className="text-xl font-bold">A Being Untapped With Great Grace For Accomplishment</h3>
                </div>
                <div className="mb-5">
                  Join our team as a Student or Mentor in Developing or Nurturing Great Talent, We are looking for a motivated individual with a passion...
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
                <h3 className="text-indigo-500 mb-2">Any this is Possible Believe</h3>
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
      <h1>About Us</h1>
      <p>TeenZee connects students with mentors to explore opportunities and grow.</p>
    </>
  );
};

export default About;