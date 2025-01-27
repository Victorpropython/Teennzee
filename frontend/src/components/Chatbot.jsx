import React, { useState } from 'react';
import axios from 'axios';

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const API_URL = 'https://api.openai.com/v1/chat/completions'; // GPT-4 endpoint
  const openaiApiKey = process.env.REACT_APP_OPENAI_API_KEY;


  const sendMessage = async () => {
    if (input.trim()) {
      const newMessage = { user: 'me', text: input };
      setMessages([...messages, newMessage]);

      try {
        const response = await axios.post(
          API_URL,
          {
            model: 'gpt-4', // Change model if needed
            messages: [
              ...messages.map((msg) => ({
                role: msg.user === 'me' ? 'user' : 'assistant',
                content: msg.text,
              })),
              { role: 'user', content: input },
            ],
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        );

        const botReply = response.data.choices[0].message.content;
        setMessages([...messages, newMessage, { user: 'bot', text: botReply }]);
        setInput('');
      } catch (err) {
        console.error('Error communicating with GPT API:', err);
      }
    }
  };

  return (
    <div className="chatbox">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.user === 'me' ? 'me' : 'bot'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chatbox;
  
  // In the code above, we define a  Chatbox  component that uses the  useState  hook to manage the chat messages and user input. The component sends a message to the GPT-4 API when the user clicks the “Send” button. The API response is then displayed in the chat window. 
  // Note:  Make sure to replace  your-gpt-api-key  with your actual GPT-4 API key. 
  // Now, let’s add the  Chatbox  component to the main  App  component: