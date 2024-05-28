import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const reqBody = await request.json();

    const { email, password } = reqBody;
    console.log(reqBody);
    console.log(email, password);

    return NextResponse.json({ email, password });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function GET(request: NextRequest, response: NextResponse) {
  return NextResponse.json({ message: "hello" });
}
