import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cita extends Component {

    eliminarCita = () => {
        this.props.borrarCita( this.props.info.id );
    }
 
    render() {

        const {fecha, hora, mascota, propietario, sintomas} = this.props.info;
        console.log(this.props.info);
        return ( 
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0">{mascota}</h3>
                    <p className="card-text"><span>Nombre dueño: </span>{propietario}</p>
                    <p className="card-text"><span>Fecha: </span>{fecha}</p>
                    <p className="card-text"><span>Hora: </span>{hora}</p>
                    <p className="card-text"><span>Síntomas: </span></p>
                    <p className="card-text">{sintomas}</p>
                    <button onClick={this.eliminarCita} className="btn btn-danger">Eliminar</button>
                </div>
            </div>
         );
    }
}

Cita.propTypes = {
    //EN ESTE CASO "INFO" ES UN OBJETO DEMASIADO GRANDE
    //ENTONCES USAMOS UN "SHAPE", YA QUE HAY QUE PARTICIONARLO
    info : PropTypes.shape({
        fecha :  PropTypes.string.isRequired,
        hora : PropTypes.string.isRequired,
        mascota : PropTypes.string.isRequired,
        propietario : PropTypes.string.isRequired,
        sintomas : PropTypes.string.isRequired,
        id : PropTypes.string.isRequired
    }),
    borrarCita : PropTypes.func.isRequired
}

export default Cita;