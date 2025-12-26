import axios from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (req: NextRequest, res: NextResponse) => {
  try {
    const {discountId, prodId} = await req.json();
    const cks = await cookies();
    const token = cks.get("token")?.value;
    const discountData = await axios.put(`${process.env.BACKEND_API}/discounts/items/delete`, 
      {
        discountId,
        prodId
      },
      {
        headers:{
          Authorization: `bearer ${token}`
        }
      }
    );
    return NextResponse.json(
      {msg:"product added to discount"},
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