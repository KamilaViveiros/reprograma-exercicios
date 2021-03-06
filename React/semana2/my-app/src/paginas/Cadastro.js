import React from 'react'
import './cadastro.css'
import Inicial from './cadastro/Inicial'
import PessoaFisica from './cadastro/PessoaFisica'
import PessoaJuridica from './cadastro/PessoaJuridica'
import Final from './cadastro/Final';




class Cadastro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            conteudo: undefined,


        }
    }
    handleMudaConteudo = (valor) => {
        this.setState({conteudo: valor})
    }

    render() {
        return (
            <div className="cadastro">
                {
                    this.state.conteudo === undefined &&
                    <Inicial alteraConteudo={this.handleMudaConteudo} />
                }

                {
                    this.state.conteudo === "PF" &&
                    <PessoaFisica conteudo="final" alteraConteudo={this.handleMudaConteudo}/>
                }

                {
                    this.state.conteudo === "PJ" &&
                    <PessoaJuridica/>
                }
                {
                    this.state.conteudo === 'final' && 
                    <Final/>
                }



            </div>
        )
    }
}

export default Cadastro