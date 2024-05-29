import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import LoginHistory from "@/models/LoginHistory";
import { signupSchema } from "@/schemas/auth";
import bcrypt from "bcryptjs";

const handleSignup = async (request: NextRequest, response: NextResponse) => {
  try {
    const reqBody = await request.json();
    // Validate the request body against the login schema
    const parsedBody = signupSchema.safeParse(reqBody);
    if (!parsedBody.success) {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    // Find the user
    const user = await User.findOne({ email: parsedBody.data.email });
    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(parsedBody.data.password, 10);

    // Create a new user
    const newUser = new User({
      email: parsedBody.data.email,
      password: hashedPassword,
    });
    await newUser.save();

    // success response
    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};

export default handleSignup;
