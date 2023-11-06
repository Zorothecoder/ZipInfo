import React, { useState } from "react";

function Form({ onZipCodeSubmit }) {
  const [zipCode, setZipCode] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onZipCodeSubmit(zipCode);
  };
  return (
    <div>
      <form className="text-center" onSubmit={handleSubmit}>
        <input className="form-control" type="text" placeholder="Enter Postal Code" value={zipCode} onChange={(e) => setZipCode(e.target.value)}></input>
        <button type="submit" className="btn btn-success mt-3">Fetch Info</button>
      </form>
    </div>
  );
}

export default Form;
