import { FC, ReactNode } from "react";
import scss from "./LayoutSite.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Mediatek from "./mediatek/Mediatek";

interface ILayoutSite {
  children: ReactNode;
}

const LayoutSite: FC<ILayoutSite> = ({ children }) => {
  return (
    <div className={scss.LayoutSite}>
      <Header />
      <div className={scss.container}>
        <div className={scss.Home}>
          <Mediatek />
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutSite;
