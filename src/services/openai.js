import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export const generateAIResponse = async (input) => {
  if (!import.meta.env.VITE_OPENAI_API_KEY) {
    throw new Error('API ключ не настроен. Пожалуйста, добавьте ваш API ключ в файл .env');
  }

  const completion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: input }],
    model: 'gpt-3.5-turbo',
  });

  return completion.choices[0]?.message?.content;
};

export const handleOpenAIError = (error) => {
  console.error('Ошибка при запросе к OpenAI:', error);
  if (error.code === 'invalid_api_key') {
    return 'Неверный API ключ. Пожалуйста, проверьте ваш API ключ в файле .env';
  }
  return 'Произошла ошибка при получении ответа. Пожалуйста, попробуйте позже.';
};