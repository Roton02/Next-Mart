'use client'
import Logo from '@/app/assets/svg/Logo'
import { Button } from '../ui/button'
import { Heart, LogOut, ShoppingBag } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { logOut } from '@/service/auth/AuthService'
import { useUser } from '@/context/userContext'
import Link from 'next/link'

export default function Navbar() {
  const { user, setLoading } = useUser()
  const handleLogout = () => {
    logOut()
    setLoading(true)
  }
  return (
    <header className='border-b w-full'>
      <div className='container flex justify-between items-center mx-auto h-16 px-3'>
        <Link href={'/'} className='text-2xl font-black flex items-center'>
          <Logo />
          Next Mart
        </Link>
        <div className='max-w-md  flex-grow'>
          <input
            type='text'
            placeholder='Search for products'
            className='w-full max-w-6xl border border-gray-300 rounded-full py-2 px-5'
          />
        </div>
        <nav className='flex gap-2'>
          <Button variant='outline' className='rounded-full p-0 size-10'>
            <Heart />
          </Button>
          <Button variant='outline' className='rounded-full p-0 size-10'>
            <ShoppingBag />
          </Button>
          {user ? (
            <>
              <Link href={'/createShop'}>
              <Button variant='outline' className='rounded-full '>
                Create Shop
              </Button></Link>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src='https://github.com/shadcn.png' />
                    <AvatarFallback>USER</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Dashboard</DropdownMenuItem>
                  <DropdownMenuItem>My shop</DropdownMenuItem>
                  <DropdownMenuSeparator />

                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut /> Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Link href={'/login'}>
              <Button variant='outline' className='rounded-full cursor-pointer'>
                Login
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}
