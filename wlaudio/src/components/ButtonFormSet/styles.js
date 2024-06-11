import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
  justify-content: center;
  margin-top: 20px;
  button {
    height: 50px;
    width: 187px;
    border: none;
    border-radius: 6px;
    font-family: poppins;
    font-size: 16px;
  }
`;
export const LightButton = styled.button`
  background-color: #0066ff;
  filter: opacity(80%);
`;

export const AudioButton = styled.button`
  background-color: #ffa800;
  filter: opacity(80%);
`;

export const StructureButton = styled.button`
  background-color: #ff0000;
  filter: opacity(80%);
`;

export const OtherButton = styled.button`
  background-color: #0c9a00;
  filter: opacity(80%);
`;
