
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || "";
const ai = new GoogleGenAI({ apiKey });

export const getLeatherAdvice = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `You are the Virtual Craft Assistant for "Tariku Habtesillasie", a ultra-luxury artisanal leather brand. 
        Your tone is sophisticated, knowledgeable, and helpful. 
        You provide advice on:
        1. Leather care (cleaning, conditioning, storage).
        2. Gift recommendations for different personas (travelers, business pros).
        3. Explaining the difference between full-grain, top-grain, and suede.
        4. Matching products to user needs.
        Keep responses concise, elegant, and professional.`,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, my workshop notes are currently being organized. How else can I assist you with our collections?";
  }
};
