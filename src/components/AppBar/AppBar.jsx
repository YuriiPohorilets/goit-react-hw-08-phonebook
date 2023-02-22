import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { Header } from './AppBar.styled';
import { useAuth } from 'hooks/useAuth';
import { Container } from 'components/App.styled';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  const isPageWide = useMediaQuery('(min-width: 768px)');

  return (
    <Container>
      <Header>
        {!isPageWide && isLoggedIn && <MobileMenu />}
        {(isPageWide && <Navigation />) || (!isLoggedIn && <Navigation />)}
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
    </Container>
  );
};
