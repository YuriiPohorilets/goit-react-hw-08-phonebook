import styled from '@emotion/styled';

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
`;

export const UserName = styled.span`
  font-weight: 500;
  color: #fff;
`;

export const BtnLogOut = styled.button`
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
