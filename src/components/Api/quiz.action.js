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
