import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";


export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const cks = await cookies();
    const token =  cks.get("token")?.value;
    const viewData = await axios.get(
      `${process.env.BACKEND_API}/stats/topOrders`,
      {
        headers:{
          Authorization: `bearer ${token}`
        }
      }
    );
    return NextResponse.json(
      viewData.data,
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