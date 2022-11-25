import React from "react";
import { Navbar } from "../../component/navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <main className="home-wrapper">
      <Navbar />
      <section className="flex-center home-content">
        <h1 className="fs-4">KICKSUP</h1>
      </section>
    </main>
  );
};

export { Home };
