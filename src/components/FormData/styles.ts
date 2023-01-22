import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-evenly;

  width: 100%;
  height: 100%;

  legend {
    font: normal 1.5rem "Roboto";
    color: #627788;

    margin: 15px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: left;

  width: 90%;

  color: #627788;

  font: normal 0.9rem "Roboto";
`;

export const Input = styled.input`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-content: center;

  width: 90%;
  height: 40px;

  border: 2px solid #b0c2d1;
  border-radius: 5px;

  outline: none;

  :focus {
    border: 2px solid #1e90ff;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  width: 40%;
  height: 30px;

  background-color: #f0f8ff;
  color: #1e90ff;

  border: 1px solid #f0f8ff;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 0px #a6b6c3;

  margin: 15px;

  cursor: pointer;
  :hover {
    background-color: #1e90ff;
    border: 2px solid #1e90ff;

    color: #f0f8ff;
  }
`;

export const Warning = styled.span`
  font: normal 0.7rem "Arial";
  color: tomato;
  height: 0.7rem;
  margin: 0;
`;
