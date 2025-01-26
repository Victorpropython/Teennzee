import React, { useState } from 'react';

const Home = () => {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);

  // Functions to toggle expansion
  const toggleExpand1 = () => setExpanded1(!expanded1);
  const toggleExpand2 = () => setExpanded2(!expanded2);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-indigo-700 py-20 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Welcome To TeenZee
            </h1>
            <p className="my-4 text-xl text-white">
              Where Teens and Youth Are Modeled To Become A Center Of Reference To Their Generation
            </p>
          </div>
        </div>
      </section>

      {/* Background Image Section */}
      <section>
        <div className="bg-white rounded-xl shadow-md relative">
          <div className="p-4">
            <div className="mb-6">
              <div className="text-gray-600 my-2 xl font-extrabold">Building A Life Worthy of Emulation</div>
              <h3 className="text-xl font-bold">Looking Through Life what Do You See?</h3>
            </div>
            <div className="bg-white rounded-lg shadow-md relative overflow-hidden">
              <img
                src="/assets/images/home1.jpg"
                alt="TeenZee first pics"
                className="object-cover w-[50%] h-[30%] mx-auto"
              />
              <div className="mt-4">
                <p>At TeenZee, we believe every teenager and young adult has the potential to change the world. Whether you're looking to enhance your skills, explore career opportunities, or connect with mentors who can guide you, TeenZee is here to empower you every step of the way..</p>
                <button onClick={toggleExpand1}>
                  {expanded1 ? "Less" : "More"}
                </button>
                {expanded1 && (
                  <p>Expanded content for image 1. This will only be visible when the button is clicked and "More" is selected.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developers and Employers Section */}
      <section className="py-4">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">For Your Mentorships, Skills & Development</h2>
              <p className="mt-2 mb-4">
                Browse for "../our different variety of vocation and skills and start your career today
              </p>
              <a
                href="../jobs.jsx"
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
              >
                Browse/Skills
              </a>
            </div>
            <div className="bg-indigo-100 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">For Mentors</h2>
              <p className="mt-2 mb-4">Want to be a mentor for the Next Younger Generation?</p>
              <a
                Link="/Register"
                className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
              >
                Apply Here
              </a>
            </div>
          </div>
        </div>
      </section>

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
      
      {/* Videos Section */}
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">Why Teenzee</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* video Listing 1 */}
            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Believing  in Oneself</div>
                  <h3 className="text-xl font-bold">First see the Bright side of life(Who  You Are)</h3>
                </div>
                <div className="mb-5 mr-4" >
                <iframe width="460" height="315" src="https://www.youtube.com/embed/tG98GhLmXI4?si=sUf4zCfxzlFHSmhT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

            {/* Video Listing 2 */}
            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Do You Know Who You Are</div>
                  <h3 className="text-xl font-bold">A Being Untapped With Great Grace For Accomplishment</h3>
                </div>
                <div className="mb-3 w-">
                <iframe width="450" height="300" src="https://www.youtube.com/embed/OtAmhyURpNI?si=5BwjDP3irEc1KitM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

            {/* Video Listing 3 */}
            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Born To Rule</div>
                  <h3 className="text-xl font-bold">Your Limit is More than the Sky </h3>
                </div>
                <div className="mb-5" relative aspect-w-16 aspect-h-9>
                <div className="aspect-video"> {/* aspect-video on inner div */}
                <iframe width="460" height="315" src="https://www.youtube.com/embed/WRqpe-zZfZk?si=JI-gzxzVZxM8RGld" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>
                </div>
                <h3 className="text-indigo-500 mb-2">Success is A must</h3>
                <div className="border border-gray-100 mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Dreams of Destiny
                  </div>
                  <a
                    href=""
                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Its in You
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* View All Jobs Section */}
      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="https://www.tonyrobbins.com/?srsltid=AfmBOopJRdob9WkGZZ4tb0i_u0JnnjMxU6r8oDVZksIeErHfMVesPR3r"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          Connect To Some of Our Mentors
        </a>
      </section>

      {/* Guidance Section */}
      <section className="py-4">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">For Counsel & Guidance</h2>
              <p className="mt-2 mb-4">
                Reach out to our Mentors and start your career today
              </p>
              <a
                Link="../jobs.jsx"
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
              >
                Browse Our Catalog of Mentors
              </a>
            </div>
            <div className="bg-indigo-100 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">For Mentors</h2>
              <p className="mt-2 mb-4">Want to be a mentor for the Next Younger Generation?</p>
              <a
                href="../Register"
                className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
              >
                Apply Here
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
