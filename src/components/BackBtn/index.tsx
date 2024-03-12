import { Link, useNavigate } from "react-router-dom";

interface Props {
  label?: string;
}

const BackBtn = ({ label }: Props) => {
  const navigate = useNavigate();

  return (
    <Link
      to={"/back"}
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
      className="text-light text-decoration-none"
    >
      <i className="bi bi-arrow-left me-2"></i>
      <span>{label ?? "Back"}</span>
    </Link>
  );
};

export default BackBtn;
