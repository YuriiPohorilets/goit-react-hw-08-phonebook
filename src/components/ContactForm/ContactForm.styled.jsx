import { Form, Field, ErrorMessage } from 'formik';
import styled from '@emotion/styled';

export const Container = styled(Form)`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  gap: 10px;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 24px;
  color: rgba(255, 255, 255, 0.7);
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
`;

export const Input = styled(Field)`
  padding: 15px;
  /* width: 100%; */

  font-size: 24px;
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

export const ErrorMsg = styled(ErrorMessage)`
  margin-top: 7px;
  color: red;
`;

export const Btn = styled.button`
  padding: 10px 25px;

  max-height: 60px;

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
