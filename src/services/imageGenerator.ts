import { GoogleGenAI } from "@google/genai";

export const generateCVPreviews = async () => {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
  const styles = [
    "Modern Professional", "Minimalist", "Corporate Executive", "Creative Designer",
    "Tech Developer", "Business Consultant", "Marketing Specialist", "Graduate / Entry-Level",
    "ATS-Friendly", "Clean Elegant", "Dark Mode", "Startup Style",
    "Academic", "Product Manager", "UI/UX Designer", "Data Scientist",
    "Freelancer", "Sales Professional", "Healthcare Professional", "International Standard"
  ];

  const previews: Record<string, string> = {};

  for (const style of styles) {
    const prompt = `A professional ${style} CV template preview for an AI platform called CVEEEZ. 
    Include:
    - Profile photo circle
    - Name and job title
    - Experience timeline
    - Skills bars
    - Clean typography
    - Blue and purple accent colors (#1E40AF and #7C3AED)
    - Minimal white background
    
    Style requirements:
    - Flat front view of a document
    - Modern SaaS design style
    - Sharp readable placeholder text
    - High contrast
    - No hands, no desks, no laptops, no office scenes.
    - Only generate the resume layout preview.`;
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: { parts: [{ text: prompt }] },
      config: { imageConfig: { aspectRatio: "3:4" } }
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        previews[style] = `data:image/png;base64,${part.inlineData.data}`;
      }
    }
  }

  return previews;
};
