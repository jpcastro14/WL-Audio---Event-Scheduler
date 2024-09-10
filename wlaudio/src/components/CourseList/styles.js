import styled from "styled-components";
import { Card } from "react-bootstrap";

export const Container = styled.div`
  display: flex;
  background-color: #4287f5;
  flex-wrap: wrap;
  flex-grow: 0 200px;
  gap: 20px;
  padding: 20px;
  justify-content: center;
  img {
    height: 50px;
  }
`;

export const TopNav = styled.div`
  width: 100%;
  display: flex;
  background-color: white;
  padding: 20px;
`;

export const CardContainer = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: row;
  border-radius: 6px;
  flex-grow: 1;
  justify-content: end;
  flex-wrap: wrap;
`;

export const InfoContainer = styled.div`
  color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border-radius: 6px;
  border-right: 3px solid white;
  background-color: rgba(255, 255, 255, 0.15);

  span {
    font-size: 14px;
  }
`;

export const HeadCard = styled.div`
  width: 100%;
  background-color: white;
  padding: 10px;
  border-radius: 6px;
  height: ${(props) => (props.primary ? "" : "auto")};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  Button {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    display: ${(props) => (props.primary ? "none" : "auto")};
  }
  div {
    display: ${(props) => (props.primary ? "none" : "auto")};
    border-top: solid 1px #eee;
    padding: 10px;
  }
`;

export const CardHeader = styled(Card.Header)`
  background-color: #ededed;
  border: 1px solid white;
  width: 100%;
  padding: 15px;
`;
