import React, { useContext, } from "react"
import { StyledForm } from "./styles"
import Input from "../Input";
import Label from "../Label";
import {DataContext} from "../../Contexts/DataContext";


const Form = () => {
    
    const { 
        setAmount,
        setInstallments,
        setMDR,
        setDays,
        postRequest,        
    } = useContext(DataContext);

    
    const handleSubmit =  (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        postRequest();
     
    };

    const handleStringDays = (str: string) => {
        const days = str.split(',')
        const newDays = days.map(e => Number(e.trim()))
        setDays(newDays)
    }


    return (
        <StyledForm  onSubmit={(event)=> handleSubmit(event)}>
            <legend>Simule sua antecipação</legend>
            <Label htmlFor="amount">
              Informe o valor da renda*
              <Input
                name="amount"
                onChange={(event)=> setAmount(Number(event.target.value))}/>
            </Label>
            <Label htmlFor="installments">
              Em quantas parcelas*
              <Input
                name="installments"
                onChange={(event)=> setInstallments(Number(event.target.value))}/>
            </Label>
            <Label htmlFor="mdr">
              Informe o percentual de MDR*
              <Input
                name="mdr"
                onChange={(event)=> setMDR(Number(event.target.value))}/>
            </Label>
            <Label htmlFor="days">
              Numero de Dias
              <Input
                name="days"
                onChange={(event)=> handleStringDays(event.target.value) }/>
            </Label>
            <button type='submit'>Calcular</button>
        </StyledForm>
    );
};

export default Form;