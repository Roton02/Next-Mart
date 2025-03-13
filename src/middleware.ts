import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { currentUser } from './service/auth/AuthService'

const authRouter = ['/login', '/register']
type role = keyof typeof roleBasedPrivateRoutes
const roleBasedPrivateRoutes = {
  user: [/^\/user/, /^\/createShop/],
  admin: [/^\/admin/],
}
// This function can be marked `async` if using `await` inside
export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl
  const user = await currentUser()
  console.log('user', user)
  if (!user) {
    if (authRouter.includes(pathname)) {
      return NextResponse.next()
    } else {
      return NextResponse.redirect(
        new URL(
          `http://localhost:3000/login?redirectPath=${pathname}`,
          request.url
        )
      )
    }
  }
  if (user?.role && roleBasedPrivateRoutes[user?.role as role]) {
    const routes = roleBasedPrivateRoutes[user?.role as role]
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next()
    } else {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }
  console.log('first')
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/createShop', '/user', '/admin', '/user/:page', '/admin/:page'],
}
