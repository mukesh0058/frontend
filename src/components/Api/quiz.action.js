import axios from "axios";
const OPEN_AI_TOKEN = "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";

export const generateQuizFromOpenAi = async (text) => {
  return await axios.post(
    "https://api.openai.com/v1/completions",
    {
      model: "text-davinci-003",
      prompt: `Generate a quiz based on the following passage:\n\n${`${text}`}\n\nQ:`,
      max_tokens: 100,
      temperature: 0.7,
      n: 5,
    },
    {
      headers: {
        Authorization: `Bearer ${OPEN_AI_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
};
