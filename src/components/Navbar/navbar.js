import React from "react";
import "./Navbar.css";

const styles = {
  card: {
    margin: 20,
    background: "#e8eaf6"
  },
  heading: {
    background: "#9a74db",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px",
  }
};

const Navbar = props => (
  <div style={styles.card}>
    <div style={styles.heading}>Score: {props.children} </div>
  </div>
);


export default Navbar;
