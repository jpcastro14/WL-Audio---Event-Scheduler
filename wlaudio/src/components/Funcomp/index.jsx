import { Container } from "./styles";
import { useState } from "react";


function Funcomp (){

    const [task,setTask] = useState()
    const [list,setList] = useState([])

    const handleChange = (e) =>{
        const value = e.target.value;
        setTask(value);
        console.log(task);
    }   

    const addtask = (e) =>{
        e.preventDefault();

        setList([...list, {
            id:list.length,
            value:task
        }])
        console.log(list);
    }


    return(
        <Container>
            <p>Componente Funcional</p>
            <form onSubmit={addtask} > 
                 <input type="text" name="taskname" onChange={handleChange}/>
                <input type="submit" name="" value="Criar" />
            </form>
            <ul>
            {list.map((item)=>
            <li key={item.id}>{item.value}</li>
            )}
            </ul>
        </Container>
    )
}

export default Funcomp