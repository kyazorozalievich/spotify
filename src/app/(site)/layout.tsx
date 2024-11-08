import LayoutSite from "@/components/layout/LayoutSite";
import { FC, ReactNode } from "react";

interface Ilayout {
  children: ReactNode;
}

const layout: FC<Ilayout> = ({ children }) => {
  return (
    <LayoutSite>
      <main>{children}</main>
    </LayoutSite>
  );
};

export default layout;
