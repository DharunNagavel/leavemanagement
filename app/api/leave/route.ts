import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(req: NextRequest) 
    {
        try
        {
            const {name,datefrom,dateto,organization,purpose,exam,year,section,userid} = await req.json();
            const res = await pool.query('INSERT INTO "leave" (name, datefrom, dateto, organization, purpose, exam, year, section, userid) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',[name, datefrom, dateto, organization, purpose, exam, year, section, userid]);
            const row = res.rows[0];
            return NextResponse.json(
                { 
                    message: "Leave Registered Successfully",
                    data: row
                });
        }
        catch (error)
        {
            console.error(error);
            return NextResponse.json({message : error});
        }
    }