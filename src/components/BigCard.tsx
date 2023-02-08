import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';

type BigCardprop = {
  title: string;
  content: string;
  img: string;
  slug: string;
}

export default function BigCard(props: BigCardprop) {
  return (
    <div>
      <Container>
        <Card sx={{ marginTop: '20px' }}>
          <CardMedia
            sx={{ height: 340 }}
            image={props.img}
            title="title-card"
          />
          <CardContent>
            <Typography sx={{ wordBreak: "break-word" }} gutterBottom variant="h5" component="div">
              <p>{props.title}</p>
            </Typography>
            <Typography sx={{ wordBreak: "break-word", fontSize: "18px", textAlign: 'justify' }} color="text.secondary">
              <p dangerouslySetInnerHTML={{ __html: props.content }} />
            </Typography>
          </CardContent>
        </Card>
        <br/>
        <br/>
        <br/>
      </Container>
    </div>
  );
}