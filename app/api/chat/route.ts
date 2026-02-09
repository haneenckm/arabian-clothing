import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "")

const WEBSITE_CONTEXT = `You are an AI assistant for Alyara, a premium Arabian clothing e-commerce platform. 
Our brand represents the fusion of ancient heritage with clinical modern elegance.

PRODUCTS CATALOG:
- Thobs: Premium White ($189), Beige Linen ($169), Navy Blue ($199), Charcoal Gray ($179), Emerald Green ($209), Cream Silk ($229), Burgundy ($219)
- Headwear: Traditional Kaffiyeh ($89), Premium Shemagh ($99), White Kaffiyeh ($84), Black Shemagh ($94)
- Hand Jewelry: Silver Hand Ring Set ($149), Platinum Multi-Finger Ring ($189), Ornate Silver Hand Jewelry ($169), Delicate Platinum Hand Ring ($179)
- Rings & Bracelets: Silver Bangles Set ($299), Silver Ring ($249), Pearl Bracelet ($189), Platinum Ring ($279), Diamond Silver Ring ($329), Crystal Bracelet ($219)
- Caps: Customized Cap ($79), Classic Black Cap ($69), White Arabic Cap ($74), Navy Blue Cap ($79), Forest Green Cap ($79)

POLICIES:
- Shipping: Free worldwide on all orders. Delivery in 3-5 business days.
- Returns: 30-day authentic return policy for any reason.
- Quality: Handcrafted with heritage materials and meticulous attention to detail.
- Location: Based in Malappuram, Kerala, India.

COMMUNICATION STYLE:
- Use a tone that is elegant, respectful, and sophisticated.
- Keep responses brief and helpful.
- If an item is not in our catalog, politely suggest a similar alternative we offer.
- Always redirect off-topic questions back to our collection or Arabian culture.`

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
