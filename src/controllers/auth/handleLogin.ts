import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import LoginHistory from "@/models/LoginHistory";
import { loginSchema } from "@/schemas/auth";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/connectDB";

connectDB();

const handleLogin = async (request: NextRequest, response: NextResponse) => {
  try {
    const reqBody = await request.json();

    // Validate the request body against the login schema
    const parsedBody = loginSchema.safeParse(reqBody);

    if (!parsedBody.success) {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    // Find the user
    const user = await User.findOne({ email: parsedBody.data.email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(
      parsedBody.data.password,
      user.password
    );
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Log the login history

    return NextResponse.json({ message: "Login successful" });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};

export default handleLogin;
