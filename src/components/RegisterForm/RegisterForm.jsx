import useForm from "../../services/hooks/useForm";
import initialState from "./initialState";
import fields from "./fields";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const {
    username,
    email,
    password,
    name,
    lastname,
    birthday,
    phone,
    location,
  } = state;

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={username}
        onChange={handleChange}
        {...fields.username}
      />
      <TextField value={email} onChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        onChange={handleChange}
        {...fields.password}
      />
      <TextField value={name} onChange={handleChange} {...fields.name} />
      <TextField
        value={lastname}
        onChange={handleChange}
        {...fields.lastname}
      />
      <TextField
        value={birthday}
        onChange={handleChange}
        {...fields.birthday}
      />
      <TextField value={phone} onChange={handleChange} {...fields.phone} />
      <TextField
        value={location}
        onChange={handleChange}
        {...fields.location}
      />
      <Button>Register</Button>
    </form>
  );
};

export default RegisterForm;
