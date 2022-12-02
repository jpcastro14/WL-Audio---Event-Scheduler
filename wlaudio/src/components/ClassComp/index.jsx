import { Container } from "./styles";
import { useState } from "react";
import React from "react";

function Seccomp (){

    const [users,Setusers] = useState({
        name:'',
        email:''
    })

    const [userdata,Setuserdata] = useState([])


    const HandleChange = (event)=>{

        const {name,value} = event.target

        Setusers((prev)=>{
            return {...prev, [name]: value}
        })

        console.log(users);
    }

    const Handlesubmit = (e)=>{

        e.preventDefault();

        Setuserdata((prev)=>{
            return [...prev,users]
        })
        console.log(userdata);
    }


    return(
        <Container>
            <form onSubmit={Handlesubmit}>
                <input type="text" name="username" onChange={HandleChange} />
                <input type="email" name="email" onChange={HandleChange}  />
                <input type="submit" />
            </form>
            <div>
                <ul>
                    <li>
                        teste
                    </li>
                </ul>
            </div>
        </Container>
    )
}

export default Seccomp