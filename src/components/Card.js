import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import no_image from '../assets/images/no_image.jpg'

const useStyles = makeStyles({
  root: {
    width: 200,
    height: 270
  },
  media: {
    height: 200,
  },
});

const WorkCard = ({ id, title, image_url }) => {
  const classes = useStyles();
  const image = image_url ? image_url : no_image

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={image}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Link to={`/works/${id}`} >{title}</Link>
      </CardContent>
    </Card>
  );
}

export default WorkCard
