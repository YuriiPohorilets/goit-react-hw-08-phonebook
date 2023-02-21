import * as Yup from 'yup';

export const contactSchema = Yup.object().shape({
  name: Yup.string().min(2).max(70).required('Required'),
  number: Yup.number().integer().required('Required'),
});
