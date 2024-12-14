import { authFetch } from "@/lib/api";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();

    // Calling the NestJS backend with the already stream
    const response = await authFetch("/ai/chatbot", {
      method: "POST",
      body: JSON.stringify({ prompt }),
    });

    if (!response.body) {
      return NextResponse.json("No body response", { status: 500 });
    }

    // Create a TransformStream to forward chunks to the client
    const { readable, writable } = new TransformStream();
    response.body.pipeTo(writable);

    // Return the "readable" part of that stream to the client
    return new NextResponse(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
}
