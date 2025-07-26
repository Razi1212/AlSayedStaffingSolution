// import { NextResponse } from 'next/server';
// import cookie from 'cookie';

// export function middleware(req) {
//   const { pathname } = new URL(req.url);



//   // Protect Admin routes
//   if (pathname.startsWith('/Admin')) {
//     const cookies = cookie.parse(req.headers.get('cookie') || '');
//     const token = cookies.isAuthenticated;

//     console.log('Token:', token);

//     if (!token) {
//       console.log('No token found. Redirecting to /login...');
//       return NextResponse.redirect(new URL('/login', req.url));
//     }
//   }

//   return NextResponse.next();
// }

import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import cookie from 'cookie';

export function middleware(req) {
  const { pathname } = new URL(req.url);

  if (pathname.startsWith('/Admin')) {
    const rawCookie = req.headers.get('cookie') || '';
    
    let token;
    try {
      const cookies = cookie.parse(rawCookie);
      token = cookies.isAuthenticated;
      console.log('Token:', token);
    } catch (err) {
      console.error('Cookie parse failed:', err);
      token = null;
    }

    if (!token) {
      console.log('No token found. Redirecting to /login...');
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  return NextResponse.next();
}
