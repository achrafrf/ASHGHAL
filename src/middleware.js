import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('token')?.value;
  const role = request.cookies.get('role')?.value;
  const { pathname } = request.nextUrl;

  // 1. حماية الداشبورد (للأدمين فقط)
  if (pathname.startsWith('/dashboard')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    if (role !== 'ROLE_ADMIN') {
      return NextResponse.redirect(new URL('/', request.url)); // رجعو للهوم إلا ماشي أدمين
    }
  }

  // 2. حماية صفحة المستخدم العادي
  if (pathname.startsWith('/my-rentals')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

// حدد الصفحات اللي بغيتي الميدل-وير يراقبها
export const config = {
  matcher: ['/dashboard/:path*', '/my-rentals/:path*'],
};