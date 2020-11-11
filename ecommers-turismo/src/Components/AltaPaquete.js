import React from 'react';
import uuid from 'react-uuid';
import { useState } from 'react';

const AltaPaquete = ({crearPaquete}) => {

    //crear state de tareas
    const [paquete, actualizarPaquete] = useState({
        nombre: '',
        descripcion: '',
        precio: '',
        comienzo: '',
        fin:'',
        duracion:'',
        idtipo: '',
        cupos: '',
        salida: ''
    });

    const [error, actualizarError] = useState(false)

    //funcion que se ejecuta cada vez que el usuario escribe en el input
    const actualizarState = e => {
        actualizarPaquete({
            ...paquete,
            [e.target.name]: e.target.value
        });
    };

    //extraer los valores
    const{ nombre, descripcion, precio, comienzo, fin, duracion, idtipo, cupos, salida } = paquete


    //cuando el usuario presione agregar tarea
    const submitPaquete = e => {
        e.preventDefault();

        //validar

        if(nombre.trim() === '' || descripcion.trim() ==='' || precio.trim() ==='' || comienzo.trim() ==='' 
            || fin.trim() ==='' || duracion.trim() ==='' || idtipo.trim() ==='' || cupos.trim() ==='' || salida.trim() ===''){
                actualizarError(true)
            return;
        }

        //eliminar mensaje

        actualizarError(false);

        //asignar un id
        paquete.id= uuid();
        console.log(paquete);

        //crear la tarea

        crearPaquete(paquete);

        //reiniciar el form

        actualizarPaquete({
            nombre: '',
            descripcion: '',
            precio: '',
            comienzo: '',
            fin:'',
            duracion:'',
            idtipo: '',
            cupos: '',
            salida: ''
        });
    };

    return ( 
        <>
            <h2>Cargar hotel</h2>

            { error ? <p>Todos los campos son obligatorios</p> : null } 

            <form
                onSubmit={submitPaquete} 
            >
                <div>
                    <label>Nombre de paquete</label>
                    <input 
                        type="text" 
                        name="nombre" 
                        placeholder="Nombre del paquete"
                        onChange={actualizarState}
                        value={nombre}
                    />
                </div>

                <div>
                    <label>Descripcion</label>
                    <textarea
                        name="descripcion"
                        onChange={actualizarState}
                        value={descripcion}  
                    ></textarea>
                </div>

                <div>
                    <label>Precio</label>
                    <input
                        type="text"
                        name="precio"
                        placeholder="precio"
                        onChange={actualizarState}
                        value={precio}
                    />
                </div>

                <div>
                    <label>Comienzo</label>
                    <input
                        type="date"
                        name="comienzo"
                        onChange={actualizarState}
                        value={comienzo}
                    />
                </div>

                <div>
                    <label>Fin</label>
                    <input
                        type="date"
                        name="fin"
                        onChange={actualizarState}
                        value={fin}
                    />
                </div>

                <div>    
                    <label>Duracion</label>
                    <input
                        type="text"
                        name="duracion"
                        placeholder="duracion"
                        onChange={actualizarState}
                        value={duracion}
                    /> 
                </div>

                <div>
                    <label>Tipo</label>
                    <input
                        type="text"
                        name="idtipo"
                        placeholder="idtipo"
                        onChange={actualizarState}
                        value={idtipo}
                    />
                </div>

                <div>
                    <label>Cupos</label>
                    <input
                        type="text"
                        name="cupos"
                        placeholder="cupos"
                        onChange={actualizarState}
                        value={cupos}
                    />
                </div>

                <div>
                    <label>Salida</label>
                    <input
                        type="text"
                        name="salida"
                        placeholder="salida"
                        onChange={actualizarState}
                        value={salida}
                    />
                </div>

                <button
                    type="submit"
                    class="button-primary"
                >
                    Agregar Paquete
                </button>
            </form>
        </>
     );
}
 
export default AltaPaquete;