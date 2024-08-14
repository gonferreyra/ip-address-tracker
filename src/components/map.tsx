'use client';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { LatLngExpression, LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

type MapProps = {
  zoom?: number;
  posix: LatLngExpression | LatLngTuple;
};

export default function Map(props: MapProps) {
  const { zoom = 19, posix } = props;
  return (
    <MapContainer
      center={posix}
      zoom={zoom}
      scrollWheelZoom={true}
      zoomControl={false}
      style={{
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: '210px',
        left: 0,
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={posix}>
        <Popup>Your Location.</Popup>
      </Marker>
    </MapContainer>
  );
}
