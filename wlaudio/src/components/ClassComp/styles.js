import styled from "styled-components";

export const Container = styled.div`    
    border: 1px solid black;
    border-radius: 5px;
    width:100%;
    margin-bottom: 50px;
    padding: 10px;
    display: flex;

    form{
        display: flex;
        flex-direction:column;
        width: 100%;
    }
        input{
        height: 30px;
        margin: 10px;

        }

    div{
        width: 100%;
        
        ul{
            list-style: none;
            li{
                outline:1px solid black;
                padding:5px;
                border-radius: 5px;
            }
        }
    }

    `