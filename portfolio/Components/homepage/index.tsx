import React from "react";
import Box from "@mui/material/Box";

function HomePage() {
  return (
    <>
      <div className="home-container">
        <h1 className="title">
          Front End <br /> Developer
        </h1>

      {/* on hover the heading first changes to heading second */}
        {/* <h1>
          Abhishek <br /> Kumar
        </h1> */}

        {/* photo container with framer motin division */}
        <div className="image-container">Profile picture here</div>
      </div>
    </>
  );
}

export default HomePage;
