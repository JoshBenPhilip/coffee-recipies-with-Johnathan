import React from "react";
import { Link } from "react-router-dom";

function Home () {
    return (
        <div>
      <h1>Home Page</h1>
      <Link to ="/contactform">
      <button>Contact Form</button>
      </Link>
      <Link to ="/Coffees"></Link>
      <button>Hot Coffee List</button>
      <Link to ="/coffees/hot"></Link>
      <button>Coffee List</button>
      <Link to ="/Coffees/iced"></Link>
      <button>Coffee List</button>
      <Link to ="/Coffees"></Link>
      <button>Coffee List</button>
        </div>
    )
}