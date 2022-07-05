import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import React, { FunctionComponent, ReactNode } from "react";
import Navbar from "./navbar";

interface IProps {
  children: JSX.Element;
}

const DefaultLayout: FunctionComponent<IProps> = ({ children }: IProps) => {
  return (
    <div>
      <Navbar></Navbar>
      <>{children}</>
    </div>
  );
};

export default DefaultLayout;
