import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    flex-flow: column wrap;
    margin-bottom: 40px;
    width: 100%;
    height: 120px;
    outline: 1px solid black;

    form{
        margin: 10px;
        input{
            margin: 10px;
        }
        border:1px solid black;
        border-radius: 5px;
    }
    ul{
        list-style: inside;
    }

    p{
        margin: 10px;
    }
`