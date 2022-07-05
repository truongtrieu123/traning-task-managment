import React, { FunctionComponent, ReactNode } from "react";
import Navbar from "./navbar";

interface IProps {
  children: ReactNode;
}

const DefaultLayout: FunctionComponent<IProps> = ({ children }: IProps) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
    </>
  );
};

export default DefaultLayout;
