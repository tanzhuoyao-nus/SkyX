import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './components.css'; 
import {Grid} from '@material-ui/core'; 

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 145,
    width: 700, 
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div>    
    <Grid id ="card" container spacing={3} justify="center">
      {/* Card 1 */}
      <Card id ="card1" className={classes.root}>
        <a href="/pricechart/denpasar"><CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Bali_banner_Rice_terraces.jpg/1280px-Bali_banner_Rice_terraces.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
               Bali
            </Typography>
          </CardContent>      
        </CardActionArea> </a>
        <CardActions>
          
          <a href="/pricechart/denpasar"><Button size="small" color="primary">
            Price Chart
          </Button></a>
          <a href="https://www.lonelyplanet.com/indonesia/bali"><Button size="small" color="primary">
            Travel Guide
          </Button></a>
        </CardActions>
      </Card>
     
      {/* Card 2 */}
      <Card id ="card2" className={classes.root}>
        <a href="/pricechart/tokyo"><CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://upload.wikimedia.org/wikipedia/commons/c/c9/Tokyo_banner.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Tokyo
            </Typography>
          </CardContent>
          
        </CardActionArea></a>
        <CardActions>
          
          <a href="/pricechart/tokyo"><Button size="small" color="primary">
            Price Chart
          </Button></a>
          <a href="https://www.lonelyplanet.com/japan/tokyo"><Button size="small" color="primary">
            Travel Guide
          </Button></a>
        </CardActions>
      </Card>
    
      {/* Card 3 */}
      <Card id="card3" className={classes.root}>
        <a href="/pricechart/london"><CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/London_Thames_Sunset_panorama_-_Feb_2008_banner.jpg/1280px-London_Thames_Sunset_panorama_-_Feb_2008_banner.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              London
            </Typography>
            
          </CardContent>
          
        </CardActionArea></a>
        <CardActions>
          
          <a href="/pricechart/london"><Button size="small" color="primary">
            Price Chart 
          </Button></a>
          <a href="https://www.lonelyplanet.com/england/london"><Button size="small" color="primary">
            Travel Guide
          </Button></a>
        </CardActions>
      </Card>  

      
    </Grid>

    <Grid id ="card" container spacing={3} justify="center">
      {/* Card 4 */}
      <Card id ="card1" className={classes.root}>
      <a href="/pricechart/kl"><CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Kuala_Lumpur_Skyline_at_dusk_%28cropped%29.jpg/1280px-Kuala_Lumpur_Skyline_at_dusk_%28cropped%29.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Kuala Lumpur 
            </Typography>
          </CardContent>      
        </CardActionArea></a> 
        <CardActions>  
          
          <a href="/pricechart/kl"><Button size="small" color="primary">
            Price Chart
          </Button></a>
          <a href="https://www.lonelyplanet.com/malaysia/kuala-lumpur"><Button size="small" color="primary">
            Travel Guide
          </Button></a>
        </CardActions>
      </Card>
     
      {/* Card 5 */}
      <Card id ="card2" className={classes.root}>
        <a href="/pricechart/hongkong"><CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Hong_Kong_Banner.jpg/1280px-Hong_Kong_Banner.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Hong Kong 
            </Typography>
          </CardContent>
          
        </CardActionArea></a>
        <CardActions>
          
          <a href="/pricechart/hongkong"><Button size="small" color="primary">
            Price Chart
          </Button></a>
          <a href="https://www.lonelyplanet.com/china/hong-kong"><Button size="small" color="primary">
            Travel Guide
          </Button></a>
        </CardActions>
      </Card>
    </Grid>
    </div>
  );
}
