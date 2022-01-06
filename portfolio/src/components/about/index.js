import React, { useState, useCallback } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./About.scss";
import moiAbout from'../../img/moiabout.png';
import {Row,Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import {ContactCard} from "../../../../gatsby-theme-minimal";
import {Skills} from "../../../../gatsby-theme-minimal";


const About=()=>{
      return (
      
    <div  id="about">
    <Row id="sectionAbout" >
    <Col xs="12" lg="6" className="d-flex justify-content-center">
    <img  src={moiAbout} alt="Natacha Steiver"/>
    </Col>

    <Col xs="12" lg="6">
      <span id="intro">My intro</span>
      <h2 id="aboutTitle">
        About me
      </h2>
      <div >
      <p>I'm a fullstack developer. I design graphic interface, front-end and back-end architecture for your web app or you mobile application .
        I use several technologies such as javascript framework (Angular,React,Express), php oop and framework (laravel,symfony) and SQL, NO-SQL database.

      </p>
      
        <ContactCard/>
      </div>
    </Col>

    </Row>
    <Row id="skillSection">
        <Skills/>
    </Row>


    </div>

      
      );

  }
    export default About;