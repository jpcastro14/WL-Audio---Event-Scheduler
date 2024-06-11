import styled from "styled-components";

export const Container = styled.div`
  font-size: 40px;
  font-family: poppins;
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
`;

export const EventHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: poppins;
`;

export const EventDate = styled.p`
  font-size: 20px;
  color: #e1514f;
`;

export const EventName = styled.h4`
  font-weight: 400;
  font-family: poppins;
`;

export const EventLeader = styled.p`
  font-size: 15px;
  color: black;
`;

export const Goback = styled.img`
  height: 50px;
  width: 50px;
`;

export const MaterialSet = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 20px;
    margin-bottom: 20px;
    margin-top: 40px;
  }
`;

export const MaterialForm = styled.input`
  height: 44px;
  width: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
`;
