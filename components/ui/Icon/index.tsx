interface Props {
  variant: "sparkle";
  size?: number;
}

export const Icon = ({ variant, size = 18 }: Props) => {
  if (variant == "sparkle") {
    return (
      <svg width={size} height={size} viewBox="0 0 64 64">
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
      </svg>
    );
  }
  return null;
};
