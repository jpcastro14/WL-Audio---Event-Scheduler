    import { Container } from "./styles";
    import { useState } from "react";
    import React from "react";
    import axios from "axios";

    function Seccomp() {
    const [users, Setusers] = useState({
        username: "",
        email: "",
    });

    const [userdata, Setuserdata] = useState([]);

    const HandleChange = (event) => {
        const { name, value } = event.target;

        Setusers((prev) => {
        return { ...prev, [name]: value };
        });
    };

    const Handlesubmit = (e) => {
        e.preventDefault();
        Setuserdata((prev) => {
        return [...prev, users];
        });
        Setusers({
        username: "",
        email: "",
        });
    };

    const Submituser = async (e) => {
        e.preventDefault();

        if (users.username === "") {
        const err = "Preencha corretamente os campos";

        console.log("preencha os campos");
        throw err;
        } else {
        Setuserdata((prev) => {
            return [...prev, users];
        });

        axios
            .post("https://jsonplaceholder.typicode.com/albums", userdata)
            .then((response) => {
            console.log(response.status);

            if (response.status === 201) {
                console.log("Usuário Cadastrado com sucesso!");
                Setusers({
                username: "",
                email: "",
                });
            } else {
                console.log("Erro!");
            }
            });
        }
    };

    return (
        <Container>
        <form onSubmit={Submituser}>
            <input
            type="text"
            name="username"
            onChange={HandleChange}
            value={users.username}
            />
            <input
            type="email"
            name="email"
            onChange={HandleChange}
            value={users.email}
            />
            <input type="submit" />
        </form>
        <div>
            <ul>
            {userdata.map((user) => (
                <li key={Math.random()}>
                {user.username} / {user.email}
                </li>
            ))}
            </ul>
        </div>
        </Container>
    );
    }

    export default Seccomp;
