import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { createPortal } from 'react-dom';
import { Overlay, Container, Wrapper, Msg, Name, Btn, BtnDelete } from './ConfirmModal.styled';

const modalRoot = document.querySelector('#modal-root');

export const ConfirmModal = ({ id, name, closeConfirm }) => {
  const dispatch = useDispatch();

  return createPortal(
    <>
      <Container>
        <Msg>
          Are you sure you want to delete the contact: <Name>{name}</Name>?
        </Msg>

        <Wrapper>
          <Btn type="button" onClick={closeConfirm}>
            Cancel
          </Btn>
          <BtnDelete type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </BtnDelete>
        </Wrapper>
      </Container>
      <Overlay onClick={closeConfirm}></Overlay>
    </>,
    modalRoot
  );
};
