import React, { useRef, useState, useEffect } from "react";
import MainButton from "./MainButton";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import AnimatedImage from "./AnimatedImage";
import { locations } from "../data/locationsData.js";

function ChangeMapView({ center }) {
  const map = useMap();
  map.setView(center, map.getZoom());
  return null;
}

function Locations() {
  const [selected, setSelected] = useState(0);
  const markerRefs = useRef([]);

  useEffect(() => {
    const marker = markerRefs.current[selected];
    if (marker && marker.openPopup) {
      marker.openPopup();
    }
  }, [selected]);

  return (
    <section className="bg-light xl:mt-20 px-3 md:px-0">
      <div className="container py-20">
        <div>
          <p className="text-main font-bold">Our Locations </p>
          <h2 className="text-black font-semibold mb-8">Choose the nearest branch</h2>
        </div>

        <div className="grid grid-flow-col md:grid-rows-1 grid-rows-3 gap-4">
          {locations.map((loc, idx) => (
            <div
              key={loc.name}
              className={`flex flex-col justify-between cursor-pointer p-8 rounded-3xl transition-all duration-200 ${
                idx === selected
                  ? "shadow-lg bg-main text-white"
                  : "bg-[#5EBBF7] text-white"
              }`}
              onClick={() => setSelected(idx)}
            >
              <div className="flex items-center gap-3">
                <AnimatedImage
                  width={20}
                  src="src/assets/images/icons/locationIcon.png"
                  alt="locationIcon"
                  animationType="bounceIn"
                  delay={idx * 200}
                  duration={600}
                />
                <h6>{loc.name}</h6>
              </div>
              <div className="ps-8 mb-8">
                <p className="my-4">{loc.address}</p>
                <span>Call us now : {loc.phone}</span>
              </div>
              <MainButton
                className="text-black bg-white hover:text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(idx);
                  window.open(
                    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      loc.address
                    )}`,
                    "_blank"
                  );
                }}
              >
                Open Location
              </MainButton>
            </div>
          ))}
        </div>

        <div className="rounded-3xl overflow-hidden mt-6" style={{ height: "400px" }}>
          <MapContainer
            center={[locations[selected].lat, locations[selected].lng]}
            zoom={10}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
          >
            <ChangeMapView center={[locations[selected].lat, locations[selected].lng]} />
            <TileLayer
              attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locations.map((loc, idx) => (
              <Marker
                key={idx}
                position={[loc.lat, loc.lng]}
                ref={(el) => (markerRefs.current[idx] = el)}
              >
                <Popup>
                  <strong>{loc.name}</strong>
                  <br />
                  {loc.address}
                  <br />
                  {loc.phone}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
}

export default Locations;
