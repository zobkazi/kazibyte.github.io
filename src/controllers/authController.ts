import { NextRequest, NextResponse } from "next/server";
import User from "../models/User";
import LoginHistory from "@/models/LoginHistory";
import { loginSchema } from "@/schemas/auth/index";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/kazibyte_org")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    // Validate the request body against the login schema
    const parsedBody = loginSchema.safeParse(reqBody);

    if (!parsedBody.success) {
      return NextResponse.json({ error: parsedBody.error }, { status: 400 });
    }

    return NextResponse.json(reqBody);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
