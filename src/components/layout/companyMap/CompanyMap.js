import React, { useMemo } from "react";
import style from "./CompanyMap.module.css";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import mapStyle from "./mapsStyle.js";

const CompanyMap = () => {
  const center = useMemo(() => ({ lat: 57.7096952, lng: 11.994257 }), []);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      zoom={15}
      center={center}
      mapContainerClassName={style["map-container"]}
      options={{
        apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        draggable: true, //make map draggable
        scaleControl: true, //allow scale control
        styles: mapStyle,
      }}
    >
      <MarkerF position={center} />
    </GoogleMap>
  );
};

export default CompanyMap;
