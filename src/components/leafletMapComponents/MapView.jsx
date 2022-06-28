import React from 'react';
import '../../styles/MapView.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 36],
  iconAnchor: [15, 35],
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapView = () => {
  return (
    <>
      <MapContainer center={[-32.9135869, -60.675371]} zoom={15} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-32.9135869, -60.675371]}>
          <Popup>
            Juan B. Cordiviola 1227 <br /> 
            Rosario, Santa Fe
          </Popup>
        </Marker> 
      </MapContainer>
    </>
  )
}

export default MapView