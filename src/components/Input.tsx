import type { InputHTMLAttributes } from "react"
import { forwardRef } from "react"
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-1 w-full">
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>

        <input
          ref={ref}
          {...rest}
          className={`border rounded-md p-2 outline-none transition
          ${error 
            ? "border-red-500 focus:ring-2 focus:ring-red-400" 
            : "border-gray-300 focus:ring-2 focus:ring-blue-500"
          }`}
        />

        {error && (
          <span className="text-red-500 text-xs">
            {error}
          </span>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

export default Input