import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #4287f5;
  flex-wrap: wrap;
  flex-grow: 1 0 350px;
  gap: 20px;
  padding: 20px 20px 0 20px;
  height: 120px;
  justify-content: center;
  img {
    height: 50px;
  }
`;

export const ToastField = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 20px;
  align-items: start;
  margin: 0 auto;
  width: 100%;
`;

export const Navigator = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
`;
