import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')
  const url = request.nextUrl.clone()

  // www.celebix.co -> celebix.co yönlendirmesi
  if (host === 'www.celebix.co') {
    url.host = 'celebix.co'
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
