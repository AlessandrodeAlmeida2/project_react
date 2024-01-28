import React from "react";
import ReactDOM from "react-dom/client";

import './style.css'

import Formulario from "./formulario";

class Principal extends React.Component {
    render() {
        return(
            <div>
                <h1>Iniciando o projeto final</h1>
                <Formulario />
            </div>
        );
    }
}

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<Principal />);