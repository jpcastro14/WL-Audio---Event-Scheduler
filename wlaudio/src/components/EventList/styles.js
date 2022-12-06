import styled from "styled-components";

export const Container = styled.div`
  height: 200px;
  max-width: 980px;
  margin: 70px auto;
  font-family: poppins;
  font-weight: 300;
  p {
    font-size: 30px;
  }

  ul {
    list-style: none;
    padding: 5px;
    div[id="datecont"] {
      background-color: #f93838;
      height: 100%;
      width: 110px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px 0 0 5px;
      position: relative;
    }
    li {
      border: #cecece 1px solid;
      border-radius: 5px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-right: 20px;
      margin-bottom: 10px;
      p {
        font-size: 25px;
      }
    }
  }
`;
