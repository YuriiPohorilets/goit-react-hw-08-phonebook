import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100%;
  height: 100%;

  background-color: var(bg);

  backdrop-filter: blur(2px);
`;

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 3;

  padding: 40px 20px 140px;
  width: 250px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  background-color: var(bg);
  border: 1px solid rgba(255, 255, 255, 0.3);

  overflow-y: auto;

  backdrop-filter: blur(5px);
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
`;

export const NavItemLink = styled(NavLink)`
  position: relative;

  font-weight: 500;
  font-size: 32px;
  color: rgba(255, 255, 255, 0.7);

  text-decoration: none;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);

  transition: all 250ms ease-in-out;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;

    width: 100%;
    height: 2px;

    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 300ms ease-in-out;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);

    background-color: #fff;
    border-radius: 5px;
  }

  &:hover::after,
  &:focus::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  :hover,
  :focus {
    color: #fff;
  }

  &.active {
    color: #fff;

    &::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;

export const BtnLogOut = styled.button`
  padding: 16px 28px;

  font-size: 24px;
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
