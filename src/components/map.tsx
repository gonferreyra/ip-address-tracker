'use client';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { LatLngExpression, LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import L from 'leaflet';

type MapProps = {
  zoom?: number;
  posix: LatLngExpression | LatLngTuple;
};

export default function Map(props: MapProps) {
  const { zoom = 19, posix } = props;

  const imageIcon = L.icon({
    iconUrl: '/icon-location.svg',

    iconSize: [40, 55], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  });

  return (
    <MapContainer
      center={posix}
      zoom={zoom}
      scrollWheelZoom={true}
      zoomControl={false}
      style={{
        height: 'inherit',
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
      <Marker position={posix} icon={imageIcon}>
        <Popup>Your Location.</Popup>
      </Marker>
    </MapContainer>
  );
}
