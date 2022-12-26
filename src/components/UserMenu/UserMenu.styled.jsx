import styled from '@emotion/styled';

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const UserName = styled.span`
  color: var(--accent);
`;

export const BtnLogOut = styled.button`
  padding: 5px 15px;

  font-size: 18px;
  font-weight: 500;
  color: var(--accent);

  background-color: transparent;
  border-radius: 5px;
  border: 1px solid var(--accent);
  box-shadow: var(--main-shadow);

  cursor: pointer;

  transition: all 250ms ease-in-out;

  :hover {
    color: var(--bg);
    background-color: var(--accent);
  }
`;
