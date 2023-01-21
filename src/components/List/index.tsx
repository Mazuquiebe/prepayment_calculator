import React from "react";
import { StyledUL } from "./styles";
import { IListProps } from "../../interfaces";


const List = ({data}:IListProps) => {

    return(
        <StyledUL>
            {data ?
                data.map((e) => 
                <li> 
                    { e[0] <= '1' ? 
                        `Amanhã: R$ ${e[1]}` 
                        :
                        `Em ${e[0]} dias: R$ ${e[1]}`
                    } 
                </li>)
                :
                <></>
            }
        </StyledUL>
    );
};

export default List;