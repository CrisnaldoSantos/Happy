import React from "react";
import {Link} from "react-router-dom";
import {FiPlus} from "react-icons/fi"
import mapMarkerImg from '../assets/img/Local.png';
import '../styles/orphanagesMap.css';

const OrphanagesMap = () =>{
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Estância</strong>
                    <span>Sergipe</span>
                </footer>
            </aside>

            <div></div>

            <Link to="" className="create-orphanate">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;