import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import { Button } from '@/components/ui/button';

const Dashboard = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('/api/dashboard/data');
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-blue-500 to-blue-800 text-white flex flex-col justify-between p-6">
        {/* Profile Section */}
        <div className="flex flex-col items-center">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white mb-4"
          />
          <h2 className="text-lg font-semibold">Student Name</h2>
        </div>

        {/* Navigation Buttons */}
        <nav className="mt-8 flex flex-col gap-4">
          {[
            { label: 'Mentor', path: '/mentor' },
            { label: 'Courses', path: '/courses' },
            { label: 'Progress', path: '/progress' },
            { label: 'Resources', path: '/resources' },
            { label: 'Peers', path: '/peers' },
            { label: 'Entertainment', path: '/entertainment' },
            { label: 'Latest News', path: '/news' },
          ].map((item) => (
            <Button
              key={item.label}
              onClick={() => handleNavigation(item.path)}
              className="w-full text-left bg-white text-blue-800 hover:bg-blue-600 hover:text-white"
            >
              {item.label}
            </Button>
          ))}
        </nav>

        {/* Logout Button */}
        <Button
          onClick={() => handleNavigation('/logout')}
          className="bg-red-600 text-white hover:bg-red-700 mt-auto"
        >
          Logout
        </Button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-100 overflow-y-auto">
        <h1 className="text-2xl font-bold text-center mb-6">Welcome to Your Dashboard</h1>

        {/* Data Summary */}
        <div className="text-center mb-6">
          <p>Total Students: {data.totalStudents}</p>
          <p>Total Mentors: {data.totalMentors}</p>
          <p>Pending Connections: {data.pendingConnections}</p>
        </div>

        {/* Picture Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              img: 'https://via.placeholder.com/300',
              quote: 'Believe in yourself and all that you are.',
            },
            {
              img: 'https://via.placeholder.com/300',
              quote: 'The future belongs to those who believe in their dreams.',
            },
            {
              img: 'https://via.placeholder.com/300',
              quote: 'Success is not the key to happiness. Happiness is the key to success.',
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={card.img}
                alt="Motivational"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-700 italic text-center">{card.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
