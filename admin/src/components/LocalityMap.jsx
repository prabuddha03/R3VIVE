import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 37.7749, // Replace with your desired latitude
  lng: -122.4194, // Replace with your desired longitude
};

const LocalityMaps = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [distance, setDistance] = useState(null);
  const [directions, setDirections] = useState(null);

  useEffect(() => {
    // Get the user's current location
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setCurrentPosition(userPosition);
          calculateDistanceAndDirections(userPosition, center);
        },
        (error) => {
          console.error("Error getting current position:", error);
        }
      );
    } else {
      console.error("Geolocation not available.");
    }
  }, []);

  const calculateDistanceAndDirections = (origin, destination) => {
    if (window.google && window.google.maps) {
      const service = new window.google.maps.DistanceMatrixService();
      service.getDistanceMatrix(
        {
          origins: [origin],
          destinations: [destination],
          travelMode: "DRIVING",
        },
        (response, status) => {
          if (status === "OK") {
            const distanceText = response.rows[0].elements[0].distance.text;
            setDistance(distanceText);
          } else {
            console.error("Error calculating distance:", status);
          }
        }
      );
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: "DRIVING",
        },
        (result, status) => {
          if (status === "OK") {
            setDirections(result);
          } else {
            console.error("Error calculating directions:", status);
          }
        }
      );
    } else {
      console.error("Google Maps JavaScript API not loaded.");
    }
  };

  return (
    <div>
      <header className="App-header">
      </header>
      <div className="map-container">
        <LoadScript googleMapsApiKey="key goes herereeeeeeeeeeeeeeeeeeeeeeeeeeee">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
          >
            {currentPosition && (
              <Marker position={currentPosition} title="Your Location" />
            )}
            <Marker position={center} title="Destination" />
            {directions && (
              <DirectionsRenderer
                directions={directions}
                options={{
                  polylineOptions: {
                    strokeColor: "blue",
                    strokeWeight: 5,
                  },
                }}
              />
            )}
          </GoogleMap>
        </LoadScript>
      </div>
      {distance && <p>Distance: {distance}</p>}
    </div>
  );
};

export default LocalityMaps;
