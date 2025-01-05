import React from 'react';

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Users', value: 1200 },
    { label: 'Active Mentors', value: 45 },
    { label: 'Jobs Posted', value: 200 },
    { label: 'Reported Issues', value: 5 },
  ];

  const recentActivities = [
    { id: 1, activity: 'User John Doe registered.', time: '10 mins ago' },
    { id: 2, activity: 'Mentor Jane Smith posted a new resource.', time: '30 mins ago' },
    { id: 3, activity: 'User Alice reported an issue.', time: '1 hour ago' },
  ];

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

        {/* Content Management Section */}
        <section className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Manage Content</h2>
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
              Add New User
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              View All Mentors
            </button>
            <button className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700">
              Review Reports
            </button>
          </div>
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
