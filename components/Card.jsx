import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CardStyle = ({ image, title, subtitle, desc}) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={title}
        height="140"
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
    // <div className='border border-solid border-gray-400 rounded-md my-8'>
    //   <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-[1fr,2fr]">
    //     <div className='rounded-l-md bg-gray-200'>{image}</div>
    //     <div className='p-6'>
    //       <span className='font-bold text-lg'>{title}</span>
    //       <p className='text-sm text-gray-500 italic'>{subtitle}</p>
    //       <div className='text-sm mt-5'>{desc}</div>
    //     </div>
    //   </div>
    // </div>

  )
}

export default CardStyle
