import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/dashboard/data');
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Total Students: {data.totalStudents}</p>
      <p>Total Mentors: {data.totalMentors}</p>
      <p>Pending Connections: {data.pendingConnections}</p>
    </div>
  );
};

export default Dashboard;