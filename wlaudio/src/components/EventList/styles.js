import styled from "styled-components";

export const Container = styled.div`
  height: 200px;
  max-width: 980px;
  margin: 70px auto;
  font-family: "Poppins", sans-serif;
  font-weight: 300;

  @media (max-width: 412px) {
    background-color: #333333;
    margin-top: 0;
    height: auto;
    padding-bottom: 16px;
  }
`;

export const OverList = styled.ul``;

export const ListHeader = styled.div`
  color: white;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 20px;
    color: white;
    font-weight: 300;
  }
  h6 {
    justify-content: end;
    font-weight: 300;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  background-color: white;
  border-radius: 10px;
  margin: 16px;
  padding: 16px;
`;

export const Evdate = styled.p`
  color: red;
  font-weight: 400;
  font-size: 16px;
`;

export const Evname = styled.p`
  font-weight: 400;
  font-size: 20px;
`;

export const ButtonContainer = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

export const Crewbtn = styled.button`
  background-color: #f0c808;
  border: none;
  border-radius: 8px;
  height: 42px;
  width: 60%;
  font-family: Poppins;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 25px;
    width: 25px;
    margin: 8px;
  }
`;

export const EquipBtn = styled.button`
  background-color: #dd1c1a;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  height: 42px;
  width: 60%;
  font-family: Poppins;
  font-size: 18px;
  img {
    height: 20px;
    width: 20px;
    margin: 8px;
  }
`;

export const LeaderField = styled.div`
  display: flex;
  margin-top: 16px;
  font-size: 12px;
  font-weight: 400;
  p {
    color: #f90c0c;
  }
`;
