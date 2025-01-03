const openai = require('openai');

exports.chatbotResponse = async (query) => {
  try {
    const response = await openai.Completion.create({
      model: 'text-davinci-003',
      prompt: query,
      max_tokens: 150,
    });
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error interacting with chatbot:', error);
    throw new Error('Chatbot service is unavailable.');
  }
};