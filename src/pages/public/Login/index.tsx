import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { errorTranslate, signIn } from "../../../firebase/utils";

import "./style.scss";

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const login = async () => {
    setError(false);

    if (email && password) {
      const response = await signIn({ email, password });

      if (response.error) {
        setError(response.error);
        setErrorMsg(response.code ?? "general");
        return;
      }

      navigate("/home");
    }
  };

  return (
    <main className="login">
      <section className="login-box text-center">
        <figcaption className="login-logo mb-3">
          <img src="/images/jedi-logo.png" alt="JEDI+" height={50} />
          <figcaption className="text-light">TV</figcaption>
        </figcaption>

        <div className="login-form p-3">
          <div className="form-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="your@email.com"
              autoComplete="off"
              required
              onKeyUp={(e) => setEmail((e.target as HTMLInputElement).value)}
            />
          </div>

          <div className="form-group mb-4">
            <input
              type="password"
              className="form-control"
              placeholder="Y0urP455w0r#"
              autoComplete="off"
              required
              onKeyUp={(e) => setPassword((e.target as HTMLInputElement).value)}
            />
          </div>

          {error && (
            <div className="alert alert-danger">
              <p className="m-0">
                <small>{errorTranslate(errorMsg)}</small>
              </p>
            </div>
          )}

          <button className="btn btn-secondary w-100" onClick={() => login()}>
            <i className="bi bi-box-arrow-in-right me-2"></i>
            <span>Login</span>
          </button>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
