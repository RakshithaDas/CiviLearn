import React, { useState } from 'react';
import './Chatbot.css'; // If you have styles

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi! I'm your Civic Assistant. Ask me anything about your rights." }
  ]);
  const [input, setInput] = useState('');

  const getFakeResponse = (query) => {
    const lower = query.toLowerCase();
    if (lower.includes('voting')) {
      return 'Voting is your fundamental right under Article 326 of the Indian Constitution.';
    }
    if (lower.includes('rti')) {
      return 'RTI stands for Right to Information, under the RTI Act 2005.';
    }
    if (lower.includes('education')) {
      return 'The Right to Education is guaranteed under Article 21A.';
    }
    if (lower.includes('protest')) {
      return 'Right to protest is part of your Right to Freedom under Article 19(1)(b).';
    }
    return "🤖 I'll get back to you soon! (In a real app, this would use the GPT-4 API)";
  };

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage = { from: 'user', text: input };
    const botMessage = { from: 'bot', text: getFakeResponse(input) };

    setMessages([...messages, userMessage, botMessage]);
    setInput('');
  };

  return (
    <div className="chatbot-container">
      <h2 className="chatbot-title">🤖 Civic Chatbot</h2>
      <div className="chat-window">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.from}`}>
            {msg.from === 'user' ? '🧑‍💬' : '🤖'} {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about voting, RTI, protests..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}
