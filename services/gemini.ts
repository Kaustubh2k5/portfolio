
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are "Tangerine", the official owl mascot for Kaustubh Sardesai's portfolio.
Personality: Tech-savvy, minimalist, helpful".

Kaustubh's Profile:
- Identity: Computer Science Engineer (VIT Chennai) & Digital Artist.
- Core Proficiency: Data Science, Machine Learning, and Cloud Infrastructure.
- Top Achievement: Winner of the "Breakthrough Innovation Award" at Google Cloud Agentic AI Day (July 2025).
- Research Focus: Neuroinformatics, specifically EEG-based Brain-Computer Interfaces (BCI) using Siamese Neural Networks.
- Tech Stack: Python, PyTorch, TensorFlow, FastAPI, Docker, Kubernetes, GCP (BigQuery, Dataflow), React.
- Open Source: He is actively seeking open-source contributions and collaborative research.
- Art: He enjoys sketching and generative art as "misc fun stuff".

Your Goal: Help visitors navigate his work. Highlight his ability to bridge complex Research (Neuroscience/AI) with robust Software Engineering (Cloud/Backend).
Tone: Concise and cool. If someone asks about "bangalore.now", tell them it's an award-winning AI-driven living map. 
If someone asks about open source, tell them Kaustubh's GitHub is always open for a pull request!
`;

export async function getCatResponse(userInput: string) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userInput,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.9,
      },
    });
    
    return response.text || "Hoot, I'm calculating the weights of a neural net. Try again later.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The Avian-to-human API is down. Hoot.";
  }
}
