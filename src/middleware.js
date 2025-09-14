import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(req) {
  const { pathname } = new URL(req.url);

  if (pathname.startsWith('/Admin')) {
    const token = req.cookies.get('isAuthenticated')?.value;

    console.log('Token:', token);

    if (!token) {
      console.log('No token found. Redirecting to /login...');
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  return NextResponse.next();
}
