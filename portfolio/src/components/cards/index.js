import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container'

import moi from'../../img/moi.png';

const cardsList=[
    {
      src: '../../img/backofficeLaravel.JPG',
      width: 4,
      height: 3,
      title:'projet1',
      description:"description",
      slug:'/'
    },
    {
      src: '../../img/backofficeLaravel.JPG',
      width: 4,
      height: 3,
      title:'projet1',
      description:"description",
      slug:'/'
    },
    {
      src: '../../img/backofficeLaravel.JPG',
      width: 4,
      height: 3,
      title:'projet1',
      description:"description",
      slug:'/'
    },
  
  ]

  
const Cards=()=>{
      
    //faire un map et récupérer props pour faire plusieurs cards
  return (
      <Container style={{marginBottom:"4rem",textAlign:"center"}}>
          <h3>My projects</h3>
<Row>
{cardsList.map(el=>{
          return(
            <Col className="col-xs-12 col-md-12 col-lg-4 col-12">
             <Card sx={{ maxWidth: 345 }} style={{display:"inline-block"}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={el.src}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 {el.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Lear more
              </Button>
            </CardActions>
          </Card>

            </Col>
    
            
    
          )
      }
  
        )}

</Row>

      </Container>
  );
}
export default Cards;