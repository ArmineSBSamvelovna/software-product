import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { useHistory, useLocation } from "react-router-dom";


export default function ServerError() {
    const history = useHistory();
    const { state } = useLocation<any>();

    return (
        <Container component={Paper}>
            {/* @ts-ignore */}
            {state?.error ? (
                <>
                    <Typography variant='h3' color='error' gutterBottom>{state.error.title}</Typography>
                    <Divider />
                    {/* @ts-ignore */}
                    <Typography>{state.error.detail || 'Erro interno do servidor'}</Typography>   
                </>
            ) : (
                <Typography variant='h5' gutterBottom>Erro do Servidor</Typography>
            )}
            <Button onClick={() => history.push('/produtos')}>Retornar para loja</Button>                  
        </Container>
    )
}