import React, { useState, useCallback } from "react";
import "./Body.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import aboutme from'../../img/aboutme.png';
import coding from'../../img/coding.png';
import design from'../../img/design.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container'


const photos = [
    {
      src: '../../img/backofficeLaravel.JPG',
      width: 4,
      height: 3,
      title:'projet1',
      slug:'/'
    },
    {
      src: '../../img/basica.png',
      width: 2,
      height: 1,
      title:'projet1',
      slug:'/'

    },
    {
        src: '../../img/backofficeLaravel.JPG',
        width: 4,
        height: 3,
        title:'projet1',
        slug:'/'
  
      },
      {
        src: '../../img/basica.png',
        width: 2,
        height: 1,
        title:'projet1',
        slug:'/'
  
      },
      {
        src: '../../img/backofficeLaravel.JPG',
        width: 4,
        height: 3,
        title:'projet1',
        slug:'/'
  
      },
      {
        src: '../../img/basica.png',
        width: 2,
        height: 1,
        title:'projet1',
        slug:'/'
  
      },
          {
      src: '../../img/backofficeLaravel.JPG',
      width: 4,
      height: 3,
      title:'projet1',
      slug:'/'

    },
    {
      src: '../../img/basica.png',
      width: 2,
      height: 1,
      title:'projet1',
      slug:'/'

    }
    
  ];
  
  
const Slide=()=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div id="mainBody">
        <Slider {...settings} style={{margin:0,maxWidth:"70vw",position:"relative",left:"15%",backgroundColor:"rgb(224, 223, 223)"}}>
          <div>
             <Container>
              <Row  >
              <Col id="imgAbout" xs="12" lg="6">
                      <img id="moiAbout" src={aboutme} alt="Natacha Steiver"/>
                      <img id="coding" src={coding} alt="coding"/>
                      <img id="design" src={design} alt="design"/>
              </Col>

              <Col id="services" xs="12" lg="6" className="d-flex justify-content-center">
              <h2></h2>
              </Col>
              </Row>
              </Container>

          </div>
          <div>
          <a href="#">
              <h3>2</h3>

              </a>

          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>

        </div>
      );

  }
    export default Slide;