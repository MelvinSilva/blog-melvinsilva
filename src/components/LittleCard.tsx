import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Container } from '@mui/system';

type LittleCardprop = {
  title: string;
  description: string;
  img: string;
  slug: string;
}

export default function LittleCard(props: LittleCardprop) {
  return (
    <Container>
      <Card
        sx={{ maxWidth: 350, marginTop: '20px', marginLeft: 'auto', marginRight: 'auto', borderRadius: '10px' }}>
        <CardMedia sx={{ height: 140 }}
          image={props.img}
          title="title-card"
        />
        <CardContent sx={{ height: 90 }}>
          <Typography sx={{ wordBreak: "break-word", color: 'rgb(0 5 29)' }} gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography sx={{ wordBreak: "break-word", color: 'rgb(49, 49, 49)' }} variant="body2">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions >
          <Link style={{ fontWeight: '600', textDecoration: 'none' }} to={"/blog/" + props.slug}>
            <Button
              size="medium" style={{ fontWeight: '600' }}>LIRE L'ARTICLE</Button>
          </Link>
        </CardActions>
      </Card>
    </Container >
  );
}