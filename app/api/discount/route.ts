import axios from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const {description, image, discountAmount, startDate, endDate, background} = await req.json();
  const cks = await cookies();
  const token = cks.get("token")?.value;
  const discountData = await axios.post(`${process.env.BACKEND_API}/discounts/`, 
    {
      description,
      image,
      discountAmount,
      startDate,
      endDate,
      background
    },
    {
      headers:{
        Authorization: `bearer ${token}`
      }
    }
  );
  return NextResponse.json(
    discountData.data,
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