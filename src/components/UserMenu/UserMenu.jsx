import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { UserWrapper, Paragraph, UserName, BtnLogOut } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserWrapper>
      <Paragraph>
        Welcome, <UserName>{user.name}</UserName>
      </Paragraph>
      <BtnLogOut type="button" onClick={() => dispatch(logOut())}>
        Sign Out
      </BtnLogOut>
    </UserWrapper>
  );
};
