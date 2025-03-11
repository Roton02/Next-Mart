'use server'

import { cookies } from 'next/headers'

export const createShop = async (data: FormData) => {
  try {
    console.log('asdfghjk', process.env.NEXT_PUBLIC_BASE_URL)
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/shop`, {
      method: 'POST',
      headers: {
        Authorization: (await cookies()).get('access-Token')!.value,
      },
      body: data,
    })

    return res.json()
  } catch (error: any) {
    console.log(error)
    return Error(error)
  }
}
