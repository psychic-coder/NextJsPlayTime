import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";

//nextres and nextreq is used for req and res
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;
    console.log(reqBody);
    //check whether user already exists
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }
    //hashed password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    const { password: pass, ...rest } = savedUser._doc;

    console.log(savedUser);

    //send verification email

    await sendEmail({email,emailType:"VERIFY",userId:savedUser._id})

    return NextResponse.json({
      message: "User created Successfully",
      success: true,
      rest,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
