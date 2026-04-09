import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')
  const url = request.nextUrl.clone()
  const pathname = request.nextUrl.pathname

  // www.celebix.co -> celebix.co yönlendirmesi (301 Permanent)
  if (host?.startsWith('www.')) {
    url.host = 'celebix.co'
    return NextResponse.redirect(url, 301)
  }

  // Root URL / -> /tr yönlendirmesi (301 Permanent)
  if (pathname === '/') {
    url.pathname = '/tr'
    return NextResponse.redirect(url, 301)
  }

  // Tailing slash düzeltmesi - /tr/ -> /tr (301 Permanent)
  if (pathname === '/tr/') {
    url.pathname = '/tr'
    return NextResponse.redirect(url, 301)
  }
  if (pathname === '/en/') {
    url.pathname = '/en'
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/',
    '/tr/:path*',
    '/en/:path*',
  ],
}
