import './App.css';
import 'animate.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { themeOptions } from './Theme';
import Navbar from './components/Navbar'
import Home from './components/Home'

const theme = createTheme(themeOptions);

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <BrowserRouter>
        <Routes >
          <Route exact path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
