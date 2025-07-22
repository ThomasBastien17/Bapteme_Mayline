"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import MapUpdater from "./MapUpdater";

type MarkerPoint = {
  lat: number;
  lng: number;
  label?: string;
  type?: "eglise" | "ceremonie" | "parking";
};

type LeafletMapProps = {
  markers: MarkerPoint[];
  zoom?: number;
};

export default function LeafletMap({ markers, zoom = 14 }: LeafletMapProps) {
  const center: [number, number] = markers.length > 0
    ? [markers[0].lat, markers[0].lng]
    : [48.8566, 2.3522];

  // Icônes personnalisées
  const icons = {
    eglise: new Icon({
      iconUrl: "/icons/church.png",
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30],
    }),
    ceremonie: new Icon({
      iconUrl: "/icons/house.png",
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30],
    }),
    parking: new Icon({
      iconUrl: "/icons/parking.png",
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30],
    }),
  };

  return (
    <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} className="w-full h-full border-2 border-gray-300">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapUpdater center={center} />

      {markers.map((point, index) => (
        <Marker
          key={index}
          position={[point.lat, point.lng]}
          icon={icons[point.type || "eglise"]} // par défaut : église
        >
          {point.label && <Popup>{point.label}</Popup>}
        </Marker>
      ))}
    </MapContainer>
  );
}
