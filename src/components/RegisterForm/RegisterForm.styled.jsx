import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;

  font-weight: 500;
  font-size: 26px;
  color: #fff;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 24px;
  color: rgba(255, 255, 255, 1);
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
`;

export const Input = styled.input`
  padding: 15px;
  width: 100%;

  font-size: 24px;
  color: var(--primary);

  color: rgba(255, 255, 255, 0.7);
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);

  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);

  transition: all 300ms ease-in-out;

  outline: none;

  &:hover,
  &:focus {
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 1);
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const Btn = styled.button`
  padding: 10px 25px;

  font-size: 24px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);

  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);

  cursor: pointer;

  transition: all 250ms ease-in-out;

  :hover {
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 1);
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
