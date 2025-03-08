import { currentUser } from '@/service/auth/AuthService'
import { IUser } from '@/types'
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'

interface IProviderProps {
  user: IUser | null
  isloading: boolean
  setUser: (user: IUser) => void
  setLoading: Dispatch<SetStateAction<boolean>>
}

const UserContext = createContext<IProviderProps | undefined>(undefined)

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null)
  const [isloading, setLoading] = useState(true)
  const handleUser = async () => {
    const user = await currentUser()
    setUser(user)
    setLoading(false)
  }
  useEffect(() => {
    handleUser()
  }, [isloading])

  return (
    <UserContext.Provider value={{ user, setUser, isloading, setLoading }}>
      {' '}
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

export default UserProvider
