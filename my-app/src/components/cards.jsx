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
    width:700, 
  },
});

function RenderValue(props) {
  if(props.num < 0) {
    var num_ = props.num * -1;
    return(<h3>Prices are up <span id="valueUp">{num_ }%</span> this month.</h3>);
  } else {
    return(<h3>Prices are down <span id="valueDown">{props.num}%</span> this month!</h3>);
  }
}

export default function Cards(props) {
  // storing state of change in prices
  
  const classes = useStyles();
  const CardBali = () =>
    <Card id ="card1" className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Bali_banner_Rice_terraces.jpg/1280px-Bali_banner_Rice_terraces.jpg"
          title="Bali"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Bali
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          With world-class diving and surfing, a range of natural, cultural and historical attractions, and plentiful accommodation options, it is one of the most popular island destinations in the world. Bali offers something to almost every visitor.
          </Typography>
          <RenderValue num={props.DPS} />
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
    </Card>;

  const CardTokyo = () => 
    <Card id ="card2" className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://upload.wikimedia.org/wikipedia/commons/c/c9/Tokyo_banner.jpg"
          title="Tokyo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Tokyo
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          As the most densely populated urban area in the world, Tokyo is a fascinating and dynamic metropolis that mixes foreign influences, consumer culture and global business along with remnants of the capital of old Japan.
          </Typography>
          <RenderValue num={props.TYO} />
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
    </Card>;

  const CardLondon = () =>
  <Card id="card3" className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/London_Thames_Sunset_panorama_-_Feb_2008_banner.jpg/1280px-London_Thames_Sunset_panorama_-_Feb_2008_banner.jpg"
            title="London"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              London
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Noisy, vibrant and truly multicultural, London is a megalopolis of people, ideas and frenetic energy.Considered one of the world's leading "global cities", London remains an international capital of culture. 
            </Typography>
            <RenderValue num={props.LON} />
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
      </Card>;

      const CardHongKong = () =>
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
                <RenderValue num={props.LON} />
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
          </Card>;

  return (
    <div>
      <h1 id="recommendationsText"> Recommendations </h1>
      <hr id="line"></hr>
    
    <Grid id ="card" container spacing={3} justify="center">
      {/* Card 1 */}
      <CardBali />
      {/* Card 2 */}
      <CardTokyo />
      {/* Card 3 */}
      <CardLondon />
    </Grid>
    </div>);
}
