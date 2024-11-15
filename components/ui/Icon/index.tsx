interface Props {
  variant: "sparkle" | "star";
  size?: number;
  fill?: string;
}

const handleReturnIcon = (variant: Props["variant"]) => {
  if (variant == "sparkle") {
    return (
      <g>
        <path
          d="M22 0c0 16.9-9.1 32-22 32c12.9 0 22 15.1 22 32c0-16.9 9.1-32 22-32c-12.9 0-22-15.1-22-32"
          fill="#3b82f6"
        />
        <path
          d="M53 0c0 8.4-4.6 16-11 16c6.4 0 11 7.6 11 16c0-8.4 4.6-16 11-16c-6.4 0-11-7.6-11-16"
          fill="#3b82f6"
        />
        <path
          d="M48 32c0 8.4-4.6 16-11 16c6.4 0 11 7.6 11 16c0-8.4 4.6-16 11-16c-6.4 0-11-7.6-11-16"
          fill="#3b82f6"
        />
      </g>
    );
  }
  if (variant == "star") {
    return (
      <g>
        <path
          fillRule="evenodd"
          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
          clipRule="evenodd"
        />
      </g>
    );
  }
  return null;
};

export const Icon = ({ variant, size = 18, fill = "black" }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      preserveAspectRatio="xMidYMid meet"
      fill={fill}
    >
      {handleReturnIcon(variant)}
    </svg>
  );
};
