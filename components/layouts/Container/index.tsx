import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <section className="container px-8 mx-auto xl:px-5 max-w-screen-lg mt-6 lg:mt-8">
      {children}
    </section>
  );
};
