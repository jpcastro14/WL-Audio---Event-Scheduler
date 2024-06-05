import styled from "styled-components";

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
  div[id="div_li"] {
    display: flex;
    justify-content: flex-end;
    @media (max-width: 384px) {
      color: white;
    }
  }
  @media (max-width: 385px) {
    width: 384px;
    display: flex;
    justify-content: space-around;
    height: 60px;
    padding: 5px 0;
    background: black;
    color: white;
  }
`;
