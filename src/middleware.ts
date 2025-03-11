/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { currentUser } from './service/auth/AuthService'

const authRouter = ['/login', '/register']
// This function can be marked `async` if using `await` inside
export const middleware = async (request: NextRequest) => {
  // const { pathName } = request.nextUrl
  // const user = await currentUser()
  // if (!user) {
  //   if (authRouter.includes(pathName)) {
  //     return NextResponse.next()
  //   } else {
  //     return NextResponse.redirect(
  //       new URL(
  //         `http://localhost:3000/login?redirectPath=${pathName}`,
  //         request.url
  //       )
  //     )
  //   }
  // }
  console.log('first')
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/createShop'],
}
