import React from "react";
import Box from "@mui/material/Box";

function HomePage() {
  return (
    <>
      <div className="home-container">
        <div className="title-container">
          <h1 className="title">Front End </h1>
          
        </div>

        {/* on hover the heading first changes to heading second */}

        {/* <h1>
          Abhishek <br /> Kumar
        </h1> */}

        {/* photo container with framer motin division */}
        
        <Box className="image-container"></Box>

      </div>
    </>
  );
}

export default HomePage;
