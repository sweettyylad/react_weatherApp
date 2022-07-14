import React, {useEffect} from 'react';
import Sidebar from "./components/Sidebar";

import './App.scss'
import axios from "axios";

const getCityByCoords = async (e) => {
    return await axios.get('https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&location=' + e.coords.longitude + ',' + e.coords.latitude)
        .then(r => r)
        .then(d =>  d.data.address.City)
}

function App(props) {


    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async(e) => {

            })
        } else {
            alert('К сожалению, у вас заблокировано распознование геопозиции.')
        }
    }, [])

    return (
        <div className={"App"}>

            <Sidebar/>

        </div>
    );
}

export default App;