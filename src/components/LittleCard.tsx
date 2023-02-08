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
        sx={{ maxWidth: 350, marginTop: '20px', marginLeft: 'auto', marginRight: 'auto' }}>
        <CardMedia
          sx={{ height: 140 }}
          image={props.img}
          title="title-card"
        />
        <CardContent sx={{ height: 90 }}>
          <Typography sx={{ wordBreak: "break-word" }} gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography sx={{ wordBreak: "break-word" }} variant="body2" color="text.secondary">
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