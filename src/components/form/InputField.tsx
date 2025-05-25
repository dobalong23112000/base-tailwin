import { useField, useFormikContext } from 'formik';
import { FC } from 'react';

interface InputFieldProps {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  min?: number;
  max?: number;
  step?: number;
}

const InputField: FC<InputFieldProps> = ({
  label,
  type = 'text',
  name,
  placeholder,
  className = '',
  disabled = false,
  min,
  max,
  step,
}) => {
  const [field, meta, helpers] = useField(name);
  const { submitCount } = useFormikContext();

  const showError = !!meta.error && (submitCount > 0);

  let inputClasses = `h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 ${className}`;

  if (disabled) {
    inputClasses += ` text-gray-500 border-gray-300 opacity-40 bg-gray-100 cursor-not-allowed dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700`;
  } else if (showError) {
    inputClasses += ` border-error-500 focus:border-error-300 focus:ring-error-500/20 dark:text-error-400 dark:border-error-500 dark:focus:border-error-800`;
  } else {
    inputClasses += ` bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800`;
  }

  return (
    <div>
      {label && <label htmlFor={name} className="mb-1 block text-sm font-medium">{label}</label>}
      <div className="relative">
        <input
          {...field}
          type={type}
          id={name}
          placeholder={placeholder}
          disabled={disabled}
          min={min}
          max={max}
          step={step}
          className={inputClasses}
          onBlur={(e) => {
            field.onBlur(e);
            helpers.setTouched(true);
          }}
          onChange={(e) => {
            field.onChange(e);
            if (meta.error) helpers.setError(undefined);
          }}
        />
      </div>
      {showError && <p className="mt-1.5 text-xs text-error-500">{meta.error}</p>}
    </div>
  );
};

export default InputField;
