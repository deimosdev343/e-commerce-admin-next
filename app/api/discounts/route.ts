import axios from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
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

export const GET = async (req: NextRequest) => {
 try {
    const searchParams = req.nextUrl.searchParams;
    const cks = await cookies();
    const token = cks.get("token")?.value;
    const discountData = await axios.get(
      `${process.env.BACKEND_API}/discounts`,
      {
        params:{
          startDate: searchParams.get("startDate"),
          endDate: searchParams.get("endDate"),
          limit: 10,
          description: searchParams.get("description") 
        },
        headers:{
          Authorization: `bearer ${token}`
        }
      }
    );
    console.log(discountData.data)
    return NextResponse.json(
      discountData.data,
      {status:200}
    );
 } catch (err) {
    return NextResponse.json(
      {msg:"Internal Server Error"}, 
      {status:500}
    );
 } 
}

export const DELETE  = async (req: NextRequest) => {
  try {
    const searchParams = req.nextUrl.searchParams;
    const cks = await cookies();
    const token = cks.get("token")?.value;
    await axios.delete(`${process.env.BACKEND_API}/discounts`, 
      {
        params: {
          discountId: searchParams.get("discountId")
        },
        headers: {
          Authorization: `bearer ${token}`
        }
      }
    );
    return NextResponse.json(
      {msg:"Discount Deleted Successfully"},
      {status:200}
    );
  } catch (err) {
    return NextResponse.json(
      {msg:"Internal Server Error"}, 
      {status:500}
    );
  }
}

export const PUT = async (req: NextRequest) => {
  try {
    const {discountId,description, image, discountAmount, startDate, endDate, background} = await req.json();
    const cks = await cookies();
    const token = cks.get("token")?.value;
    await axios.put(`${process.env.BACKEND_API}/discounts`,
      {
        discountId,
        description,
        image,
        discountAmount,
        startDate,
        endDate,
        background
      },
      {
        headers: {
          Authorization: `bearer ${token}`
        }
      }
    );
    return NextResponse.json(
      {msg:"Discount updated successfully"},
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