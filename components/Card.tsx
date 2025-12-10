import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export default function Card({ children, className = '', hover = false, onClick }: CardProps) {
  const baseStyles = 'bg-white rounded-lg border border-gray-soft shadow-sm'
  const hoverStyles = hover ? 'transition-all duration-250 hover:-translate-y-1 hover:shadow-cyan-xl hover:border-cyan-bright cursor-pointer' : ''
  
  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

