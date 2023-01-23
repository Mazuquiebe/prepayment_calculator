import React, { createContext, useState, useEffect } from "react";
import api from "../services/api";
import { IDataContext, IDataRequest, IPropsChildren } from "../interfaces";
import { toast } from "react-toastify";

export const DataContext = createContext<IDataContext>({} as IDataContext);

const DataProvider = ({ children }: IPropsChildren) => {
  const [amount, setAmount] = useState<number>(0);
  const [installments, setInstallments] = useState<number>(0);
  const [MDR, setMDR] = useState<number>(0);
  const [days, setDays] = useState<number[] | undefined>([15, 30, 90]);

  const [dataResponse, setDataResponse] = useState({});
  const [treatedData, setTreatedData] = useState<[string, unknown][]>([]);
  const [isConnected, setIsConnected] = useState<boolean>(true);

  const postRequest = async () => {
    const loadingToast = toast.loading("loading");

    const data: IDataRequest = {
      amount: amount,
      installments: installments,
      mdr: MDR,
      days: days,
    };

    if (!days || days[0] === 0) delete data.days;

    try {
      const response = await api.post("/", data);
      toast.dismiss(loadingToast);
      setDataResponse(response.data);
    } catch (error: any) {
      toast.dismiss(loadingToast);
      if (error.response && error.response.status === 408) {
        console.error(error);
        setIsConnected(false);
      }
      toast.error("Ocorreu um erro, por favor tente novamente mais tarde");
    }
  };

  useEffect(() => {
    const handleDataResponse = (dataResponse: any): [string, unknown][] => {
      return Object.entries(dataResponse);
    };
    const data = handleDataResponse(dataResponse);
    setTreatedData(data);
  }, [dataResponse]);

  const handleStatusConnection = () => {
    if (navigator.onLine === false) {
      toast.warning("Sem conexão com a internet");
      setIsConnected(false);
    } else {
      toast.success("Conectado");
      setIsConnected(true);
    }
  };

  useEffect(() => {
    window.addEventListener("online", handleStatusConnection);
    window.addEventListener("offline", handleStatusConnection);
    return () => {
      window.removeEventListener("online", handleStatusConnection);
      window.removeEventListener("offline", handleStatusConnection);
    };
  }, []);

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
        isConnected,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
