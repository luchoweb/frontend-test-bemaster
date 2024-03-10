import { ReactNode } from "react"
import { Footer, Header } from "../../../components";

import "./style.scss";

interface Props {
  children: ReactNode,
}

const Layout = ({ children }: Props) => {
  return (
    <main className="layout">
      <Header />
      <div className="layout-content">
        {children}
      </div>
      <Footer />
    </main>
  )
}

export default Layout;
