import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { contactSchema } from 'schemas/contactSchema';
import { Formik } from 'formik';
import { customAlphabet } from 'nanoid';
import { FormContainer, Input, Label, InputWrapper, ErrorMsg, Btn } from './ContactForm.styled';

const nanoid = customAlphabet('1234567890', 3);

const initialValues = {
  id: '',
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: 'id-' + nanoid(),
      name: values.name,
      number: values.number,
    };

    if (contacts.find(contact => contact.name === newContact.name)) {
      return toast.error(`${newContact.name} is already in contacts`);
    }

    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={contactSchema}
      >
        {({ errors, touched }) => (
          <FormContainer>
            <InputWrapper>
              <Label htmlFor="name">Name:</Label>
              <Input
                name="name"
                type="text"
                id="name"
                autoComplete="off"
                placeholder={' '}
                data-error={errors.name && touched.name ? true : false}
              />
              <ErrorMsg name="name" component="span" />
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor="number">Number:</Label>
              <Input
                name="number"
                type="text"
                id="number"
                autoComplete="off"
                placeholder={' '}
                data-error={errors.number && touched.number ? true : false}
              />
              <ErrorMsg name="number" component="span" />
            </InputWrapper>

            <Btn type="submit">Done</Btn>
          </FormContainer>
        )}
      </Formik>
      <ToastContainer />
    </>
  );
};
