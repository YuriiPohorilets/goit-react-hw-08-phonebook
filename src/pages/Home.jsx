import { AuthItem } from 'components/AuthNav/AuthNav.styled';
import { Title, Paragraph } from 'components/App.styled';

export const HomePage = () => {
  return (
    <>
      <Title>Your phonebook application</Title>
      <Paragraph>
        What was the name of that person? A unified phone book with integrated keyword search is
        extremely helpful when this question comes up.
      </Paragraph>
      <Paragraph>
        To use the application, you need to <AuthItem to={'/register'}>Sign up</AuthItem> or{' '}
        <AuthItem to={'/login'}>Sign in</AuthItem>
      </Paragraph>
    </>
  );
};
