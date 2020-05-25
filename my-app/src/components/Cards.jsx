import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './components.css'; 
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
    
    {/* Card 1 */}

    <Grid id ="card1" container spacing ={3} justify="center">
      
        <Card className ="card" className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Italy_banner_3_Florence.jpg/2560px-Italy_banner_3_Florence.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Italy
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Italy is famous for its delicious cuisine, trendy fashions, luxury sports cars and motorcycles, diverse regional cultures and dialects, as well as for its various landscapes from the seas to the Alps and Apennines. 
              </Typography>
            </CardContent>
          
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Buy tickets
            </Button>
            <Button size="small" color="primary">
              Price Chart
            </Button>
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
            Tokyo, Japan
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          As the most densely populated urban area in the world, Tokyo is a fascinating and dynamic metropolis that mixes foreign influences, consumer culture and global business along with remnants of the capital of old Japan.
          </Typography>
        </CardContent>
        
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Buy tickets
        </Button>
        <Button size="small" color="primary">
          Price Chart
        </Button>
      </CardActions>
    </Card>
    

    {/* Card 3 */}
    
    <Card id="card3" className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://upload.wikimedia.org/wikipedia/commons/4/4c/Manhattan_Wikivoyage_Banner.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            New York City 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          One of the world's greatest cities, New York (known as "The Big Apple", "NYC," and often called "New York City") is a global center for media, entertainment, art, fashion, research, finance, and trade. 
          </Typography>
        </CardContent>
        
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Buy tickets
        </Button>
        <Button size="small" color="primary">
          Price Chart 
        </Button>
      </CardActions>
    </Card>
    

  </Grid>
  </div>

    
  );
}
