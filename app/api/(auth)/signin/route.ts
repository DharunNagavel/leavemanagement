import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {

  try {
    const { email, password } = await req.json();
    if (!email || !password) 
    {
      return NextResponse.json({ message: "Email and password required" });
    }
    const userRes = await pool.query(
      'SELECT * FROM "user" WHERE email = $1',
      [email]
    );

    if (userRes.rows.length === 0) 
    {
      return NextResponse.json({ message: "User not found" });
    }
    const user = userRes.rows[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) 
    {
      return NextResponse.json({ message: "Invaild Password" });
    }
    const token = jwt.sign({userId: user.id,email: user.email,},process.env.JWT_SECRET!,{ expiresIn: "1d" });
    return NextResponse.json(
      {
        message: "Login successful",
        token : token,
        id : user.id,
        name : user.Name,
        email : user.email,
        role : user.role,
        organization : user.orgnaization
      });
  } 
  catch (error) 
  {
    console.error(error);
    return NextResponse.json({message : error});
  }
}
