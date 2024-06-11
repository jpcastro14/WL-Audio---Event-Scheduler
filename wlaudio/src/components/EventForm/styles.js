import styled from "styled-components";

export const Container = styled.div`
  font-size: 40px;
  background-color: white;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 412px) {
    padding: 0;
    background: white;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    padding: 15px;
    justify-content: left;
    align-items: start;
    gap: 15px;
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
    background-color: white;
    max-width: 700px;
    @media (max-width: 412px) {
      background-color: white;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      padding: 0;
    }
  }
`;

export const Titlediv = styled.div`
  height: 30px;
  margin-bottom: 50px;
  font-family: poppins;
  font-size: 30px;
  @media (max-width: 412px) {
    margin-top: 0;
    padding-left: 15px;
    width: auto;
    margin-bottom: 40px;
    font-size: 24px;
    width: 100%;
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
  align-items: center;
  gap: 10px;
`;

export const SubmitButton = styled.input`
  background-color: #73c578;
  width: 100%;
  border: none;
  height: 44px;
  border-radius: 5px;
  font-size: 20px;
  font-family: poppins;
`;

export const CancelButton = styled.input`
  background-color: #dd1c1a;
  font-family: poppins;
  width: 100%;
  border: none;
  height: 44px;
  border-radius: 5px;
  font-size: 20px;
`;
