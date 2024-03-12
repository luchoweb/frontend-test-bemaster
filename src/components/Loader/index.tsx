import "./style.scss";

interface Props {
  fullscreen?: boolean;
}

const Loader = ({ fullscreen }: Props) => {
  return fullscreen ? (
    <div className="loader">
      <div className="loader-icon"></div>
    </div>
  ) : (
    <div className="loader-icon mx-auto"></div>
  );
};

export default Loader;
