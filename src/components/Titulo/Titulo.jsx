import React, { Component } from "react"
import './estilo.css'


class Titulo extends Component {

    constructor(props){
        super(props);
        this.titulo = '';
        this.texto = '';
      
    }
    handleMudancaTitulo(event){
        event.stopPropagation()
        this.titulo = event.target.value

    }
    handleMudancaTexto(event){
        event.stopPropagation()
        this.texto = event.target.value
        
    }
    criarNota(event){
        event.preventDefault()
        event.stopPropagation()
        this.props.criarNota(this.titulo, this.texto)
        console.log('criado',this.titulo,this.texto)
    }
    render() {
        return (
            <form className='form-cadastro' onSubmit={this.criarNota.bind(this)}>
                <input 
                className='form-cadastro_input' 
                type='text' placeholder='Titulo' 
                onChange={this.handleMudancaTitulo.bind(this)}></input>

                <textarea 
                rows={15}
                className='form-cadastro_input' 
                placeholder="Digite uma Nota..."
                onChange={this.handleMudancaTexto.bind(this)}></textarea>
                <button className='form-cadastro_submit'>Criar Nota</button>
            </form>)
    }

}


export default Titulo