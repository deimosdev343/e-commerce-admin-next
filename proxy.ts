import { NextURL } from 'next/dist/server/web/next-url';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { getAuth } from './app/services/getAuth';

export async function proxy(req: NextRequest) {
  const cks = await cookies();
  const token = cks.get("token")?.value;
  if(!token && req.nextUrl.pathname != '/login') {
    return NextResponse.redirect(new NextURL('/login', req.nextUrl));
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/', 
};