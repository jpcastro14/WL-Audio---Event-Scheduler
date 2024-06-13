import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonContainer = styled(Link)`
  height: 50px;
  background-color: ${(props) => (props.primary ? "#f0c808" : "#dd1c1a")};
  font-family: poppins;
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: black;
  border: none;
  border-radius: 6px;
  img {
    height: 25px;
    width: auto;
  }
`;
