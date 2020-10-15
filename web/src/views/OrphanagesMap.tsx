import React from "react";
import {Link} from "react-router-dom";
import {FiPlus} from "react-icons/fi"
import mapMarkerImg from '../assets/img/Local.png';
import {Map, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
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

            <Map
                center={[-11.2589485,-37.4347549]}
                zoom={15}
                style={{ width:'100%', height:'100%'}}
            >
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_KEY}`}
                />
            </Map>

            <Link to="" className="create-orphanate">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;