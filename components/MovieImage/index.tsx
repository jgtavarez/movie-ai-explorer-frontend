import Image, { ImageProps } from "next/image";

type Props = ImageProps

export const MovieImage = ({ ...props }: Props) => {
  return (
    <>
      {props.src !== "N/A" ? (
        <div className="relative w-full h-full">
          <Image {...props} />
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-300 text-gray-500 text-lg font-semibold">
          No Image
        </div>
      )}
    </>
  );
};
