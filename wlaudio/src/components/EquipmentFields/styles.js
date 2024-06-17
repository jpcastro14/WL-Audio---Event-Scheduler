import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
  ul {
    padding: 16px;
    font-size: 20px;
    border-radius: 6px;
  }
`;

export const Li = styled.li`
  background-color: white;
  list-style: none;
  font-size: 16px;
  padding: 4px;
  padding-left: 8px;
  border-radius: 10px;
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  img {
    height: 20px;
    width: auto;
  }
`;

export const AudioField = styled.ul`
  background-color: #ffbe40;
  filter: opacity(80%);
`;

export const LigthField = styled.ul`
  background-color: #609df9;
  filter: opacity(80%);
`;

export const StrutField = styled.ul`
  background-color: #ff0000;
  filter: opacity(80%);
`;
