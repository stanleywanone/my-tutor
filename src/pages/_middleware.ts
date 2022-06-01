import { NextRequest, NextResponse } from 'next/server';

const basePath = process.env.UI_BASE_PATH;

export function middleware(req: NextRequest): NextResponse | null {
  const { pathname, origin } = req.nextUrl;

  if (pathname == '/') {
    return NextResponse.redirect(`${origin}/${basePath}/introduction`);
  }

  return NextResponse.next();
}
