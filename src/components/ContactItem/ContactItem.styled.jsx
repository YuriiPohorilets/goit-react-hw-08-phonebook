import styled from '@emotion/styled';

export const Item = styled.li`
  padding: 10px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px 10px;

  /* background-color: transparent; */
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 10px;
`;

export const Name = styled.span`
  flex: 1 0 auto;

  text-align: left;
  font-size: 18px;
  color: rgba(255, 255, 255, 1);
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
`;

export const Number = styled.a`
  position: relative;

  font-weight: 500;
  font-size: 18px;
  text-align: right;
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
`;

export const Btn = styled.button`
  padding: 8px 18px;

  font-weight: 500;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);

  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);

  background-color: transparent;

  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);

  transition: all 250ms ease-in-out;

  cursor: pointer;

  :hover {
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 1);
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
