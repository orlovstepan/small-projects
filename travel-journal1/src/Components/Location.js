import React from "react";

function Location(props) {
  const item = props.item;

  return (
    <>
      <div className="location--card">
        <img className="photo" src={item.imageUrl} alt={item.title} />
        <div className="location--card--text">
          <div className="location--card--location">
            <img className="path-icon" src="/path.png" alt="path-icon" />
            <p className="country"> {item.location.toUpperCase()} </p>
            <a href={item.googleMapsUrl} target="_blank" rel="noreferrer">
              <p className="maps">View on Google Maps</p>
            </a>
          </div>
          <h1 className="location--card--name"> {item.title}</h1>
          <p className="dates">
            {item.startDate} - {item.endDate}
          </p>
          <p className="description">{item.description}</p>
        </div>
      </div>
      <img src="./line.png" alt="horizontal-line" />
    </>
  );
}

export default Location;
