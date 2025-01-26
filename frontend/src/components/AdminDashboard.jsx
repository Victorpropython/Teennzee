import React, { useState, useEffect } from "react";
import api from "../api/Api";

const StatCard = ({ value, label }) => (
  <div className="p-4 bg-white shadow rounded-lg flex flex-col items-center">
    <p className="text-2xl font-bold text-gray-800">{value}</p>
    <p className="text-gray-500">{label}</p>
  </div>
);

const ActivityItem = ({ activity, time }) => (
  <li className="flex justify-between items-center bg-gray-50 p-4 rounded-md shadow">
    <p className="text-gray-800">{activity}</p>
    <p className="text-gray-500 text-sm">{time}</p>
  </li>
);

const AdminDashboard = () => {
  const [stats, setStats] = useState([]);
  const [recentActivities, setRecentActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);

        const [statsResponse, activitiesResponse] = await Promise.all([
          api.get("/admin/stats"), // Adjust endpoint
          api.get("/admin/activities"), // Adjust endpoint
        ]);

        setStats(statsResponse.data.stats);
        setRecentActivities(activitiesResponse.data.activities);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
        setError("Failed to load dashboard data.");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-red-500 text-center py-10">{error}</div>;

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
            <StatCard key={index} value={stat.value} label={stat.label} />
          ))}
        </section>

        {/* Recent Activities Section */}
        <section className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">Recent Activities</h2>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
              View All
            </button>
          </div>
          <ul className="space-y-4">
            {recentActivities.length > 0 ? (
              recentActivities.map((activity) => (
                <ActivityItem
                  key={activity.id}
                  activity={activity.activity}
                  time={activity.time}
                />
              ))
            ) : (
              <p className="text-gray-500">No recent activities available.</p>
            )}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
