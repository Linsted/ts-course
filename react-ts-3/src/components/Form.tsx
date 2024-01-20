import { useRef, useImperativeHandle, forwardRef } from "react";

type FormProps = React.ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

export type FormHandle = {
  clear: () => void;
};

const Form = forwardRef<FormHandle, FormProps>(function Form(
  { onSave, ...props },
  ref
) {
  const formRef = useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, () => {
    return {
      clear() {
        console.log("CLEARING!");
        formRef.current?.reset();
      },
    };
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted!");

    const formData = new FormData(event.currentTarget);

    const data = Object.fromEntries(formData);

    onSave(data);
  };
  return (
    <form onSubmit={handleSubmit} {...props} ref={formRef}>
      {props.children}
    </form>
  );
});

export default Form;
