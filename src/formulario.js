import React from "react";

class Formulario extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Informe o nome" className="form-control" />
                <input type="number" placeholder="Informe a idade" className="form-control" />
                <input type="submit" value='Cadastrar' className="btn btn-primary" />
            </form>
        )
    }
}

export default Formulario;