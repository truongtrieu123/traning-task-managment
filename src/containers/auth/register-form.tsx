import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "utils/hooks";
import { useRouter } from "next/router";
import AlertMessage from "components/aler-message";
import Link from "next/link";
import { registerUser } from "store/actions/auth-action";

const defaultFormValue = {
  username: "",
  password: "",
  confirmPassword: "",
};

const RegisterForm = () => {
  const authStore = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [registerForm, setRegisterForm] = useState(defaultFormValue);
  const [alertMessage, setAlertMessage] = useState(null);
  const { username, password, confirmPassword } = registerForm;

  const onChangeRegisterForm = (event) => {
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });
  };

  const register = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setAlertMessage({
        type: "danger",
        message: "Password and confirm password does not match",
      });
      setTimeout(() => setAlertMessage(null), 5000);
      return;
    }
    try {
      const registerData = await dispatch(registerUser(registerForm));
      if (registerData.success) {
        router.push("/dashboard");
      } else {
        setAlertMessage({ type: "danger", message: registerData.message });
        setTimeout(() => setAlertMessage(defaultFormValue), 5000);
      }
    } catch (error) {}
  };

  return (
    <>
      <Form className="my-4" onSubmit={register}>
        <AlertMessage info={alertMessage} />

        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            required
            value={username}
            onChange={onChangeRegisterForm}
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
            onChange={onChangeRegisterForm}
            className="my-2"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            required
            value={confirmPassword}
            onChange={onChangeRegisterForm}
            className="my-2"
          />
        </Form.Group>
        <Button variant="success" type="submit" className="my-2">
          Register
        </Button>
      </Form>
      <p>
        <span className="px-2"> Already have an account?</span>
        <Link href="/login">
          <Button variant="info" size="sm" className="ml-2">
            Login
          </Button>
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
