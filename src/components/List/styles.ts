import styled from "styled-components";



export const StyledUL = styled.ul`
    display: flex;
    flex-direction: column;

    align-items: center;
    gap: 5px;

    width: 90%;
    height: 60%;

    li{
        display: flex;
        flex-direction: row;
        
        align-items: center;
        justify-content: center;
        
        width: 100%;
        height: 30px
    }

`;