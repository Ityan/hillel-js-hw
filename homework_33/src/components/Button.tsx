type ButtonProps = {
  onClick: () => void;
  children: string;
};

function Button({ onClick, children }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
