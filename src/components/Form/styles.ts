import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;
  height: 100%;

  legend {
    font: bold 1.5rem "Roboto";
    color: #627788;
  }
`;

export const Input = styled.input`
  display: flex;
  width: 90%;
  height: 50%;

  border: 2px solid #b0c2d1;
  border-radius: 5px;

  outline: none;

  :hover {
    border: 2px solid #1e90ff;
  }
  :focus {
    border: 2px solid #1e90ff;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 90%;
  height: 80px;

  color: #627788;
  margin: 0px 5px;
  font: normal 0.9rem "Roboto";
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  width: 50%;
  height: 30px;

  background-color: #b0c2d1;

  border: 2px solid #f0f8ff;

  :hover {
    background-color: #1e90ff;
    border: 2px solid #f0f8ff;

    color: #f0f8ff;
  }
`;

export const WarningMsg = styled.span`
  font: normal 0.7rem "Arial";
`;
