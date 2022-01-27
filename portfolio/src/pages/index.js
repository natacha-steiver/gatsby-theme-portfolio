import React from "react"
import {Header} from "../../../gatsby-theme-minimal";
import {Body} from "../../../gatsby-theme-minimal";
import {AsideTop} from "../../../gatsby-theme-minimal";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";

import { withPrefix } from 'gatsby'

const Home=() =>{
  return (
  <>
  <Router basepath={withPrefix("/app")}>
  <AsideTop/>
  <Header/>
  <Body/>
  </Router>

 
  </>
  )
}


export default Home;
