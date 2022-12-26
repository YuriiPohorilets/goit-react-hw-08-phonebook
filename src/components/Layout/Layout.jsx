import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Container } from 'components/App.styled';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Container>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};
