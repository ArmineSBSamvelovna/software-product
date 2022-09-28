import {Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../app/models/product";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import agent from "../../app/api/agent";
import { useStoreContext } from "../../app/context/StoreContext";
import { currencyFormat } from "../../app/util/util";

interface Props {
    product: Product;
}

export default function ProductCard({product}: Props) {

    const [loading, setLoading] = useState(false);
    const {setBasket} = useStoreContext();

    function handleAddItem(productId: number) {
        setLoading(true);
        agent.Basket.addItem(productId)
            .then(basket => setBasket(basket))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }

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
                    {currencyFormat(product.price)}
                </Typography>
                <Typography variant="body2" sx={{ color: 'primary.main' }}>
                  {product.brand} / {product.type}
                </Typography>
            </CardContent>
            <CardActions>
                <LoadingButton
                    loading={loading}
                    onClick={() => handleAddItem(product.id)}
                    size="small">
                    Adicionar
                </LoadingButton>
                <Button component={Link} to={`/produtos/${product.id}`} size="small" sx={{ color: 'primary.main' }}>Visualizar</Button>
            </CardActions>
      </Card>
    )
}
