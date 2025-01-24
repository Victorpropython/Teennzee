const { Configuration, OpenAIApi } = require('openai');

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
);

exports.chatbotResponse = async (query) => {
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: query,
      max_tokens: 150,
    });
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error interacting with chatbot:', error.message);
    throw new Error('Chatbot service is unavailable.');
  }
};
