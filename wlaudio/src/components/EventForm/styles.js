import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 30px;
  font-size: 40px;
  max-width: 980px;
  
  div {
    display: flex;
    border: solid 5px #f93838;
    border-top: none;
    border-bottom: none;
    border-right: none;
    padding: 10px;
  }
  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  input {
    font-family: poppins;
    font-size: 16px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin: 5px;
    flex-grow: 1;
  }
  input[id="Evobs"] {
    width: 100%;
  }
  input[id="Evsubmit"] {
    flex-grow: 1;
    background-color:#f93838;
    height: 35px;
  }
`;
