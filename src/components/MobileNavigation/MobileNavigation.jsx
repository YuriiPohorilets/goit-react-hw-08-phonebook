import { useAuth } from 'hooks/useAuth';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Nav, NavList, NavItemLink, Overlay, BtnLogOut } from './MobileNavigation.styled';

const modalRoot = document.querySelector('#modal-root');

export const MobileNavigation = ({ closeMenu }) => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  return createPortal(
    <>
      <Nav>
        <NavList>
          <NavItemLink to={'/'} onClick={closeMenu}>
            Home
          </NavItemLink>
          {isLoggedIn && (
            <NavItemLink to={'/contacts'} onClick={closeMenu}>
              Contacts
            </NavItemLink>
          )}
        </NavList>

        <BtnLogOut type="button" onClick={() => dispatch(logOut())}>
          Sign Out
        </BtnLogOut>
      </Nav>
      ,<Overlay onClick={closeMenu}></Overlay>
    </>,
    modalRoot
  );
};
