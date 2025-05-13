import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import axios from 'axios';

export default function RouteMap({ from, to }) {
  const [coords, setCoords] = useState([]);

  useEffect(() => {
    axios.get(`/api/routes?from=${from}&to=${to}`).then(res => {
      const points = res.data.routes[0].legs[0].steps.flatMap(s => s.polyline.points);
      // decoding polyline omitted for brevity; use a polyline decoder lib in real app
      setCoords(points.map(pt => /* decode to [lat,lng] */ pt));
    });
  }, [from, to]);

  if (!coords.length) return <div>Loading route...</div>;

  return (
    <MapContainer center={coords[0]} zoom={10} className="h-64 rounded">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Polyline positions={coords} />
    </MapContainer>
  );
}