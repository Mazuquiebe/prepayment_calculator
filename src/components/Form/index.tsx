import React, { useContext, useState } from "react";
import { Form, Input, Label, Button, WarningMsg } from "./styles";
import { DataContext } from "../../Contexts/DataContext";

const FormData = () => {
  const { setAmount, setInstallments, setMDR, setDays, postRequest } =
    useContext(DataContext);

  const [installmentsMsg, setInstallmentsMsg] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postRequest();
  };

  const handleInstallments = (installmentsStr: string) => {
    const installments = Number(installmentsStr);
    const msg = "Numero de parcelas deve ser entre 1 e 12";

    if (installments > 12 || installments < 1) setInstallmentsMsg(msg);
    else {
      setInstallments(installments);
      setInstallmentsMsg("");
    }
  };

  const handleStringDays = (str: string) => {
    const days = str.split(",");
    const newDays = days.map((e) => Number(e.trim()));
    setDays(newDays);
  };

  return (
    <Form onSubmit={(event) => handleSubmit(event)}>
      <legend>Simule sua antecipação</legend>
      <Label htmlFor="amount">
        Informe o valor da renda *
        <Input
          name="amount"
          onChange={(event) => setAmount(Number(event.target.value))}
        />
      </Label>
      <Label htmlFor="installments">
        Em quantas parcelas *
        <Input
          name="installments"
          onChange={(event) => handleInstallments(event.target.value)}
        />
        <WarningMsg>{installmentsMsg}</WarningMsg>
      </Label>
      <Label htmlFor="mdr">
        Informe o percentual de MDR *
        <Input
          name="mdr"
          onChange={(event) => setMDR(Number(event.target.value))}
        />
      </Label>
      <Label htmlFor="days">
        Numero de Dias
        <Input
          name="days"
          onChange={(event) => handleStringDays(event.target.value)}
        />
      </Label>
      <Button type="submit">Calcular</Button>
    </Form>
  );
};

export default FormData;
