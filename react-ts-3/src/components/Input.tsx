import { forwardRef, type ComponentPropsWithoutRef } from "react";

type InputProps = {
  label: string;
  id: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, children, id, ...props },
  ref
) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <span>{children}</span>
      <input id={id} {...props} ref={ref} name={id} />
    </p>
  );
});

export default Input;
