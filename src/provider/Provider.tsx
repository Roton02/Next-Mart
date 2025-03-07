"use client"
import UserProvider from "@/context/userContext"

function Provider({children}: {children: React.ReactNode}) {
  return <UserProvider>{children}</UserProvider>
}

export default Provider