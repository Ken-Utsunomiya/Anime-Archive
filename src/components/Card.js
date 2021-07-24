import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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

const WorkCard = ({ title, image_url }) => {
  const classes = useStyles();
  const image = image_url ? image_url : no_image

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default WorkCard
