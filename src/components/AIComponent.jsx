import React, { useState } from 'react';
import ChatInput from './Chat/ChatInput';
import ChatResponse from './Chat/ChatResponse';
import { generateAIResponse, handleOpenAIError } from '../services/openai';

function AIComponent() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    setError('');
    
    try {
      const aiResponse = await generateAIResponse(input);
      setResponse(aiResponse || 'Нет ответа от ИИ');
    } catch (error) {
      setError(handleOpenAIError(error));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mb-8">
      <ChatInput
        input={input}
        setInput={setInput}
        isLoading={isLoading}
        onSubmit={handleSubmit}
      />
      <ChatResponse response={response} error={error} />
    </div>
  );
}

export default AIComponent;