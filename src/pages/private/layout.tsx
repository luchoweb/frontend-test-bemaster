import { ReactNode } from "react"
import { Header } from "../../components";

interface Props {
  children: ReactNode,
}

const Layout = ({ children }: Props) => {
  return (
    <main className="layout">
      <Header />
      {children}
    </main>
  )
}

export default Layout;
