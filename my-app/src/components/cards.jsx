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
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div>
      <h1 id="recommendations"> Recommendations </h1>
      <hr id="line"></hr>
    
    <Grid id ="card" container spacing={3} justify="center">
      {/* Card 1 */}
      <Card id ="card1" className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Denpasar_banner.jpg/1280px-Denpasar_banner.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Bali
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            With world-class diving and surfing, a range of natural, cultural and historical attractions, and plentiful accommodation options, it is one of the most popular island destinations in the world. Bali offers something to almost every visitor.
            </Typography>
          </CardContent>      
        </CardActionArea> 
        <CardActions>  
          <a href="/buyorder"><Button size="small" color="primary">
            Buy tickets
          </Button></a>
          <a href="/pricechart/denpasar"><Button size="small" color="primary">
            Price Chart
          </Button></a>
        </CardActions>
      </Card>
     
      {/* Card 2 */}
      <Card id ="card2" className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://upload.wikimedia.org/wikipedia/commons/c/c9/Tokyo_banner.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Tokyo
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            As the most densely populated urban area in the world, Tokyo is a fascinating and dynamic metropolis that mixes foreign influences, consumer culture and global business along with remnants of the capital of old Japan.
            </Typography>
          </CardContent>
          
        </CardActionArea>
        <CardActions>
          <a href="/buyorder"><Button size="small" color="primary">
            Buy tickets
          </Button></a>
          <a href="/pricechart/tokyo"><Button size="small" color="primary">
            Price Chart
          </Button></a>
        </CardActions>
      </Card>
    
      {/* Card 3 */}
      <Card id="card3" className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/London_Thames_Sunset_panorama_-_Feb_2008_banner.jpg/1280px-London_Thames_Sunset_panorama_-_Feb_2008_banner.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              London
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Noisy, vibrant and truly multicultural, London is a megalopolis of people, ideas and frenetic energy.Considered one of the world's leading "global cities", London remains an international capital of culture. 
            </Typography>
          </CardContent>
          
        </CardActionArea>
        <CardActions>
          <a href="/buyorder"><Button size="small" color="primary">
            Buy tickets
          </Button></a> 
          <a href="/pricechart/london"><Button size="small" color="primary">
            Price Chart 
          </Button></a>
        </CardActions>
      </Card>  
    </Grid>
    </div>
  );
}
