import { useEffect, useRef } from "react";

const GoogleMapPolygon = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (!window.google) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBscb7avYwHc3Ahr8WLt5Pp0xU_Ok7JyYk&libraries=places`;
        script.async = true;
        script.onload = initMap;
        document.head.appendChild(script);
      } else {
        initMap();
      }
    };

    const initMap = () => {
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 22.7196, lng: 75.8577 }, // Indore location
        zoom: 12,
      });

      const polygonCoords = [
        { lat: 22.7206, lng: 75.8500 },
        { lat: 22.7250, lng: 75.8600 },
        { lat: 22.7150, lng: 75.8700 },
        { lat: 22.7100, lng: 75.8550 },
      ];

      const polygon = new google.maps.Polygon({
        paths: polygonCoords,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
      });

      polygon.setMap(map);
    };

    loadGoogleMaps();
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "500px" }} />;
};

export default GoogleMapPolygon;
