interface Props {
  title: string;
  description: string;
}

export const Alert = ({ title, description }: Props) => {
  return (
    <div
      className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mt-6 lg:mt-8"
      role="alert"
    >
      <p className="font-bold">{title}</p>
      <p>{description}</p>
    </div>
  );
};
