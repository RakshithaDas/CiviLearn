import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const ImageCarousel = () => (
  <div id="imageCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
    <div className="carousel-inner">
      {[1,2,3,4,5,6,7,8,9].map((num, idx) => (
        <div key={num} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
          <img src={`/DTL_img${num}.jpeg`} className="d-block w-100" style={{ height: '400px', objectFit: 'cover' }} alt={`Slide ${num}`} />
        </div>
      ))}
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon"></span>
    </button>
  </div>
);

export default function Home() {
  const [position, setPosition] = useState(null);
  const [showMap, setShowMap] = useState(false);

  const handleEmergencyClick = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
        setShowMap(true);
      },
      () => alert("Location access denied")
    );
  };

  return (
    <div className="container text-center">
      <h1 className="mt-4 text-primary">CiviLearn</h1>
      <p className="mb-4">Empower Yourself. Know Your Rights.</p>
      <ImageCarousel />

      <button className="btn btn-danger mb-4" onClick={handleEmergencyClick}>
        🚨 Emergency - Track My Location
      </button>

      {showMap && position && (
        <MapContainer center={position} zoom={15} style={{ height: '400px', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}>
            <Popup>📍 You are here!</Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
}
