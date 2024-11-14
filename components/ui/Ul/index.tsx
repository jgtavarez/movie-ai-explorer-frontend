interface Props {
  lists: string[];
}

export const Ul = ({ lists }: Props) => {
  return (
    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
      {lists.map((list) => (
        <li key={list} className="text-gray-400">
          <span className="text-gray-600">{list}</span>
        </li>
      ))}
    </ul>
  );
};
