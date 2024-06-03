import styled from "styled-components";

export const Modal = styled.div`
     width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;

`
export const Expand = styled.button`
    border: none;
    background-color: white;
    font-size: 20px;
    padding: 5px;
    display: flex;
    &:hover{
        background-color: #cecece;
        border-radius: 5px;
    }
`


export const Overlay = styled.div`
    background: rgba(49,49,49,0.8);
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: 2;

`

export const ModalContent = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: #f1f1f1;
    padding: 14px 28px 30px 28px;
    border-radius: 3px;
    max-width: 600px;
    min-width: 300px;
    div{
        display: flex;
        justify-content: end;

    }
    button{
        transition: all ease-in-out 200ms;
        border: none;
        background-color: #ccc;
        width: 100%;
        padding: 10px;
        margin: 10px 0 0 0;
        &:hover{
            background-color: aliceblue;
            border: 1px solid red;
        }
    }
    button[type="close"]{
        width: 40px;
        border-radius: 360px;
        margin-bottom: 20px;
        background-color: none;
    }
`
