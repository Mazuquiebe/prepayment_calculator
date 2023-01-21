import React from "react";
import { StyledInput } from "./styles";
import { IInputProps } from "../../interfaces";

const Input = ({...rest}: IInputProps) => {
    return(
        <StyledInput {...rest}/>
    );
};

export default Input;