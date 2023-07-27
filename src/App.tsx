
import './App.css'
import Greeting from './components/Greeting';
import React from 'react';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import User from './components/User';
import AddEntry from './components/AddEntry';
import Entries from './components/Entries';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { AccountCircleOutlined, Add, DocumentScanner } from '@mui/icons-material';
import {CssBaseline} from '@mui/material';
import { Link as RouterLink, LinkProps as RouterLinkProps, Routes, Route, Router, BrowserRouter } from 'react-router-dom';
import { LinkProps } from '@mui/material/Link';



const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props;
  // Map href (Material UI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} />;
});

const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});







export interface User {
  userName: string,
  id: number,
}

function App() {

  const[selectedBottom, setSelectedBottom] = useState('')
  

  const user = {
    userName: "Hans",
    id: 10,
  }
  console.log('load')
  return (
    <>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <CssBaseline/>

      <Greeting user={user} />
      
    
        <Routes>
                  
          <Route  path="/user" element={<User/>}/>
                  
          <Route path="/addentry" element={<AddEntry/>}/>
            
          <Route path="/entries" element={<Entries/>} />
                
        </Routes>
     
     
      
      <BottomNavigation
        id="bottomNav"
        sx={{ position: 'fixed', bottom: 0, width: 1.0, }}
        showLabels
        value={selectedBottom}
        onChange={(event, newValue) => {
          setSelectedBottom(newValue);
        }}>
        
         
            <BottomNavigationAction component={RouterLink}  to="/user" value="/user" label="User" icon={<AccountCircleOutlined />} />
            <BottomNavigationAction component={RouterLink}  to="/addentry" value="/addentry" label="Add Entry" icon={<Add/>} />
            <BottomNavigationAction component={RouterLink}  to="/entries" value="/entries" label="Entries" icon={<DocumentScanner />} />
         
      </BottomNavigation>
      </BrowserRouter>
    </ThemeProvider>
     
    </>
  
  )
}

export default App;
