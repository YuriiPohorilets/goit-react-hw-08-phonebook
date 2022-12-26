import { Form, Field, ErrorMessage } from 'formik';
import styled from '@emotion/styled';

export const Container = styled(Form)`
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 20px;
  max-width: 50%;
`;

export const Wrapper = styled.div`
  margin-bottom: 30px;
  max-width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 24px;
  color: var(--secondary);
  text-shadow: var(--main-shadow);
`;

export const Input = styled(Field)`
  padding: 5px 10px;
  width: 100%;

  font-size: 24px;
  color: var(--primary);
  // text-transform: capitalize;

  background-color: transparent;
  border: none;
  border-radius: 5px;
  box-shadow: var(--inset-shadow);
`;

export const ErrorMsg = styled(ErrorMessage)`
  margin-top: 7px;
  color: red;
`;

export const Btn = styled.button`
  padding: 10px 25px;

  font-size: 24px;
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
