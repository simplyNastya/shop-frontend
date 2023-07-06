import useForm from "../../services/hooks/useForm";
import initialState from "./initialState";
import fields from "./fields";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit}>
      <TextField value={email} onChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        onChange={handleChange}
        {...fields.password}
      />
      <Button>Login</Button>
    </form>
  );
};

export default LoginForm;
