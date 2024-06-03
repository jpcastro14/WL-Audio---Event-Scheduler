import {  FaExpand } from "react-icons/fa";
import { Modal } from "./styles";
import { Expand } from "./styles";
import { Overlay } from "./styles";
import { ModalContent } from "./styles";
import React from "react";
import { useState } from "react";
import axios from "axios";


function Test({obs,event,name,id}){

    const [modal,Setmodal] = useState(false)

    const togglemodal =()=>{
        Setmodal(!modal)
    }

    function handleEdit(id, name) {
      
        axios.put(`http://localhost:4000/posts/${id}=${name}`)
  
      }
    
    return(
        <>
        <Expand onClick={togglemodal}>
            <FaExpand/>
        </Expand>

        {modal && (
            <Modal>
                <Overlay>
                    <ModalContent>
                        <div>
                        <button type="close" onClick={togglemodal}>X</button>
                        </div>
                        <input type="text" defaultValue={name} id={id}/>
                        {obs} 
                        <button onClick={event}>Apagar Registro</button>
                        <button onClick={()=> handleEdit(id,name)}>Salvar</button>
                        
                    </ModalContent>
                </Overlay>
            </Modal>

        )}
        </>
    )
    
}

export default Test;