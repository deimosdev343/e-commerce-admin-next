import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    return NextResponse.json(
      {msg:"Nothing here"},
      {status:200}
    )
  } catch (err) {
     return NextResponse.json(
      {msg:"internal Server Error"},
      {status:500}
    );
  }
}