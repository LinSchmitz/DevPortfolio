// eslint-disable-next-line no-unused-vars
import React from 'react';

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="sec">
        <section className="left">left</section>
        <section className="right">right</section>
      </div>
      <div className="socials">
        <button className="btn btn-f">f</button>
        <button className="btn btn-x">X</button>
        <button className="btn btn-in">in</button>
        <button className="btn btn-g">g</button>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="navbar">
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Projects</h4>
    </div>
  );
}
