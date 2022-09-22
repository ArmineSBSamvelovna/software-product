import { Container, Paper, Typography, Divider, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <Container component={Paper} sx={{height: 400}}>
            <Typography gutterBottom variant='h3'>Eita....ocorreru um erro ao buscar os dados....=/</Typography>
            <Divider />
            <Button fullWidth component={Link} to='/produtos'>Retornar pagina produtos</Button>
        </Container>
    )
}