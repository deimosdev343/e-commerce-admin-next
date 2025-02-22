import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: NextResponse) => {
  const token = req.headers.get("token");

  try {
    const backendRes = await axios.get(
      `${process.env.BACKEND_API}/auth`,
      {
        headers:{
          Authorization: `bearer ${token}`
        }
      }
    );
    return NextResponse.json(
      backendRes.data,
      {status: 200}
    );
    
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {msg:"Internal Server Error"}, 
      {status:500}
    );
  }
  
}