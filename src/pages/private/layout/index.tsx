import { ReactNode } from "react";
import { Footer, Header } from "../../../components";

import "./style.scss";

interface Props {
  children: ReactNode;
  classesName?: string;
}

const Layout = ({ children, classesName }: Props) => {
  return (
    <main className={`layout ${classesName}`}>
      <Header />
      <div className="layout-content">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
