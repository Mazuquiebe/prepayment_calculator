import React from "react";
import { UL } from "./styles";
import { IListProps } from "../../interfaces";

const List = ({ data }: IListProps) => {
  return (
    <UL>
      {data ? (
        data.map((e, id) => (
          <li key={id}>
            {e[0] <= "1"
              ? `Amanhã: R$ ${Number(e[1]).toFixed(2)}`
              : `Em ${e[0]} dias: R$ ${Number(e[1]).toFixed(2)}`}
          </li>
        ))
      ) : (
        <></>
      )}
    </UL>
  );
};

export default List;
