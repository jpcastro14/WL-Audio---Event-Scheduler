import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 40px;
  background: linear-gradient(
    90deg,
    rgba(249, 56, 56, 1) 0%,
    rgba(255, 233, 0, 0.8645658092338497) 100%
  );
  padding: 20px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid black;
  ul {
    list-style: none;
    display: flex;
    gap: 30px;
    font-size: 20px;
    text-decoration: none;
    a {
      text-decoration: none;
      color: black;
      transition: all ease-in-out 0.2s;
      @media (max-width: 384px) {
        color: white;
      }
    }
    a:hover {
      color: red;
    }
  }
  @media (max-width: 412px) {
    width: 100%;
    display: flex;
    background: black;
    justify-content: space-around;
    height: 60px;
    padding: 5px 0;
    color: white;
  }
`;

export const DivLinks = styled.li`
  display: flex;
  justify-content: flex-end;
  GoLink {
    color: white;
  }
`;

export const GoLink = styled(Link)`
  @media (max-width: 412px) {
    color: white;
  }
`;
