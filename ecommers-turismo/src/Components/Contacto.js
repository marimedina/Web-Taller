import React from 'react';

const Contacto = () => {
    return(
        <div className="row col s12">
            <h5>Contacto</h5>
            <hr/>
            <div className="container col s6">
                <h6>Nombre y apellido</h6>
                <textarea name="nombreyapellido"></textarea>
                <h6>Email</h6>
                <textarea name="email"></textarea>
                <h6>Mensaje</h6>
                <textarea name="mensaje"></textarea>
                <div className="col s12 m6 l3 right">
                    <button class="btn waves-effect waves-light grey" type="submit" name="action">Enviar
                        <i class="material-icons right">send</i>
                    </button>
                </div>
            </div>
            <div className="container col s6">
                <p>Tambien se puede contactar con nosotros a través de:</p>
                <hr/>
                <h6>@explore</h6>
                <h6>Explore turismo</h6>
                <h6>explore@outlook.com</h6>
        </div>
        


    </div>
    )
}

export default Contacto;