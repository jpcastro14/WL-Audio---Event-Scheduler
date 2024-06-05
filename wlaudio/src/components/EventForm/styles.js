import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  font-size: 40px;
  @media (max-width: 385px) {
    padding: 5px;
    width: 100%;
    font-size: 25px;
    text-align: left;
    margin-left: 5px;
    background-color: white;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
  }
  div {
    display: flex;
    /* border: solid 5px #f93838; */
    border-top: none;
    border-bottom: none;
    border-right: none;
    padding: 10px;
    @media (max-width: 384px) {
    }
  }
  button[type="test"] {
    background-color: #f93838;
    border: none;
    padding: 15px;
    border-radius: 5px;
    width: 25%;
    font-size: large;
    transition: ease-in-out 200ms;
    &:hover {
      filter: opacity(80%);
    }
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
    padding-left: 15px;
  }
  input[id="Evobs"] {
    width: 100%;
  }
  input[id="Evsubmit"] {
    flex-grow: 1;
    background-color: #f93838;
    height: 35px;
  }
`;

export const Titlediv = styled.div`
  width: 80%;
  height: 30px;
  margin-top: 50px;
  font-family: poppins;
  font-size: 20px;
  margin-left: 15px;
`;
