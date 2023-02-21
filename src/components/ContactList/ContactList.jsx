import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { selectContactFilter } from 'redux/filter/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { Contacts, Subtitle } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectContactFilter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Subtitle>Contacts list</Subtitle>
      <Contacts>
        {filteredContacts.map(({ id, name, number }) => {
          return <ContactItem key={id} id={id} name={name} number={number} />;
        })}
      </Contacts>
    </>
  );
};
