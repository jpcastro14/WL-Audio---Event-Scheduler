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
    a{
        text-decoration: none;
        font-family: poppins;
        color: black;
        font-size: 20px;
    }
    div{
        display: flex;
        justify-content: space-between;
        gap: 40px;
        svg{
            height: 25px;
            width: 25px;
        }
        
    }
    

`