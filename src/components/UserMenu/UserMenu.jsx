import { useAuth } from 'hooks/useLocalStorage';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { UserWrapper, UserName, BtnLogOut } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserWrapper>
      <p>
        Welcome, <UserName>{user.name}</UserName>
      </p>
      <BtnLogOut type="button" onClick={() => dispatch(logOut())}>
        Log out
      </BtnLogOut>
    </UserWrapper>
  );
};
