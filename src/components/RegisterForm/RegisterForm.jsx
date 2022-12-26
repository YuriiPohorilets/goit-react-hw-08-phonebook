import { register } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Form, Wrapper, Label, Input, Btn } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.username.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Wrapper>
        <Label htmlFor="username">Username</Label>
        <Input type="text" name="username" id="username" />
      </Wrapper>

      <Wrapper>
        <Label htmlFor="email">Email</Label>
        <Input type="email" name="email" id="email" />
      </Wrapper>

      <Wrapper>
        <Label htmlFor="password">Password</Label>
        <Input type="password" name="password" id="password" />
      </Wrapper>
      <Btn type="submit">Register</Btn>
    </Form>
  );
};
