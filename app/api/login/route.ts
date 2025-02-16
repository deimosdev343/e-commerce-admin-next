import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const POST = async (req: Request, res: NextApiResponse) => {
  try {
    console.log(req.json())
    const backendRes = await axios.post(
      `${process.env.BACKEND_API}/auth`,
      req.json()
    ); 

    return NextResponse.json(
      backendRes.data,
      {status: 200}
    )
  } catch (err) {
    console.log(err);
    NextResponse.json(
      {msg:"Internal Server Error"}, 
      {status:500}
    );
  }
}