import React from "react"
import {Header} from "../../../gatsby-theme-minimal";
import {Body} from "../../../gatsby-theme-minimal";
import {AsideTop} from "../../../gatsby-theme-minimal";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";



const Home=() =>{
  return (
  <>
  
  <AsideTop/>
  <Header/>
  <Body/>
 
  </>
  )
}


export default Home;
