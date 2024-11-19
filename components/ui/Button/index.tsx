interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const Button = ({ text, ...props }: Props) => {
  const { className, ...restProps } = props;
  return (
    <button
      {...restProps}
      className={`w-full px-5 py-2.5 tracking-wide text-white text-sm transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none disabled:bg-blue-400 ${className}`}
    >
      {text}
    </button>
  );
};
