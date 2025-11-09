import axios from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (req: NextRequest, res: NextResponse) => {
  try {
    const {productId, feature} = await req.json();
    const cks = await cookies();
    const token = cks.get("token")?.value;
    const featureData = await axios.put(`${process.env.BACKEND_API}/products/featured`,
      {
        id:productId,
        featured: feature,
      },
      {
        headers:{
          Authorization: `bearer ${token}`
        }
      }
    );
    return NextResponse.json(
      featureData.data,
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