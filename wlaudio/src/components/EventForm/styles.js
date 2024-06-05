import styled from "styled-components";

export const Container = styled.div`
  font-size: 40px;
  @media (max-width: 412px) {
    padding: 0;
    text-align: left;
    background: white;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    padding: 15px;
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
    @media (max-width: 412px) {
      background-color: white;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      padding: 0;
    }
  }
  input {
    font-family: poppins;
    font-size: 15px;
    height: 44px;
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
  width: 100%;
  height: 30px;
  margin-top: 50px;
  font-family: poppins;
  font-size: 20px;
  background-color: white;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  @media (max-width: 412px) {
    margin-top: 0;
    padding-left: 15px;
    width: auto;
    margin-bottom: 40px;
  }
`;

export const FormDiv = styled.div`
  display: flex;
  /* border: solid 5px #f93838; */
  border-top: none;
  border-bottom: none;
  border-right: none;
  @media (max-width: 412px) {
    background-color: white;
  }
`;

export const Goback = styled.img`
  height: 50px;
  width: 50px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  input [type="submit"] {
    display: flex;
  }
`;
