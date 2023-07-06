import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/auth-operations";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Link } from "react-router-dom";

// import styles from './loginPage.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogin = (data) => dispatch(login(data));

  return (
    <>
      <h1>
        Nice to see you again, just log in and we will continue our trip :)
      </h1>
      <LoginForm onSubmit={onLogin} />
      <p>If you didn`t register yet it`s the best time!</p>
      <Link to="/register">Register</Link>
    </>
  );
};

export default LoginPage;
