import { register } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { registerSchema } from 'schemas/registerSchema';
import {
  FormContainer,
  Title,
  InputWrapper,
  Label,
  Input,
  Btn,
  ErrorMsg,
} from './RegisterForm.styled';

const initialValues = {
  username: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      register({
        name: values.username,
        email: values.email,
        password: values.password,
      })
    );

    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={registerSchema}>
      {({ errors, touched }) => (
        <FormContainer>
          <Title>Sign up to continue</Title>
          <InputWrapper>
            <Label htmlFor="username">Username:</Label>
            <Input
              type="text"
              name="username"
              id="username"
              autoComplete="off"
              placeholder={' '}
              data-error={errors.username && touched.username ? true : false}
            />
            <ErrorMsg name="username" component="span" />
          </InputWrapper>

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
          <Btn type="submit">Sign up</Btn>
        </FormContainer>
      )}
    </Formik>
  );
};
