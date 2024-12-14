interface Props {
  errors: string[];
}

export const ErrorsList = ({ errors }: Props) => {
  return (
    <ul>
      {errors.map((error) => (
        <li
          className={`text-red-500 text-sm ${
            errors.length > 1 ? "list-disc" : "list-none"
          }`}
          key={error}
          aria-live="polite"
        >
          {error}
        </li>
      ))}
    </ul>
  );
};
