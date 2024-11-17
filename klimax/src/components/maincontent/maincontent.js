import React from "react";
import Title from "./title/title";
import Description from "./description/description";
import SearchBar from "./searchbar/searchbar";

function Maincontent() {
    return (
      <div className="Maincontent">
       <Title/>
       <SearchBar/>
       <Description/>
      </div>
    );
  }
  
  export default Maincontent;