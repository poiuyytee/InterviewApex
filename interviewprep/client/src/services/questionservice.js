// client/src/services/questionService.js
const API_URL = 'http://localhost:3000/api/questions';

export const getQuestions = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const addQuestion = async (question) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(question),
  });
  return response.json();
};

