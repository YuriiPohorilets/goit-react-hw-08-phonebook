import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Container } from 'components/App.styled';
import { Main, Wrapper } from './Layout.styled';
import { BgCircles } from 'components/BgCircles/BgCircles';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Main>
        <Container>
          <Wrapper>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </Wrapper>
        </Container>
      </Main>
      <BgCircles />
    </>
  );
};
