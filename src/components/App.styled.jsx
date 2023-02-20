import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  max-width: 850px;
`;

export const Title = styled.h1`
  margin-bottom: 20px;

  font-size: 44px;
  font-weight: 700;
  color: #fff;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
`;

export const Subtitle = styled.h2`
  margin-bottom: 20px;
  padding: 5px;

  font-size: 32px;
  color: var(--primary);
  text-shadow: var(--main-shadow);

  box-shadow: var(--main-shadow);
  border-radius: 10px;
`;

export const Paragraph = styled.p`
  font-size: 18px;
`;
