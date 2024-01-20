type ButtonProps = {
  el: "button";
} & React.ComponentPropsWithoutRef<"button">;

type AnchorProps = {
  el: "link";
} & React.ComponentPropsWithoutRef<"a">;

const Button = (props: ButtonProps | AnchorProps) => {
  return props.el === "link" ? (
    <a className="button" href="" {...props} />
  ) : (
    <button className="button" {...props}></button>
  );
};

export default Button;
