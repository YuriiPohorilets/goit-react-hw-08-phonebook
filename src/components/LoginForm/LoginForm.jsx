import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Wrapper, Label, Input, Btn } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Wrapper>
        <Label htmlFor="email">Email</Label>
        <Input type="email" name="email" id="email" />
      </Wrapper>

      <Wrapper>
        <Label htmlFor="password">Password</Label>
        <Input type="password" name="password" id="password" />
      </Wrapper>

      <Btn type="submit">Login</Btn>
    </Form>
  );
};
