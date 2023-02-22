import styled from '@emotion/styled';

export const MenuBtn = styled.button`
  position: relative;
  z-index: 10;

  width: 30px;
  height: 24px;

  transition: transform 250ms ease-in-out;

  background-color: transparent;
  border: none;
  overflow: hidden;

  cursor: pointer;

  &::before {
    content: '';
    position: absolute;

    top: 0;
    left: 0;

    width: 100%;
    height: 4px;

    background-color: #fff;
    border-radius: 4px;

    transition: transform 250ms 250ms ease-in-out;
  }

  &::after {
    content: '';
    position: absolute;

    bottom: 0;
    left: 0;

    width: 100%;
    height: 4px;

    background-color: #fff;
    border-radius: 4px;

    transition: transform 250ms 250ms ease-in-out;
  }

  &[data-menu-open='true'] {
    transform: rotate(-90deg);

    &::before {
      transform: translateY(250%) rotate(45deg);
    }

    &::after {
      transform: translateY(-250%) rotate(-45deg);
    }

    & > div {
      transform: translateX(120%);
    }
  }
`;

export const MenuItem = styled.div`
  position: absolute;

  top: 50%;
  left: 0;

  transform: translateY(-50%);

  width: 100%;
  height: 4px;

  background-color: #fff;
  border-radius: 4px;

  transition: transform 250ms 250ms ease-in-out;
`;
