import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [Evlist, Setevlist] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/posts")
    .then((response)=> Setevlist(response.data))

    .catch(function (error) {
      if (error.response) {
        alert('Algo deu errado')
      } else if (error.request) {
        console.log(error.request);
      }
    });
    
  }, []);

  return (
    <AuthContext.Provider value={{ Evlist }}>
      {props.children}
    </AuthContext.Provider>
  );
};
