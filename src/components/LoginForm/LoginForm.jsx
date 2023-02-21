import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Formik } from 'formik';
import { loginSchema } from 'schemas/loginSchema';
import {
  FormContainer,
  Title,
  InputWrapper,
  Label,
  Input,
  Btn,
  ErrorMsg,
} from './LoginForm.styled';

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );

    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={loginSchema}>
      {({ errors, touched }) => (
        <FormContainer>
          <Title>Sign in to continue</Title>
          <InputWrapper>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              placeholder={' '}
              data-error={errors.email && touched.email ? true : false}
            />
            <ErrorMsg name="email" component="span" />
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="password">Password:</Label>
            <Input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              placeholder={' '}
              data-error={errors.password && touched.password ? true : false}
            />
            <ErrorMsg name="password" component="span" />
          </InputWrapper>
          <Btn type="submit">Sign in</Btn>
        </FormContainer>
      )}
    </Formik>
  );
};
