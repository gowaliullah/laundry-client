import { FormProvider, useForm, UseFormProps, FieldValues } from 'react-hook-form';

interface FormProps<T extends FieldValues> extends UseFormProps<T> {
  onSubmit: (data: T) => void;
  children: React.ReactNode;
  className?: string;
}

const Form = <T extends FieldValues>({ onSubmit, children, className = '', ...options }: FormProps<T>) => {
  const methods = useForm<T>(options);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={`space-y-4 ${className}`}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
