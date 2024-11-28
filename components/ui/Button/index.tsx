import { LoadingIcon } from "@/components/icon";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  loading?: boolean;
  variant?: "primary" | "secondary";
}

export const Button = ({
  text,
  loading = false,
  variant = "primary",
  ...props
}: Props) => {
  const { className, ...restProps } = props;
  return (
    <button
      {...restProps}
      disabled={loading || props.disabled}
      className={`${
        variant === "primary"
          ? "bg-blue-500 hover:bg-blue-400 active:bg-blue-600 disabled:bg-blue-400 text-sm"
          : "bg-pink-500 hover:bg-pink-400 active:bg-pink-600 disabled:bg-pink-400 text-xs uppercase font-bold"
      } text-white px-5 duration-200 transition-colors rounded-md focus:outline-none w-full disabled:cursor-wait py-2.5 hover:shadow-md shadow transform tracking-wide ${className}`}
    >
      {loading ? (
        <div className="flex justify-center w-full">
          <LoadingIcon />
        </div>
      ) : (
        text
      )}
    </button>
  );
};
