import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import RestroCard from "./Components/Restaurants/RestroCard";

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
        <RestroCard />
      </div>
    </div>
  );
};

export default App;
