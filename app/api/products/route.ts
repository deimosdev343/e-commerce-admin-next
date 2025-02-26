import { NextApiRequest } from "next";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async (req: NextApiRequest, res: NextResponse) => {
  try {
    const params =  req.query;
    const cks = await cookies();
    const token =  cks.get("token")?.value;

    console.log(params);
    console.log(token);
    return NextResponse.json(
      {msg:"Test res"},
      {status:200}
    );    
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {msg:"Internal Server Error"}, 
      {status:500}
    );
  }
}