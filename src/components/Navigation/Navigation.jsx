import { NavList, NavItemLink } from './Navigation.styled';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavList>
        <NavItemLink to={'/'}>Home</NavItemLink>
        {isLoggedIn && <NavItemLink to={'/contacts'}>Contacts</NavItemLink>}
      </NavList>
    </nav>
  );
};
