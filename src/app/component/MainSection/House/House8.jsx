'use client';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix icon issue with Leaflet in React
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = L.icon({
  iconUrl,
  iconRetinaUrl,
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl,
  iconSize: [25, 41],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = defaultIcon;

const House8 = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[600px]">
      <MapContainer
        center={[28.459497, 77.026638]}
        zoom={13}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[28.459497, 77.026638]}>
          <Popup>
            Here is the location of our office.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default House8;
