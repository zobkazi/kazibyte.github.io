import { NextRequest, NextResponse } from "next/server";
import { loginSchema } from "@/schemas/auth";

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const reqBody = await loginSchema.safeParseAsync(await request.json());

    console.log(reqBody);

    if (!reqBody.success) {
      return NextResponse.json({ error: reqBody.error }, { status: 400 });
    }

    return NextResponse.json(reqBody.data);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function GET(request: NextRequest, response: NextResponse) {
  return NextResponse.json({ message: "hello" });
}
