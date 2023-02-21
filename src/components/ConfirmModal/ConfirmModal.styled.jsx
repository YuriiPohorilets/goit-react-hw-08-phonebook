import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100%;
  height: 100%;

  backdrop-filter: blur(2px);
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 2;

  max-width: 300px;

  transform: translate(-50%, -50%);

  padding: 20px;

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  background-color: var(bg);

  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;

  backdrop-filter: blur(5px);
`;

export const Msg = styled.p`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
`;

export const Name = styled.span`
  font-weight: 500;
  font-size: 18px;
  color: rgba(255, 255, 255, 1);
`;

export const Btn = styled.button`
  padding: 8px 18px;

  font-size: 18px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);

  background-color: transparent;

  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 10px;

  transition: all 250ms ease-in-out;

  cursor: pointer;

  :hover {
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 1);
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
