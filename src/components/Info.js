import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

function LocationInfo({ location, isLoading, error, onClear }) {
  const override = {
    display: "block",
    margin: "15px auto",
    borderColor: "grey",
  };

  if (isLoading) {
    return <div> <ClipLoader loading={isLoading} cssOverride={override}/> </div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (location) {
    return (
      <div class="container mt-3 card">
        <h3 style={{ wordSpacing: "10px" }} className="mt-2">{location.country}-{location["country abbreviation"]} {location["post code"]}</h3>
        <div className="row">
          {location.places.map((place, index) => (
            <div className="col-4" key={index}>
              <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                  <h5 className="card-title">{place.state}</h5>
                  <p className="card-text">State Abbreviation: {place["state abbreviation"]}</p>
                  <p className="card-text">Place Name: {place["place name"]}</p>
                  <p className="card-text">Longitude: {place.longitude}</p>
                  <p className="card-text">State: {place.state}</p>
                  <p className="card-text">Latitude: {place.latitude}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="mt-3 mb-3 btn btn-danger" onClick={onClear}>Clear</button>
        </div>
      </div>
    );
  }
  return null;
}

export default LocationInfo;
