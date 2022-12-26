import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { selectContactFilter } from 'redux/filter/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { Btn, Contacts, ContactsItem, Name, Number } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectContactFilter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Contacts>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <ContactsItem key={id}>
              <Name>{name}</Name>
              <Number>{number}</Number>
              <Btn type="button" onClick={() => dispatch(deleteContact(id))}>
                Delete
              </Btn>
            </ContactsItem>
          );
        })}
      </Contacts>
    </>
  );
};
