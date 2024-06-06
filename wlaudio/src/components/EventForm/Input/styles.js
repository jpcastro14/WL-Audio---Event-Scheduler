import styled from "styled-components";
import React from "react";

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  font-family: poppins;
  font-size: 15px;
  height: 44px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin: 5px;
  flex-grow: 1;
  padding-left: 15px;
`;

export const DateInput = styled.input`
  font-family: poppins;
  font-size: 15px;
  height: 44px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin: 5px;
  flex-grow: 1;
  padding-left: 15px;
`;

export const Label = styled.label`
  font-size: 18px;
  padding-left: 15px;
`;
