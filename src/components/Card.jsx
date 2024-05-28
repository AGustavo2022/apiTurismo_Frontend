import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({ imageUrl, name, address }) {
  return (
    <div className=" m-4">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {address}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Actualizar</Button>
        <Button size="small">Eliminar</Button>
      </CardActions>
    </Card>
    </div>
  );
}