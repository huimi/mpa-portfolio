import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import * as styles from 'styles/card.module.css';

const projectData = [
  {
    name: 'Portfolio',
    img: require('images/portfolio.png'),
    url: '/',
    content: 'Personal portfolio.',
    tool: ['React', 'Python', 'Flask', 'Google App Engine']
  },
  {
    name: 'PMS',
    img: require('images/pms.png'),
    url: 'https://pms.shalom.com.tw/web/login/?to=home',
    content: 'Scalable Hotel property management system.',
    tool: ['BackboneJS', 'JQuery', 'RESTful API']
  },
  {
    name: 'Self Check-In Kiosk',
    img: require('images/sci.jpeg'),
    url: 'https://www.shalom.com.tw/',
    content: 'Hotel Self Check-in Kiosk application.',
    tool: ['React Native']
  },
  {
    name: 'Pyladies Taiwan',
    img: require('images/pyladies.png'),
    url: 'https://tw.pyladies.com/',
    content: 'Landing page and other pages for Pyladies Taiwan.',
    tool: ['React', 'ExpressJS', 'Python']
  }
]

export default function ImgMediaCard () {
  const cardHover = {
    ':hover': { opacity: 1 },
    opacity: 0.7
  }
  return (
    <div className={ styles.row }>
    {
      projectData.map((e, idx) =>
        <Card className={ `${styles.col} ${styles['col-md-6']} ${styles['col-lg-4']}` } key={idx} sx={{ bgcolor: '#1f252f', boxShadow: 2, borderRadius: 2 }}>
          <CardActionArea href={e.url} target="_blank" sx={cardHover}>
          <CardMedia component="img" alt={e.name} height="140" image={e.img}/>
          <CardContent sx={{ bgcolor: '#29313e' }}>
              <Typography gutterBottom variant="h5" component="div" color="white">{e.name}</Typography>
              { e.tool.map((tt, tidx) =>
                <span key={tidx} className={ styles.tag }>{tt}</span>)
              }
              <Typography mt={1} variant="body1" color="white">{e.content}</Typography>
          </CardContent>
        </CardActionArea>
        </Card>
      )
    }
    </div>
  );
}
