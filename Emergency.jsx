import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix Leaflet marker icon
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function Emergency() {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = [pos.coords.latitude, pos.coords.longitude];
        setPosition(coords);

        const message = new SpeechSynthesisUtterance(
          "Emergency activated. Stay calm. Your location is being tracked. Call the police or find the nearest police station."
        );
        window.speechSynthesis.speak(message);
      },
      (err) => {
        alert("Location access denied.");
        console.error(err);
      }
    );
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🚨 Emergency SOS</h2>
      {position ? (
        <>
          <MapContainer center={position} zoom={15} style={{ height: "400px", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}>
              <Popup>You are here</Popup>
            </Marker>
          </MapContainer>
          <br />
          <button
            onClick={() => window.location.href = "tel:100"}
            style={{ padding: "12px", marginRight: "10px", backgroundColor: "red", color: "white", border: "none", borderRadius: "5px" }}
          >
            📞 Call Police (100)
          </button>
          <button
            onClick={() => {
              const [lat, lng] = position;
              window.open(`https://www.google.com/maps/search/police+station/@${lat},${lng}`, "_blank");
            }}
            style={{ padding: "12px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px" }}
          >
            🗺️ Nearest Police Station
          </button>
        </>
      ) : (
        <p>Fetching your location...</p>
      )}
    </div>
  );
}
