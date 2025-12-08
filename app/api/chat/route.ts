import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "")

const WEBSITE_CONTEXT = `You are an AI assistant for Alyara, an Arabian clothing e-commerce website. 
You can ONLY answer questions about:
- Our products: Premium White Thob ($189), Silver Bangles Set ($299), Beige Linen Thob ($169), Customized Cap ($79), Silver Ring ($249), Navy Blue Thob ($199), Traditional Kaffiyeh ($89), Premium Shemagh ($99), Silver Hand Ring Set ($149), Pearl Bracelet ($189)
- Product categories: Thobs, Headwear, Hand Jewelry, Bracelets, Rings, Caps
- General information about Arabian clothing and our services
- Product details like prices, ratings, and availability
- Shipping and returns information

If the user asks anything unrelated to our website or products, politely redirect them back to our offerings.
Keep responses brief, friendly, and helpful.`

export async function POST(req: Request) {
  try {
    console.log("Chat API called")
    const { message } = await req.json()
    console.log("Received message:", message)

    if (!message || typeof message !== "string") {
      console.log("Invalid message format")
      return Response.json({ error: "Invalid message" }, { status: 400 })
    }

    if (!process.env.GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY is not set")
      return Response.json({ 
        message: "I'm currently unavailable. Please try again later or contact support." 
      })
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

    const chat = model.startChat({
      history: [],
      systemInstruction: WEBSITE_CONTEXT,
    })

    console.log("Sending message to Gemini...")
    const result = await chat.sendMessage(message)
    const text = result.response.text()
    console.log("Received response from Gemini")

    return Response.json({ message: text })
  } catch (error: any) {
    console.error("Chat error:", error)
    console.error("Error details:", error.message)
    return Response.json({ 
      message: "I apologize, but I'm having trouble responding right now. Please try asking your question again." 
    })
  }
}
