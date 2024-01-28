import React from "react";

import Formulario from "./formulario";
import Tabela from "./tabela";

class Principal extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            nome: '',
            idade: '',
            vetor: []
        }
    }

    aoDigitar = (campo) => {
        this.setState({[campo.target.name]: campo.target.value});
    }

    aoClicar = (botao) => {
        botao.preventDefault(); // Não atualizar a página
        
        var copiaVetor = [...this.state.vetor];

        copiaVetor.push({
            'nome': this.state.nome,
            'idade': this.state.idade
        });

        this.setState({vetor: copiaVetor});

        this.setState({
            nome: '',
            idade: ''
        });
    }

    render() {
        return(
            <div>
                <h1>Iniciando o projeto final</h1>
                <Formulario campoNome={this.state.nome} campoIdade={this.state.idade} funcaoBotao={this.aoClicar} funcaoCampo={this.aoDigitar} />
                <Tabela dados={this.state.vetor} />
            </div>
        );
    }
}

export default Principal;