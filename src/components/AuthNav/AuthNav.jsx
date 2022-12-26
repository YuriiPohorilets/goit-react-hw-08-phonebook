import { AuthList, AuthItem } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthList>
      <li>
        <AuthItem to={'/register'}>Register</AuthItem>
      </li>
      <li>
        <AuthItem to={'/login'}>Log in</AuthItem>
      </li>
    </AuthList>
  );
};
