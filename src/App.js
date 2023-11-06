import './App.css';
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Info from "./components/Info"

function App() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchLocationInfo = async (zipCode) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.zippopotam.us/in/${zipCode}`);
      if (!response.ok) {
        throw new Error("Invalid Zip Code");
      }
      const data = await response.json();
      setLocation(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const clearLocationInfo = () => {
    setLocation(null);
    setError(null);
  };

  return (
    <div className="container">
      <h1 className="text-center mt-3">Zip Code Information App</h1>
      <Form onZipCodeSubmit={fetchLocationInfo} />
      <Info
        location={location}
        isLoading={loading}
        error={error}
        onClear={clearLocationInfo}
      />
    </div>
  );
}

export default App;
