import React from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  type?: string;
  placeholder?: string;
  name?: string;
  id?: string;
  required?: boolean;
  className?: string;
  label?: string;
  register?: UseFormRegisterReturn;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  name,
  id,
  required = false,
  className = '',
  label,
  register,
  error
}) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id || name} className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-purple-600 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        id={id || name}
        {...register}
        placeholder={placeholder}
        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
          error ? 'border-red-500' : 'border-gray-300'
        } ${className}`}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Input;

