import React, { useState, useCallback } from "react";
import "./Body.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
  
  
const Body=()=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div id="mainBody">
        <Slider {...settings}>
          <div>
              <a href="#">
              <h3>1</h3>

              </a>
          </div>
          <div>
            <h3>2</h3>
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
    export default Body;