import { NextRequest } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Contact from "@/models/Contact";

export async function POST(req: NextRequest) {
  try {
    // 1. Establish database link
    await dbConnect();

    // 2. Parse inbound JSON payload
    const body = await req.json();
    const { name, email, subject, message } = body;

    // 3. Validate presence of required packet elements
    if (!name || !email || !message) {
      return Response.json(
        { error: "Required fields (name, email, and message) are missing." },
        { status: 400 }
      );
    }

    // 4. Create document in MongoDB
    const contactDoc = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    return Response.json(
      { success: true, message: "Payload successfully stored in MongoDB.", data: contactDoc },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("MongoDB ingestion failure:", error);
    return Response.json(
      { error: "Payload transmission error.", details: error.message },
      { status: 500 }
    );
  }
}
