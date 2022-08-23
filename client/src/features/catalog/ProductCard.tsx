import {Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Product } from "../../app/models/product";

interface Props {
    product: Product;
}

export default function ProductCard({product}: Props) {
    return (
        <Card>
            <CardHeader avatar={
                    <Avatar sx={{bgcolor: '#ffaf3d'}}>
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={product.name}
                titleTypographyProps={{
                  sx: {fontWeight: 'bold', color: '#ffaf3d'}  
                }}
            />

            <CardMedia
            component="img"
            sx={{ height: 140, objectFit: 'contain', bgcolor: '#4ad219' }}
            image={product.pictureUrl}
            title={product.name}
            />
            <CardContent>
                <Typography gutterBottom  color='#ffaf3d' variant="h5">
                    R${(product.price / 100).toFixed(2)}
                </Typography>
                <Typography variant="body2" color="#ffaf3d">
                  {product.brand} / {product.type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Adicionar</Button>
                <Button size="small">visualizar</Button>
            </CardActions>
      </Card>
    )
}
