import React, { useContext, useState } from "react";
import { Form, Input, Label, Button, Warning } from "./styles";
import { DataContext } from "../../Contexts/DataContext";

const FormData = () => {
  const { setAmount, setInstallments, setMDR, setDays, postRequest } =
    useContext(DataContext);

  const [installmentsMsg, setInstallmentsMsg] = useState<string>("");
  const [warningDays, setWarningDays] = useState<string>("Ex: 15, 30, 90");

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

  const handleStringDays = (strDays: string) => {
    const days = strDays.split(",");
    const newDays = days.map((e) => Number(e.trim()));
    if (newDays.length > 10)
      setWarningDays("você pode inserir no máximo 10 períodos");
    else {
      setWarningDays("Ex: 15, 30, 90");
      setDays(newDays);
    }
  };

  return (
    <Form onSubmit={(event) => handleSubmit(event)}>
      <legend>Simule sua antecipação</legend>

      <Label htmlFor="amount">Informe o valor da venda *</Label>
      <Input
        type="number"
        name="amount"
        onChange={(event) => setAmount(Number(event.target.value))}
      />
      <Warning>{}</Warning>

      <Label htmlFor="installments">Em quantas parcelas *</Label>
      <Input
        type="number"
        name="installments"
        onChange={(event) => handleInstallments(event.target.value)}
      />
      <Warning>{installmentsMsg}</Warning>

      <Label htmlFor="mdr">Informe o percentual de MDR *</Label>
      <Input
        type="number"
        name="mdr"
        onChange={(event) => setMDR(Number(event.target.value))}
      />
      <Warning>{}</Warning>

      <Label htmlFor="days">Numero de Dias</Label>
      <Input
        name="days"
        onChange={(event) => handleStringDays(event.target.value)}
      />
      <Warning>{warningDays}</Warning>

      <Button type="submit">Calcular</Button>
    </Form>
  );
};

export default FormData;
