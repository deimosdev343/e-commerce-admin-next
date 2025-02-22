import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: NextResponse) => {
  const token = req.headers.get("token");

  try {
   const cks = await cookies();
   cks.delete("token");
    return NextResponse.json(
      {msg:"Logout successful"},
      {status: 200}
    );
    
  } catch (err) {
    return NextResponse.json(
      {msg:"Internal Server Error"}, 
      {status:500}
    );
  }
}