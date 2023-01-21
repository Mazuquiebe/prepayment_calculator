import { ReactNode, FormHTMLAttributes, LabelHTMLAttributes, InputHTMLAttributes } from 'react';

export interface IPropsChildren{
    children: ReactNode;
}

export interface IFormProps extends FormHTMLAttributes<HTMLFormElement>{
    children: ReactNode;
}

export interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement>{
    children: ReactNode;
}

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
    
}

export interface IDataRequest{
    amount: number;
    installments: number;
    mdr: number;
    days?: number | number[] | null;
}

export interface IListProps{
    data: [string, unknown][];
}

export interface IDataContext{
    amount: number;
    setAmount: React.Dispatch<React.SetStateAction<number>>;
    installments: number;
    setInstallments: React.Dispatch<React.SetStateAction<number>>;
    MDR: number; 
    setMDR: React.Dispatch<React.SetStateAction<number>>;
    days?: number[];
    setDays: React.Dispatch<React.SetStateAction<number[] | undefined>>;
    dataResponse: {} ;
    setDataResponse: React.Dispatch<React.SetStateAction<{}>>;
    postRequest:() => Promise<void>;
    treatedData: [string, unknown][];
} 