
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardProduct = ({char}) => {
    const { id,img,title, category, Desc, quantity} = char;
  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardActionArea> 
        
        <CardMedia component="img" alt="Aros" image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
  
        {/* <Typography variant="body2" color="text.secondary">
          {category}
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button  className="btn-carrito" size="small">Agregar al Carrito</Button>
        <Button size="small">Más información</Button>
      </CardActions>
      </CardActionArea>
     
    </Card>
  );
}

export default CardProduct;