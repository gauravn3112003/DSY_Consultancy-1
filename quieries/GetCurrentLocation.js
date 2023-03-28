import React from "react";
import { useState, useEffect } from "react";

export const GetCurrentLocation = () => {
  const [coOrdinates, setcoOrdinates] = useState({});
  const getCoordinates = () => {
    return coOrdinates;
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setcoOrdinates({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  return getCoordinates;
};
