import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  icon?: React.ReactNode
}

export default function Input({
  label,
  error,
  icon,
  className = '',
  ...props
}: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-navy-dark mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-medium">
            {icon}
          </div>
        )}
        <input
          className={`
            w-full h-[52px] px-5 py-4 bg-white border-2 rounded-md
            ${icon ? 'pl-12' : ''}
            ${error ? 'border-error bg-error/5' : 'border-gray-soft'}
            focus:outline-none focus:border-cyan-bright focus:ring-4 focus:ring-cyan-bright/10
            transition-all duration-150
            ${className}
          `}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-error">{error}</p>
      )}
    </div>
  )
}

