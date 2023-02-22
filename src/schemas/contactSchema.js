import * as Yup from 'yup';

export const contactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Name must be at least 3 characters long').max(32).required('Required'),
  number: Yup.number().required('Required'),
});
