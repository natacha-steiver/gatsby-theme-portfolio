import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./footer.scss"
import {Row,Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import youtube from'../../img/youtube.png';
import facebook from'../../img/fb.png';
import linkedin from'../../img/linkedin.png';
import github from'../../img/github.png';

 const Footer=()=>{

    return(
        <footer>
              <Container style={{textAlign:"center"}}>
                  <Row /*style={{ transform: "translateY(100%)"}} */ >
                  <Col><a><img src={linkedin} alt="linkedin"/></a></Col>
                  <Col><a><img src={github} alt="github"/></a></Col>
                      <Col><a><img src={facebook} alt="facebook"/></a></Col>
                      <Col><a><img src={youtube} alt="youtube"/></a></Col>
                     

                  </Row>
              </Container>
        </footer>
    )
}
export default Footer;