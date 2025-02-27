import axios from "axios";
import { NextApiRequest } from "next";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const searchParams = req.nextUrl.searchParams;
    const cks = await cookies();
    const token =  cks.get("token")?.value;
    const productsData = await axios(
      `${process.env.BACKEND_API}/products`,
      {
        params:{
          limit: searchParams.get("limit"),
          category: searchParams.get("category"),
          sortBy: searchParams.get("sortBy"),
          name: searchParams.get("name") 
        }
      }
    );
    return NextResponse.json(
      productsData.data,
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