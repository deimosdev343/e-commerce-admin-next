import {v2 as cloudinary} from 'cloudinary';
import { NextRequest } from 'next/server';

export const POST = async (req: NextRequest) => {
  const  body = (await req.json()) as {
    paramsToSign: Record<string, string>
  };

  const {paramsToSign} = body;

  const signature = cloudinary.utils.api_sign_request(paramsToSign, process.env.CLOUDINARY_API_SECRET as string )
  return Response.json({signature});
  
}