import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Card, CardActions, CardContent, CardMedia, CardActionArea,Paper } from '@material-ui/core';

const center = {
    position: 'absolute',
    left: '10%',
    top: '10%',
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  rootBottom: {
    
        width: '100%',
        position: 'fixed',
        bottom: 0,
      
  },
  paper_styel_custom: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(32),
      height: theme.spacing(32),
    },
  },
  card_styl: {
    
    maxWidth: 345,
    display: 'inline-block',
    
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
  media: {
    height: 200,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
    //const classes = useStyles();
   const [value, setValue] = React.useState(0);  

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
           
          </IconButton>
          <Typography variant="h6" className={classes.title}>
           Home
          </Typography>
          <Typography variant="h6" className={classes.title}>
          About
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Shop
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Contact
          </Typography>

          <IconButton
                aria-label="Account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
        </Toolbar>
        </AppBar>

        {/* <div className={classes.paper_styel_custom}>
        <Paper elevation ={4}/>
        <Paper elevation ={4}/>
        <Paper elevation ={4}/>
        <Paper elevation ={4}/>
        <Paper elevation ={4}/>
        
    </div> */}
    <div style =  {center}>
    <Card className={classes.card_styl}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/feature_prod_01.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Gym Weight
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
   
    <Card className={classes.card_styl}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/feature_prod_02.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Cloud Nike Shoes
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

    <Card className={classes.card_styl}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/feature_prod_03.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Summer Addides Shoes
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
      </div>
      <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.rootBottom}
    >
      <BottomNavigationAction label="Zay Shop"/>
      <BottomNavigationAction label="Products"  />
      <BottomNavigationAction label="Further Info" />
     </BottomNavigation>
    
    </div>
  );
}