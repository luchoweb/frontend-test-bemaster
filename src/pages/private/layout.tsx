import { ReactNode } from "react"
import { Footer, Header } from "../../components";

interface Props {
  children: ReactNode,
}

const Layout = ({ children }: Props) => {
  return (
    <main className="layout">
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default Layout;
