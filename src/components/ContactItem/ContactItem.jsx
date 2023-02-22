import { useState } from 'react';
import { ConfirmModal } from 'components/ConfirmModal/ConfirmModal';
import { Btn, Item, Name, Number, Wrapper } from './ContactItem.styled';

export const ContactItem = ({ id, number, name }) => {
  const [shownConfirm, setShownConfirm] = useState(false);
  const toggleConfirm = () => setShownConfirm(!shownConfirm);

  return (
    <Item key={id}>
      <Wrapper>
        <Name>{name}</Name>
        <Number href={'tel:' + number}>{number}</Number>
      </Wrapper>

      <Btn type="button" onClick={toggleConfirm}>
        Delete
      </Btn>

      {shownConfirm && <ConfirmModal name={name} id={id} closeConfirm={toggleConfirm} />}
    </Item>
  );
};
