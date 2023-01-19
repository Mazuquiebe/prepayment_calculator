import './App.css';
import React ,{useState } from "react"
import api from './services/api';


interface IDataRequest{
    amount: number;
    installments: number;
    mdr: number;
    days?: number | number[] | null;
}


const App = () => {

  const [amount, setAmount] = useState<number>(0)
  const [installments, setInstallments] = useState<number>(0)
  const [MDR, setMDR] = useState<number>(0)
  const [days, setDays] = useState<number | number[] | null >()
  const [dataResponse, setDataResponse] = useState({})

  const data:IDataRequest = {
      amount: amount,
      installments: installments,
      mdr: MDR,
      days: days
  }

  const callPostMethod = (event: React.FormEvent<HTMLFormElement>, data:IDataRequest) => {
    event.preventDefault()
    api
      .post('/',{...data})
      .then(response => setDataResponse(response.data))
      .catch(error => console.error(error))
    
    console.log(dataResponse)
  }
    return (
      <div className="App">
        <form onSubmit={(event)=> callPostMethod(event,data)}>
          
          <label htmlFor="amount"> 
            Informe o valor da renda*
            <input 
              type="number" 
              name="amount" 
              onChange={(event)=> setAmount(Number(event.target.value))}/>
          </label>
          <label htmlFor="installments">
            Em quantas parcelas*
            <input 
              type="number" 
              name="installments" 
              onChange={(event)=> setInstallments(Number(event.target.value))}/>
          </label>
          <label htmlFor="mdr">
            Informae o percentual de MDR*
            <input 
              type="number" 
              name="mdr" 
              onChange={(event)=> setMDR(Number(event.target.value))}/>
          </label>
          <label htmlFor="days">
            Numero de Dias 
            <input 
              type="number" 
              name="days" 
              onChange={(event)=> setDays( Number(event.target.value) ) }/>
          </label>
          <label htmlFor=""></label><button type='submit'>Calcular</button>
        </form>
        <div>
            

        </div>
      </div>
  );
}

export default App;
