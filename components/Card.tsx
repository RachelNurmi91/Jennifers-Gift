import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardTypes } from './interfaces/types';


const CardStyle: React.FC<CardTypes> = ({ image, title, desc}) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={title}
        height="140px"
        image={image.src}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {desc}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardStyle
