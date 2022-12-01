import { Container } from "./styles";
import React from "react";

class ClassComp extends React.Component{
    render(){
        return (
            <Container>
                <p>Componente De Classe</p>

                <form>
                    <input type="text" />
                    <input type="number" name="" id="" />
                </form>

            </Container>
        )
    }
}

export default ClassComp