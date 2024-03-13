import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import {Outlet} from 'react-router-dom'

const App = () => {
  
  return (
    <div>
      <Navbar />
      <div
        style={{
          width: "80%",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          margin: "0 auto",
          gap: "50px",
        }}
      >
      </div>
        <Outlet />
    </div>
  );
};

export default App;
