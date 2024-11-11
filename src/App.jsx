import React from 'react';
import AIComponent from './components/AIComponent';
import WebsiteLink from './components/WebsiteLink';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          AI Чат
        </h1>
        <AIComponent />
        <WebsiteLink />
      </div>
    </div>
  );
}

export default App;