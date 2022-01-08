import React, { useState, useCallback } from "react";
import "./Body.scss";
import {Slide} from "../../../../gatsby-theme-minimal";
import {About} from "../../../../gatsby-theme-minimal";
import {Cards} from "../../../../gatsby-theme-minimal";
import {Footer} from "../../../../gatsby-theme-minimal";

const Body=()=>{
      return (
        <div id="mainBody">
          <div id="aboutMe">
          <Slide/>
          <About/>
          <Cards/>

          </div>
          <Footer/>
        </div>
      );

  }
    export default Body;