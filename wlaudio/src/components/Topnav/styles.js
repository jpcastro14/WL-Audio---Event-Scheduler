import styled from "styled-components";

export const Container = styled.div`
    height: 40px;
    background:linear-gradient(90deg, rgba(249,56,56,1) 0%, rgba(255,233,0,0.8645658092338497) 100%);
    padding:20px 100px;
    display: flex;
    flex:0 0 700px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid black;
    ul{
        list-style: none;
        display: flex;
        gap: 20px;
        font-size: 20px;
        text-decoration: none;
        a{
            text-decoration: none;
            color: black;
            transition: all ease-in-out 0.2s;
        }
        a:hover{
            color: red;
        }
    }
    div[id="div_li"]{
        display: flex;
        justify-content: flex-end;
        width: 80%;
    }
    

`