import React, { useState, useEffect } from 'react';
import api from '../api/Api';

const AdminDashboard = () => {
  const [stats, setStats] = useState([]);
  const [recentActivities, setRecentActivities] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data } = await api.get('/admin/stats'); // Adjust to your actual endpoint
        setStats(data.stats);
      } catch (err) {
        console.error('Error fetching stats:', err);
      }
    };

    const fetchRecentActivities = async () => {
      try {
        const { data } = await api.get('/admin/activities'); // Adjust to your actual endpoint
        setRecentActivities(data.activities);
      } catch (err) {
        console.error('Error fetching recent activities:', err);
      }
    };

    fetchStats();
    fetchRecentActivities();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between py-6">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            Logout
          </button>
        </header>

        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow rounded-lg flex flex-col items-center"
            >
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              <p className="text-gray-500">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Recent Activities Section */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activities</h2>
          <ul className="space-y-4">
            {recentActivities.map((activity) => (
              <li
                key={activity.id}
                className="flex justify-between items-center bg-gray-50 p-4 rounded-md shadow"
              >
                <p className="text-gray-800">{activity.activity}</p>
                <p className="text-gray-500 text-sm">{activity.time}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
