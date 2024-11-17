import React from "react";
import Title from "./title/title";
import Description from "./description/description";
import SearchBar from "./searchbar/searchbar";
import RandomFilmsButton from "./buttons/randomfilmsButton/randomfilmsButton";

function Maincontent() {
    return (
      <div className="Maincontent">
       <Title/>
       <SearchBar/>
       <Description/>
       <RandomFilmsButton/>
      </div>
    );
  }
  
  export default Maincontent;