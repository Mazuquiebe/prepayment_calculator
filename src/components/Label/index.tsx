import React from "react"
import { InputContainer } from "./styles"
import { ILabelProps } from "../../interfaces"


const Label = ({children, ...rest}:ILabelProps) => {

  return(
    <InputContainer{...rest}>
      {children}
    </InputContainer>
  );
};

export default Label;