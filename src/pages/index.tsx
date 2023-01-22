import React, { useContext } from "react";
import FormData from "../components/FormData";
import List from "../components/List";
import { DataContext } from "../Contexts/DataContext";

const MainPage = () => {
  const { treatedData } = useContext(DataContext);

  return (
    <section className="general_section">
      <div className="section-div--general">
        <FormData />
      </div>
      <div className="section-div--general background-grey">
        <h1>VOCÊ RECEBERÀ:</h1>
        <List data={treatedData} />
      </div>
    </section>
  );
};

export default MainPage;
