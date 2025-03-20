import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
      const cks = await cookies();
      const token =  cks.get("token")?.value;

      const categoryData = await axios.get(
        `${process.env.BACKEND_API}/category`,
      )
      
      return NextResponse.json(
        categoryData.data,
        {status:200}
      )
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {msg:"Internal Server Error"}, 
      {status:500}
    );
  }
}