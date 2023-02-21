import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  margin-bottom: 25px;

  font-weight: 500;
  font-size: 24px;
  color: #fff;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
`;

export const InputWrapper = styled.div`
  position: relative;

  margin-bottom: 40px;
  max-width: 100%;
  width: 450px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const Label = styled.label`
  font-size: 22px;
  color: #fff;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
`;

export const Input = styled(Field)`
  padding: 15px;
  width: 100%;

  font-size: 24px;
  color: rgba(255, 255, 255, 0.7);
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);

  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);

  transition: all 300ms ease-in-out;

  outline: none;

  &:not(:placeholder-shown)[data-error='false'] {
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 1);
    background-color: rgba(255, 255, 255, 0.1);
  }

  &[data-error='true'] {
    color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(227, 67, 67, 0.7);
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:hover,
  &:focus {
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 1);
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const Btn = styled.button`
  padding: 16px 32px;

  font-weight: 700;
  font-size: 24px;
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

export const ErrorMsg = styled(ErrorMessage)`
  position: absolute;
  bottom: -25%;
  left: 0;

  font-size: 14px;
  color: #e34343;
`;
