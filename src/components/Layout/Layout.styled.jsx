import styled from '@emotion/styled';
import { device } from 'components/App.styled';

export const Main = styled.main`
  margin: 40px 0;
`;

export const Wrapper = styled.div`
  padding: 20px;

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  background-color: var(bg);

  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;

  backdrop-filter: blur(5px);

  @media ${device.tablet} {
    padding: 20px 40px;
  }
`;
