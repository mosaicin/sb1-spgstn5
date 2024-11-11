import React from 'react';

function WebsiteLink() {
  return (
    <div className="text-center">
      <a
        href="https://platform.openai.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
      >
        Получить API ключ OpenAI
      </a>
    </div>
  );
}

export default WebsiteLink;