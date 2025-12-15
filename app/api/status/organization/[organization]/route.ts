import { NextResponse, NextRequest } from "next/server";
import pool from '@/lib/db';

export async function GET(req: NextRequest,{ params }: { params:  Promise<{ organization: string }> }) {
  try {
    const { organization } = await params;
    
    const result = await pool.query('SELECT * FROM "leave" WHERE organization = $1', [organization]);
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
