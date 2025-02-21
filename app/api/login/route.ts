import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (req: Request, res: NextApiResponse) => {
  try {
    const body = await req.json()
    const backendRes = await axios.post(
      `${process.env.BACKEND_API}/auth`,
       body
    ); 
      const cks = await cookies();
      cks.set("token", backendRes.data.token);
    return NextResponse.json(
      backendRes.data,
      {status: 200}
    )
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {msg:"Internal Server Error"}, 
      {status:500}
    );
  }
}