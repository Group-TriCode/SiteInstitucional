import React from 'react';

interface TextareaProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name?: string;
  id?: string;
  required?: boolean;
  className?: string;
  label?: string;
  rows?: number;
}

const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  value,
  onChange,
  name,
  id,
  required = false,
  className = '',
  label,
  rows = 4
}) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id || name} className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-purple-600 ml-1">*</span>}
        </label>
      )}
      <textarea
        id={id || name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-vertical ${className}`}
      />
    </div>
  );
};

export default Textarea;

