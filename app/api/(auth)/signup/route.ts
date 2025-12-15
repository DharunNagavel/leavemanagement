import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) 
    {
        try
        {
            const {name,email,role,organization,password} = await req.json();
            const hashedPassword = await bcrypt.hash(password, 10);
            const existingUser = await pool.query('SELECT id FROM "user" WHERE email = $1',[email]);
            if (existingUser.rows.length > 0)
            {
                return NextResponse.json({ message: "Email Already Exist" });
            }
            const res = await pool.query('INSERT INTO "user" ("Name", email, role, orgnaization, password) VALUES ($1, $2, $3, $4, $5) RETURNING *',[name, email, role, organization, hashedPassword]);
            const token = jwt.sign({userId: res.rows[0].id,email: email,},process.env.JWT_SECRET!,{ expiresIn: "1d" });
            return NextResponse.json(
                { 
                    message: "User registered successfully",
                    token : token,
                    data : res.rows[0]
                });
        }
        catch (error)
        {
            console.error(error);
            return NextResponse.json({message : error});
        }
    }