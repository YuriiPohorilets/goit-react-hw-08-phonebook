import { AuthItem } from 'components/AuthNav/AuthNav.styled';
import { Title, Paragraph, Info, InfoLink } from 'components/App.styled';
import { useAuth } from 'hooks/useAuth';

export const HomePage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Title>Your phonebook application</Title>
      <Paragraph>
        What was the name of that person? A unified phone book with integrated keyword search is
        extremely helpful when this question comes up.
      </Paragraph>
      {!isLoggedIn && (
        <Paragraph>
          To use the application, you need to <AuthItem to={'/register'}>Sign up</AuthItem> or{' '}
          <AuthItem to={'/login'}>Sign in</AuthItem>
        </Paragraph>
      )}

      <Info>
        Created by{' '}
        <InfoLink
          href="https://www.linkedin.com/in/yuriipohorilets/"
          target="_blank"
          rel="noreferrer"
        >
          Yurii Pohorilets
        </InfoLink>
      </Info>
    </>
  );
};
