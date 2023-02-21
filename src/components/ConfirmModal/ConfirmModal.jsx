import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { createPortal } from 'react-dom';
import { Overlay, Container, Msg, Name, Btn } from './ConfirmModal.styled';

const modalRoot = document.querySelector('#bg-root');

export const ConfirmModal = ({ id, name, closeConfirm }) => {
  const dispatch = useDispatch();

  return createPortal(
    <>
      <Container>
        <Msg>
          Are you sure you want to delete the contact: <Name>{name}</Name>?
        </Msg>

        <Btn type="button" onClick={closeConfirm}>
          Cancel
        </Btn>
        <Btn type="button" onClick={() => dispatch(deleteContact(id))}>
          Delete
        </Btn>
      </Container>
      <Overlay onClick={closeConfirm}></Overlay>
    </>,
    modalRoot
  );
};
