import React from 'react'
import React, { useState, useEffect } from'react';
import {Map, Marker, Popup, TileLayer} from"react-leaflet";
// import {Icon} from 'leaflet'

export const MapaContactos = () => {
  return (

    <Mapcenter={[5.725,-72.940]} zoom={18}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© OpenStreetMap contributors'
        />
    </<span class="hljs-name">Map></span>
  )
}
export default MapaContactos;
