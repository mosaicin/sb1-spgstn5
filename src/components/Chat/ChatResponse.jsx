import React from 'react';

function ChatResponse({ response, error }) {
  if (error) {
    return (
      <div className="mt-4 p-4 bg-red-100 rounded-lg">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (response) {
    return (
      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <p className="text-gray-800 whitespace-pre-wrap">{response}</p>
      </div>
    );
  }

  return null;
}

export default ChatResponse;