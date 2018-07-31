import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      descripcion:'',
      genero:''
      
    };
  
    this.handleChangeNombre = this.handleChangeNombre.bind(this);
    this.handleChangeDescripcion = this.handleChangeDescripcion.bind(this);
    this.handleChangeGenero = this.handleChangeGenero.bind(this);
    
  }

    handleChangeNombre(event) {
      this.setState({nombre: event.target.value});
    }
    handleChangeDescripcion(event) {
      this.setState({descripcion: event.target.value});
    }
    handleChangeGenero(event) {
      this.setState({genero: event.target.value});
    }

    


  render() {
    return (
      <div className="App">
        <form action="">
        <div className="name">
          <label htmlFor="">Nombre</label>
          <input name="nombre" type="text" value={this.state.nombre} onChange={this.handleChangeNombre} />
          </div>
           <div className="description">
          <label htmlFor="">Descripción</label>
          <textarea name="descripcion" id="" cols="30" rows="10" value= {this.state.descripcion} onChange={this.handleChangeDescripcion} />
          </div>
          <div className="gender">
          <select name="genero" id="" value= {this.state.genero} onChange={this.handleChangeGenero} >
            <option>Comedia</option>
            <option>Drama</option>
            <option>Infantil</option>
          </select>
          </div>
        </form>
      </div>
    );
  }
}

export default Formulario;
