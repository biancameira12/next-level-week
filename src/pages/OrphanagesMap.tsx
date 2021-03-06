import React from 'react';
import mapMarketing from '../images/map-marker.svg'
import { Map, TileLayer } from 'react-leaflet';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import 'leaflet/dist/leaflet.css';
import '../styles/pages/orphanages-map.css';

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarketing} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Curitiba</strong>
                    <span>Paraná</span>
                </footer>
            </aside>
            <Map
                center={[-22.4746482, -47.458847]}
                zoom={15}
                style={{
                    width: '100%',
                    height: '100%'
                }}
            >
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
            </Map>

            <Link to='/' className='create-orphanage'>
                <FiPlus size={32} color='#eee' />
            </Link>
        </div>

    );

}

export default OrphanagesMap;