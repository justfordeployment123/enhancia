'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface User {
  id: string
  name: string
  email: string
  avatar?: string
  credits: number
  plan: 'free' | 'starter' | 'professional' | 'unlimited'
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  updateCredits: (credits: number) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Check for stored auth on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('enhancia_user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
      setIsAuthenticated(true)
    }
  }, [])

  const login = async (email: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const mockUser: User = {
      id: '1',
      name: 'Sarah Johnson',
      email: email,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
      credits: 47,
      plan: 'professional'
    }
    
    setUser(mockUser)
    setIsAuthenticated(true)
    localStorage.setItem('enhancia_user', JSON.stringify(mockUser))
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem('enhancia_user')
  }

  const updateCredits = (credits: number) => {
    if (user) {
      const updatedUser = { ...user, credits }
      setUser(updatedUser)
      localStorage.setItem('enhancia_user', JSON.stringify(updatedUser))
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, updateCredits }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

