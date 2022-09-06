import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";


interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

const midLinks = [
    {title: 'produtos', path: '/produtos'},
    {title: 'sobre', path: '/sobre'},
    {title: 'contato', path: '/contato'},
]

const rightLinks = [
    {title: 'login', path: '/login'},
    {title: 'cadastro', path: '/cadastro'},
]

export default function Header({darkMode, handleThemeChange}: Props) {
    return (
        <AppBar position='static' sx={{ mb: 4 }}>
            <Toolbar>
                <img src="../images/logo.svg" className="App-logo" alt="logo" />
                <Typography 
                    variant='h6' 
                    component={NavLink} 
                    to='/' 
                    sx={{color: 'inherit', textDecoration: 'none'}}
                >
                    LITTLE STORE
                </Typography>
                <Switch checked={darkMode} onChange={handleThemeChange}/>
                <List sx={{display: 'flex'}}>
                    {midLinks.map(({title, path}) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={{color: 'inherit', typography: 'h6'}}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
                <IconButton size='large' sx={{color: 'inherit'}}>
                    <Badge badgeContent={4} color='secondary'>
                        <ShoppingCart />
                    </Badge>
                </IconButton>
                <List sx={{display: 'flex'}}>
                    {rightLinks.map(({title, path}) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={{color: 'inherit', typography: 'h6'}}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
            </Toolbar>
        </AppBar>
    )
}