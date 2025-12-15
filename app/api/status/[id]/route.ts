import { NextResponse, NextRequest } from "next/server";
import pool from '@/lib/db';

export async function GET(req: NextRequest,{ params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    
    if (!id || isNaN(Number(id))) 
    {
      return NextResponse.json({ error: "Invalid ID parameter" },);
    }
    const result = await pool.query('SELECT * FROM "leave" WHERE userid = $1', [Number(id)]);
    return NextResponse.json(
    {
      message: "User status fetched",
      data: result.rows
    });
  } catch (error) {
    console.error("Error fetching leaves:", error);
    return NextResponse.json({ error: error },);
  }
}
