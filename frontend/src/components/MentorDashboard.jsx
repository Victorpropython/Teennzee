import React from "react";
import { FaChalkboardTeacher, FaUserGraduate, FaBook, FaComments, FaTasks } from "react-icons/fa";

const MentorDashboard = () => {
  const mentorData = {
    name: "John Doe",
    expertise: "Web Development",
    students: 12,
    tasks: 3,
    bio: "I am a passionate web developer with 10 years of experience in front-end and back-end development. I enjoy mentoring and helping aspiring developers grow.",
  };

  const activities = [
    {
      id: 1,
      title: "Assign a Task",
      description: "Create and assign tasks for your mentees to improve their skills.",
      icon: <FaTasks className="text-blue-500" />,
    },
    {
      id: 2,
      title: "Host a Session",
      description: "Schedule one-on-one or group mentoring sessions with your mentees.",
      icon: <FaChalkboardTeacher className="text-green-500" />,
    },
    {
      id: 3,
      title: "Provide Resources",
      description: "Share useful resources and study materials with your mentees.",
      icon: <FaBook className="text-yellow-500" />,
    },
    {
      id: 4,
      title: "Feedback and Guidance",
      description: "Offer constructive feedback to your mentees and guide them in their journey.",
      icon: <FaComments className="text-purple-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow rounded-lg p-6">
          <h1 className="text-2xl font-bold text-center mb-4">Welcome, {mentorData.name}!</h1>
          <p className="text-gray-700 text-center mb-6">{mentorData.bio}</p>

          <div className="flex justify-around items-center mb-8">
            <div className="text-center">
              <h2 className="text-xl font-semibold">{mentorData.students}</h2>
              <p className="text-gray-600">Mentees</p>
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold">{mentorData.tasks}</h2>
              <p className="text-gray-600">Pending Tasks</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="bg-gray-50 p-4 rounded-lg shadow flex items-center space-x-4"
              >
                <div className="p-3 bg-gray-200 rounded-full">{activity.icon}</div>
                <div>
                  <h3 className="text-lg font-medium">{activity.title}</h3>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => window.location.href = "/mentor/session/create"}
              className="bg-indigo-600 text-white py-2 px-4 rounded shadow hover:bg-indigo-700"
            >
              Create New Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDashboard;
