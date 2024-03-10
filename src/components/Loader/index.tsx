import "./style.scss";

interface Props {
  type?: string
}

const Loader = ({ type }: Props) => {
  return type === "screen" ? (
    <div className="loader">
      <div className="loader-icon"></div>
    </div>
  ) : (
    <div className="loader-icon mx-auto"></div>
  )
}

export default Loader;
