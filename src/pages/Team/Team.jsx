import React from "react";
import linkedin from "../../assets/linkedin.png";
import medium from "../../assets/medium.png";
import fb from "../../assets/facebook.png";
import nba from "../../assets/nba.png";

import zidane from "../../assets/zidane.jpg";
import toni from "../../assets/tonikroos.jpg";
import iker from "../../assets/ikercasillas.jpg";
import james from "../../assets/james.jpg";
import cristiano from "../../assets/christiano.jpg";
import "./Team.css";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      img: zidane,
      name: "Zidane",
      role: "Leadership & management",
      socialOne: linkedin,
      socialTwo: medium,
      socialThree: fb,
    },
    {
      id: 2,
      img: toni,
      name: "Toni Kroos",
      role: "Product developer",
      socialOne: linkedin,
      socialTwo: medium,
    },
    {
      id: 3,
      img: iker,
      name: "Iker Casillas",
      role: "Marketing statergy",
      socialOne: medium,
    },
    {
      id: 4,
      img: james,
      name: "James",
      role: "Product designer",
      socialOne: medium,
      socialTwo: nba,
    },
    {
      id: 5,
      img: cristiano,
      name: "Cristiano",
      role: "Financial operations",
      socialOne: linkedin,
      socialTwo: fb,
    },
  ];
  return (
    <main className="team_wrapper my-3 mx-auto">
      <div className="teamcard-container">
        <h2 className="slogan txt-center pt-4 pb-5">
          Without bonding and coordination, every project is a failure. Look at
          who makes KICKSUP great. ;)
        </h2>
        <section className="teammates mt-6">
          {teamMembers.map((team) => {
            const { id, img, name, role, socialOne, socialTwo, socialThree } =
              team;
            return (
              <div key={id} className="team-card">
                <img src={img} alt="team-member-image" className="team-img" />
                <div className="team-member-about">
                  <h3>{name}</h3>
                  <div>{role}</div>
                  <div className="team-socials">
                    <img
                      src={socialOne}
                      alt="socials"
                      className="social-icon m-1"
                    />
                    {socialTwo && (
                      <img
                        src={socialTwo}
                        alt="socials"
                        className="social-icon m-1"
                      />
                    )}
                    {socialThree && (
                      <img
                        src={socialThree}
                        alt="socials"
                        className="social-icon m-1"
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </section>
        <h2 className="slogan txt-center pt-4">and You! ;)</h2>
      </div>
    </main>
  );
};

export { Team };
