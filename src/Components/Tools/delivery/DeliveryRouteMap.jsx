import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Create custom marker icons using the default Leaflet images
const createLeafletIcon = () => {
  return new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
};

// Mock coordinates for Moroccan cities
const cityCoordinates = {
  "Casablanca Warehouse": [33.5731, -7.5898],
  "Casablanca Tower Site": [33.5731, -7.5898],
  "Settat": [33.0021, -7.6196],
  "Marrakech Showroom": [31.6295, -7.9811],
  "Rabat Construction Site": [34.0209, -6.8416],
  "Kenitra": [34.2610, -6.5802],
  "Tangier Factory": [35.7595, -5.8340],
  "Fes Office": [34.0331, -5.0003],
  "Taourirt": [34.4071, -2.8978],
  "Oujda Warehouse": [34.6816, -1.9006],
  "Safi": [32.2988, -9.2377],
  "Agadir Construction Site": [30.4278, -9.5981],
  "Meknes City Center": [33.8833, -5.5500],
  "Meknes Glass Workshop": [33.8833, -5.5500],
  "Kenitra Showroom": [34.2610, -6.5802],
  "El Jadida Outskirts": [33.2543, -8.5061],
  "El Jadida Art Studio": [33.2543, -8.5061],
};

const DeliveryRouteMap = ({ deliveries }) => {
  // Get the first in-transit delivery for the map demo
  const activeDelivery = deliveries.find(d => d.status.name === "In Transit") || deliveries[0];

  if (!activeDelivery) return (
    <div className="bg-white p-4 rounded-lg shadow-sm h-full">
      <h3 className="font-medium text-gray-700 mb-4">Delivery Route Map</h3>
      <div className="h-64 flex items-center justify-center text-gray-500">
        No active deliveries to display
      </div>
    </div>
  );

  const fromCoords = cityCoordinates[activeDelivery.route.from];
  const toCoords = cityCoordinates[activeDelivery.route.to];
  const currentCoords = cityCoordinates[activeDelivery.route.current] || 
    interpolateCoords(fromCoords, toCoords, activeDelivery.route.progress / 100);

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm h-full">
      <h3 className="font-medium text-gray-700 mb-4">
        Route Map: {activeDelivery.deliveryId} - {activeDelivery.customerName}
      </h3>
      <div className="h-64 rounded-lg overflow-hidden">
        <MapContainer
          center={currentCoords}
          zoom={7}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={fromCoords} icon={createLeafletIcon()}>
            <Popup>From: {activeDelivery.route.from}</Popup>
          </Marker>
          <Marker position={toCoords} icon={createLeafletIcon()}>
            <Popup>To: {activeDelivery.route.to}</Popup>
          </Marker>
          <Marker position={currentCoords} icon={createLeafletIcon()}>
            <Popup>Current: {activeDelivery.route.current}</Popup>
          </Marker>
          <Polyline
            positions={[fromCoords, currentCoords, toCoords]}
            color="blue"
            weight={3}
            dashArray="5, 5"
          />
        </MapContainer>
      </div>
    </div>
  );
};

// Helper function to interpolate coordinates based on progress
function interpolateCoords(from, to, progress) {
  return [
    from[0] + (to[0] - from[0]) * progress,
    from[1] + (to[1] - from[1]) * progress,
  ];
}

export default DeliveryRouteMap;