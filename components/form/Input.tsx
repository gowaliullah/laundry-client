import { useFormContext, FieldValues, RegisterOptions } from 'react-hook-form';

interface FormInputProps {
  name: string;
  label: string;
  value?: any;
  type?: string;
  placeholder?: string;
  rules?: RegisterOptions;
}

const Input = ({ name, label, type = 'text', placeholder = label, rules, value }: FormInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FieldValues>();

  const error = errors[name]?.message as string | undefined;

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        id={name}
        type={type}
        value={value}
        placeholder={placeholder}
        {...register(name, rules)}
        className={`w-full px-4 py-2 border ${
          error ? 'border-red-500' : 'border-gray-300'
        } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Input;
