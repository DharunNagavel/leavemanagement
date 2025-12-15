import { NextResponse,NextRequest } from "next/server";
import pool from "@/lib/db";

export async function POST(req: NextRequest,{ params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const leaveId = Number(id);
    if (isNaN(leaveId)) {
      return NextResponse.json({ message: "Invalid leave id" },);
    }
    await pool.query('UPDATE "leave" SET status = $1 WHERE id = $2',["rejected", leaveId]);
    return NextResponse.json({message: "Leave rejected successfully",});
  } catch (error) {
    console.error("Reject leave error:", error);
    return NextResponse.json({ message: error },);
  }
}
