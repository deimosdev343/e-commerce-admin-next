import axios from "axios";
import { NextApiRequest } from "next";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const searchParams = req.nextUrl.searchParams;
    const cks = await cookies();
    const token =  cks.get("token")?.value;
    const productsData = await axios.get(
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

export const PUT = async (req: NextRequest, res: NextResponse) => {
  try {
    const {product} = await req.json();
    const cks = await cookies();
    const token =  cks.get("token")?.value;
    const productsData = await axios.put(
      `${process.env.BACKEND_API}/products`,
      product,
      {
        headers:{
          Authorization: `bearer ${token}`
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

export const DELETE = async (req: NextRequest, res: NextResponse) => {

  try {
    const searchParams = req.nextUrl.searchParams;
    const cks = await cookies();
    const token =  cks.get("token")?.value;

    const id = searchParams.get("id"); 
    await axios.delete(
      `${process.env.BACKEND_API}/products`,
      {
        params:{
          id
        },
        headers:{
          Authorization:`bearer ${token}`          
        }
      } 
    );
    return NextResponse.json(
      {msg:"Item removed successfully"},
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