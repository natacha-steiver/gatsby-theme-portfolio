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
              <Col id="imgAbout">
                      <img id="moiAbout" src={aboutme} alt="Natacha Steiver"/>
                      <img id="coding" src={coding} alt="coding"/>
                      <img id="design" src={design} alt="design"/>
              </Col>

              </Row>
              </Container>

          </div>
          {
            photos.map(el=>{
              return(
                <div>
                <a href="#">
                    <h3>{el.title}</h3>
                    <img style={{maxWidth:"25%"}} src={el.src} alt={el.title}/>
      
                    </a>
      
                </div>
      
              )
            })
          }

        </Slider>

        </div>
      );

  }
    export default Slide;