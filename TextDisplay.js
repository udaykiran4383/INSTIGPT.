import React from 'react';

function TextDisplay({ messages }) {
  return (
    <div className="text-display">
      {messages.map((message, index) => (
        <div key={index} className="message">{message}</div>
      ))}
    </div>
  );
}

export default TextDisplay;
