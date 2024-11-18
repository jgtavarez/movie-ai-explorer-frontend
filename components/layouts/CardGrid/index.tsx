import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const CardGrid = ({ children }: Props) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <>
      <div className="grid gap-10 md:grid-cols-2 lg:gap-10 mt-6 lg:mt-8">
        {childrenArray.slice(0, 2).map((child, index) => (
          <React.Fragment key={index}>{child}</React.Fragment>
        ))}
      </div>
      <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
        {childrenArray.slice(2).map((child, index) => (
          <React.Fragment key={index + 2}>{child}</React.Fragment>
        ))}
      </div>
    </>
  );
};
