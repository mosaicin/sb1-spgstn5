import React from 'react';

function ChatInput({ input, setInput, isLoading, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="relative">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Задайте ваш вопрос..."
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none min-h-[100px] resize-y"
          disabled={isLoading}
        />
      </div>
      <button
        type="submit"
        className={`w-full py-3 rounded-lg text-white transition-colors ${
          isLoading 
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-purple-600 hover:bg-purple-700'
        }`}
        disabled={isLoading}
      >
        {isLoading ? 'Обработка запроса...' : 'Отправить запрос'}
      </button>
    </form>
  );
}

export default ChatInput;