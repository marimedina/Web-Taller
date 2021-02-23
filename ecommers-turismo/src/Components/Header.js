import React from 'react';

const Header = () => {
    return(
        <nav className="nav-extended grey darken-3">
            <div className="nav-wrapper">
            <a href="#" className="brand-logo center">Logo</a>
            </div>
            <div className="nav-content">
                <ul className="tabs tabs-transparent">
                    <li className="tab"><a href="#Inicio">Inicio</a></li>
                    <li className="tab"><a href="#Paquetes">Paquetes</a></li>
                    <li className="tab"><a href="#Ofertas">Ofertas</a></li>
                    <li className="tab"><a href="#Contacto">Contacto</a></li>
                    {/* <div className="col s12 m4 l8">
                        <form>
                            <div className="input-field">
                            <input id="search" type="search" required></input>
                            <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                            <i class="material-icons">close</i>
                            </div>
                        </form>
                    </div> */}
                    <i className="right material-icons">shopping_cart</i>
                    <i className="right material-icons">perm_identity</i>
                </ul>
            </div>
        </nav>
    );
}

export default Header;