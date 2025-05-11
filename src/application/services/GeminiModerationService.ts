import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config"

export class GeminiModerationService {
  private gemini: GoogleGenerativeAI;

  constructor(apiKey: string) {
    this.gemini = new GoogleGenerativeAI(apiKey);
  }

  async analyzeComment(content: string): Promise<"approved" | "rejected" | "pending"> {
    try {
      const model = this.gemini.getGenerativeModel({ model: "models/gemini-2.0-flash" });
  
      const prompt = `
        Você é um moderador de conteúdo e sua missão é analisar o comentário abaixo e:

        - Retornar "rejected" caso o comentário contenha conteúdo ofensivo, discriminatório, perturbador, sexual e/ou violento;
        - Retornar "approved" caso o comentário não contenha nenhum dos conteúdos citados. 

        O comentário estará no idioma Português do Brasil.
  
        Comentário: "${content}"
      `;
  
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text().toLowerCase().trim();
  
      if (text.includes("rejected")) {
        return "rejected";
      }
  
      if (text.includes("approved")) {
        return "approved";
      }
  
      return "pending";
    } catch (error) {
      console.error("Erro ao usar a API Gemini:", error);
      return "pending";
    }
  }  
}
