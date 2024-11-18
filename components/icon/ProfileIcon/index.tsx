interface Props {
  variant?: "primary" | "secondary";
}

export const ProfileIcon = ({ variant = "primary" }: Props) => {
  if (variant === "secondary") {
    return (
      <svg
        stroke="none"
        fill="black"
        strokeWidth="0"
        viewBox="0 0 16 16"
        height="20"
        width="20"
      >
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
      </svg>
    );
  }
  return (
    <svg fill="#ffffff" width="16px" height="16px" viewBox="0 0 16 16">
      <g strokeLinecap="round" strokeLinejoin="round" />
      <g>
        <g>
          <path d="M10.31,9.12H5.5A4.52,4.52,0,0,0,1,13.62,2.34,2.34,0,0,0,1,14H14.78a2.34,2.34,0,0,0,0-.38A4.51,4.51,0,0,0,10.31,9.12ZM8,7.88A3.94,3.94,0,1,0,4.06,3.94,3.94,3.94,0,0,0,8,7.88Z" />
        </g>
      </g>
    </svg>
  );
};
