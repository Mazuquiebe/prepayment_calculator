import React, { useContext } from "react";
import FormData from "../components/FormData";
import List from "../components/List";
import { DataContext } from "../Contexts/DataContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Section } from "../components/GeneralSection/styles";

const MainPage = () => {
  const { treatedData } = useContext(DataContext);

  return (
    <Section>
      <div className="section-div--general">
        <FormData />
      </div>
      <div className="section-div--general background-grey">
        <h1>VOCÊ RECEBERÀ:</h1>
        <List data={treatedData} />
      </div>
      <ToastContainer />
    </Section>
  );
};

export default MainPage;
