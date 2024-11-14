interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const Button = ({ text, ...props }: Props) => {
  const { className, ...restProps } = props;
  return (
    <button
      {...restProps}
      className={`w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 disabled:bg-blue-400 ${className}`}
    >
      {text}
    </button>
  );
};
