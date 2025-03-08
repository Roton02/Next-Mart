'use server'
import { jwtDecode } from 'jwt-decode'
import { cookies } from 'next/headers'
import { FieldValues } from 'react-hook-form'

export const registerUser = async (user: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  const data = await res.json()
  if (data.success) {
    ;(await cookies()).set('access-Token', data?.data?.accessToken)
  }
  return data
}
export const loginuser = async (user: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  const data = await res.json()
  if (data.success) {
    ;(await cookies()).set('access-Token', data?.data?.accessToken)
  }
  return data
}

export const currentUser = async () => {
  const accessToken = (await cookies()).get('access-Token')?.value
  let decodedUser = null
  if (accessToken) {
    decodedUser = await jwtDecode(accessToken)
    return decodedUser
  }
  return decodedUser
}

export const logOut = async () => {
  ;(await cookies()).delete('access-Token')
}
