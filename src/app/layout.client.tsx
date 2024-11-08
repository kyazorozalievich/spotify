"use client";
import ReduxProvider from "@/provider/ReduxProvider";
import { FC, ReactNode } from "react";

interface LayoutClientProps {
  children: ReactNode;
}

const LayoutClient: FC<LayoutClientProps> = ({ children }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};

export default LayoutClient;
