import React from "react";
import jsonData from "../restApi.json";
const Team = () => {
  const team = jsonData?.data[0]?.team;
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
            Our team is a passionate group of professionals dedicated to driving
            innovation and delivering excellence in everything we do.
          </p>
        </div>
        <div className="team_container">
          {team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
