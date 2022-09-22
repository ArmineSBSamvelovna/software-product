import { Container, createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import AboutPage from "../../features/sobre/AboutPage";
import Catalog from "../../features/produtos/Catalog";
import ProductDetails from "../../features/produtos/ProductDetails";
import ContactPage from "../../features/contato/ContactPage";
import HomePage from "../../features/home/HomePage";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import NotFound from "../errors/NotFound";


function App() {

  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position='bottom-right' hideProgressBar />

      <CssBaseline />
        <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
        <Container>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/produtos' component={Catalog}/>
            <Route path='/produtos/:id' component={ProductDetails}/>
            <Route path='/sobre' component={AboutPage}/>
            <Route path='/contato' component={ContactPage}/>
            <Route component={NotFound}/>
          </Switch>       
        </Container>
    </ThemeProvider>
  );
}

export default App;
