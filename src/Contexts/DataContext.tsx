import React, { createContext, useState, useEffect } from "react";
import api from "../services/api";
import { IDataContext, IDataRequest, IPropsChildren } from "../interfaces";

export const DataContext = createContext<IDataContext>({} as IDataContext);

const DataProvider = ({ children }: IPropsChildren) => {
  const [amount, setAmount] = useState<number>(0);
  const [installments, setInstallments] = useState<number>(0);
  const [MDR, setMDR] = useState<number>(0);
  const [days, setDays] = useState<number[] | undefined>([15, 30, 90]);

  const [dataResponse, setDataResponse] = useState({});
  const [treatedData, setTreatedData] = useState<[string, unknown][]>([]);

  const postRequest = async () => {
    const data: IDataRequest = {
      amount: amount,
      installments: installments,
      mdr: MDR,
      days: days,
    };

    if (!days || days[0] === 0) delete data.days;

    await api
      .post("/", { ...data })
      .then((response) => setDataResponse(response.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const handleDataResponse = (dataResponse: any): [string, unknown][] => {
      return Object.entries(dataResponse);
    };
    const data = handleDataResponse(dataResponse);
    setTreatedData(data);
  }, [dataResponse]);

  return (
    <DataContext.Provider
      value={{
        amount,
        setAmount,
        installments,
        setInstallments,
        MDR,
        setMDR,
        days,
        setDays,
        dataResponse,
        setDataResponse,
        postRequest,
        treatedData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
