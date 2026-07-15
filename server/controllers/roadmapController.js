import { GoogleGenAI } from "@google/genai";





export const generateRoadmap = async (req, res) => {

    const ai = new GoogleGenAI({});

    const interaction = await ai.interactions.create({
        model: "gemini-3.5-flash",
        input: "Explain how AI works in a few words",
    });
    console.log(interaction.output_text);


    res.send("Roadmap Generated!")
}
