import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "")

const WEBSITE_CONTEXT = `You are an AI assistant for Alyara, an Arabian clothing e-commerce website. 
You can ONLY answer questions about:
- Our products: Premium White Thob ($189), Silver Bangles Set ($299), Beige Linen Thob ($169), Customized Cap ($79), Silver Ring ($249), Navy Blue Thob ($199)
- Product categories: Thobs, Bracelets, Caps, Rings
- General information about Arabian clothing and our services
- Product details like prices, ratings, and availability

If the user asks anything unrelated to our website or products, politely redirect them back to our offerings.
Keep responses brief and helpful.`

export async function POST(req: Request) {
  try {
    const { message } = await req.json()

    if (!message || typeof message !== "string") {
      return Response.json({ error: "Invalid message" }, { status: 400 })
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

    const chat = model.startChat({
      history: [],
      systemInstruction: WEBSITE_CONTEXT,
    })

    const result = await chat.sendMessage(message)
    const text = result.response.text()

    return Response.json({ message: text })
  } catch (error) {
    console.error("Chat error:", error)
    return Response.json({ error: "Failed to process message" }, { status: 500 })
  }
}
