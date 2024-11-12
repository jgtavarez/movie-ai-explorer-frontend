interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
}

export const Label = ({ text, ...props }: Props) => {
  return (
    <label {...props} className="text-sm text-gray-600 dark:text-gray-200">
      {text}
    </label>
  );
};
