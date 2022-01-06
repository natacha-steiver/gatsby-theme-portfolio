import React, { useState, useCallback } from "react";
import "./Body.scss";
import {Slide} from "../../../../gatsby-theme-minimal";
import {About} from "../../../../gatsby-theme-minimal";

const Body=()=>{
      return (
        <div id="mainBody">
          <div id="aboutMe">
{/*Mettre cette partie dans un slider
 comme ça header est en deux partie 
 et y a que le bas qui change */}
          <Slide/>
          <About/>

          </div>

        </div>
      );

  }
    export default Body;