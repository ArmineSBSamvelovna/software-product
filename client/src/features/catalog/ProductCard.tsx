import {Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Product } from "../../app/models/product";

interface Props {
    product: Product;
}

export default function ProductCard({product}: Props) {
    return (
        <Card>
            <CardHeader avatar={
                    <Avatar sx={{bgcolor: 'secondary.light'}}>
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={product.name}
                titleTypographyProps={{
                  sx: { fontWeight: 'bold', color: 'primary.main' }  
                }}
            />

            <CardMedia
            component="img"
            sx={{ height: 140, objectFit: 'contain', bgcolor: 'primary.light' }}
            image={product.pictureUrl}
            title={product.name}
            />
            <CardContent>
                <Typography gutterBottom  sx={{ color: 'secondary.light' }} variant="h5">
                    R${(product.price / 100).toFixed(2)}
                </Typography>
                <Typography variant="body2" sx={{ color: 'primary.main' }}>
                  {product.brand} / {product.type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" sx={{ color: 'primary.main' }}>Adicionar</Button>
                <Button size="small" sx={{ color: 'primary.main' }}>Visualizar</Button>
            </CardActions>
      </Card>
    )
}
