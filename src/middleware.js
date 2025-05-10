import { NextResponse } from 'next/server';
import cookie from 'cookie';

export function middleware(req) {
  const { pathname } = new URL(req.url);



  // Protect Admin routes
  if (pathname.startsWith('/Admin')) {
    const cookies = cookie.parse(req.headers.get('cookie') || '');
    const token = cookies.isAuthenticated;

    console.log('Token:', token);

    if (!token) {
      console.log('No token found. Redirecting to /login...');
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  return NextResponse.next();
}
