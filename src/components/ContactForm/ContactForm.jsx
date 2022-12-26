import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsOperations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { customAlphabet } from 'nanoid';
import { Container, Input, Label, Wrapper, ErrorMsg, Btn } from './ContactForm.styled';

const nanoid = customAlphabet('1234567890', 3);

const schema = Yup.object().shape({
  name: Yup.string().min(2).max(70).required(),
  phone: Yup.number().min(4).required(),
});

const initialValues = {
  id: '',
  name: '',
  phone: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: 'id-' + nanoid(),
      name: values.name,
      phone: values.phone,
    };

    if (contacts.find(contact => contact.name === newContact.name)) {
      return toast.error(`${newContact.name} is already in contacts`);
    }

    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
        <Container>
          <Wrapper>
            <Label htmlFor="name">Name:</Label>
            <Input name="name" type="text" id="name" />
            <ErrorMsg name="name" component="div" />
          </Wrapper>

          <Wrapper>
            <Label htmlFor="phone">Number:</Label>
            <Input name="phone" type="tel" id="phone" />
            <ErrorMsg name="phone" component="div" />
          </Wrapper>

          <Btn type="submit">Add contact</Btn>
        </Container>
      </Formik>
      <ToastContainer />
    </>
  );
};
