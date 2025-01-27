import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axios.get('/api/events');

        // Ensure data is an array before setting state
        if (Array.isArray(data)) {
          setEvents(data);
        } else {
          console.error('API response is not an array:', data);
          setEvents([]); // Reset to an empty array if data is not valid
        }
      } catch (error) {
        console.error('Error fetching events:', error);
        setEvents([]); // Reset to an empty array in case of an error
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <textarea className="" id=""></textarea>
      <h1>Events</h1>
      <ul>
        {events.length > 0 ? (
          events.map((event) => (
            <li key={event._id}>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p>Date: {new Date(event.date).toLocaleDateString()}</p>
            </li>
          ))
        ) : (
          <p>No events found.</p>
        )}
      </ul>
    </div>
  );
};

export default Events;
