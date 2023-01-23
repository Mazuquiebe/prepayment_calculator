import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  align-items: center;
  justify-content: center;

  width: 50vw;
  height: 80vh;
  margin: auto;

  border: 1px solid #f0f8ff;
  box-shadow: 3px 3px 10px 0px #b0c2d1;
  @media screen and (min-width: 200px) and (max-width: 450px) {
    flex-direction: column;

    overflow: hidden;
    width: 90vw;
    height: 100vh;
    margin: 0;

    div {
      width: 90vw;
      height: 50%;
    }
  }
`;
