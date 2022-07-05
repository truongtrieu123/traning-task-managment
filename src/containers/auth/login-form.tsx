import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form";
import { useState } from "react";
import AlertMessage from "components/aler-message";
import { useAppDispatch, useAppSelector } from "utils/hooks";
import Link from "next/link";
import { loginUser } from "store/actions/auth-action";

const defaultFormValue = {
  username: "",
  password: "",
}

const LoginForm = () => {
  const authStore = useAppSelector((state)=>state.authReducer);
  const dispatch = useAppDispatch();
  
  const [loginForm, setLoginForm] = useState(defaultFormValue);
  const [alert, setAlert] = useState(null);
  const { username, password } = loginForm;

  const onChangeLoginForm = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const login = async (event) => {
    event.preventDefault();

    try {
      const res = await dispatch(loginUser({...loginForm}));
      if (!res.success) {
        setAlert({ type: "danger", message: res.message });
        setTimeout(() => setAlert(null), 5000);
      }
    } catch (error) {
    }
  };

  return (
    <>
      <Form className="my-4" onSubmit={login}>
        <AlertMessage info={alert} />

        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            required
            value={username}
            onChange={onChangeLoginForm}
            className="my-2"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
            value={password}
            onChange={onChangeLoginForm}
            className="my-2"
          />
        </Form.Group>
        <Button variant="success" type="submit" className="my-2">
          Login
        </Button>
      </Form>
      <p>
        <span className = 'px-2'>Don't have an account?</span>
        <Link href="/register">
          <Button variant="info" size="sm" className="ml-2">
            Register
          </Button>
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
