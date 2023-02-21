import * as Yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const registerSchema = Yup.object().shape({
  username: Yup.string().min(3, 'Username must be at least 3 characters long').required('Required'),
  email: Yup.string().email('Please enter a valid email').required('Required'),
  password: Yup.string()
    .min(5)
    .matches(passwordRules, {
      message: 'Please create a stronger password',
    })
    .required('Required'),
});
