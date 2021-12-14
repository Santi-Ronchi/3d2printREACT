import React from 'react'
import '../App.css';
import '../estructura.scss'
import logo from '../media/logo.png';
import fb from '../media/facelogo.png';
import ig from '../media/instalogo.png';
import tw from '../media/twitlogo.png';


const NavBar = () => {
    return (
        <div>
            <header className="encabezado">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Eighth navbar example">
                  <div className="container">
                    <a className="navbar-brand" href="index.html"><img src={logo} alt="Logo de la pagina" height="60" width="60"/><h1 className="encabezado__logo">3D2Print</h1></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExample07">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                          <a className="nav-link" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="./Secciones/productos.html">Productos</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="./Secciones/sobre-nosotros.html">Sobre Nosotros</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="./Secciones/servicios.html">Servicios</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="./Secciones/contacto.html">Contacto</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="https://instagram.com/3d2prints"><img src={ig} alt="" height="30" width="30"/></a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="https://facebook.com/3D2prints-108727260476174"><img src={fb} alt="" height="30" width="30"/></a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="https://twitter.com/3d2prints"><img src={tw} alt="" height="30" width="30"/></a>
                        </li>
                      </ul>

                    </div>
                  </div>
                </nav>
            </header>
        </div>
    )
}

export default NavBar