import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;

  font-size: 18px;
`;

export const AuthItem = styled(NavLink)`
  color: var(--secondary);
  text-decoration: none;
  transition: all 250ms ease-in-out;

  &.active {
    color: var(--accent);
  }

  :hover,
  :focus {
    color: var(--accent);
  }
`;
