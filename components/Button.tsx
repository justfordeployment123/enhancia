import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-md transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-cyan-bright focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-gradient-sky text-white shadow-cyan hover:shadow-cyan-lg hover:-translate-y-0.5 hover:scale-105 active:translate-y-0 active:scale-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:scale-100',
    secondary: 'bg-transparent border-2 border-teal-deep text-teal-deep hover:bg-teal-deep hover:text-white',
    ghost: 'bg-transparent text-navy-dark hover:bg-cyan-bright/10 rounded-sm',
  }
  
  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-8 py-3.5 text-base',
    lg: 'px-10 py-4 text-lg',
  }
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

