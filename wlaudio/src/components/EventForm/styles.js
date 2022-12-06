import styled from "styled-components";

export const Container = styled.div`
  margin: 0 100px;
  padding: 30px;
  font-size: 40px;
  

  div {
    display: flex;
    max-width: 1250px;
    border: solid 5px #f93838;
    border-radius: 0px;
    border-top: none;
    border-bottom: none;
    border-right: none;
    padding: 10px;
    margin: 0 auto;
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
