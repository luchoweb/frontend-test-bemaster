import { Link, useNavigate } from "react-router-dom";

interface Props {
  label?: string;
  className?: string;
}

const BackBtn = ({ label, className }: Props) => {
  const navigate = useNavigate();
  const classesName = className ?? "text-light text-decoration-none";

  return (
    <Link
      to={"/back"}
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
      className={classesName}
    >
      <i className="bi bi-arrow-left me-2"></i>
      <span>{label ?? "Back"}</span>
    </Link>
  );
};

export default BackBtn;
