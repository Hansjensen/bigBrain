
import './App.css'
import Greeting from './components/Greeting';
import React from 'react';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

import Content from './components/Content';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { AccountCircleOutlined, Add, DocumentScanner } from '@mui/icons-material';
import {CssBaseline} from '@mui/material';
import { Link as RouterLink, LinkProps as RouterLinkProps, BrowserRouter } from 'react-router-dom';
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




console.log('out')
export interface LogEntry {
    id: number;
    strain: string;
    grams: number;
    date: Date;
    logged: boolean;
    userId: number;
} 

export interface LogEntryProps {
  entries: LogEntry[];
}

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

  const logEntries: LogEntry[] = [
    {
      id: 1,
      strain: "OG Kush",
      grams: 2700,
      date: new Date("2023-07-27"),
      logged: false,
      userId: 101,
    },
    {
      id: 2,
      strain: "Purple People Eater",
      grams: 1988,
      date: new Date("2023-07-26"),
      logged: true,
      userId: 102,
    },
    
    {
      id: 25,
      strain: "Green Crack",
      grams: 2500,
      date: new Date("2023-07-04"),
      logged: true,
      userId: 105,
    },

    {
      id: 46,
      strain: "Birthday Cake",
      grams: 4000,
      date: new Date("2023-07-03"),
      logged: true,
      userId: 105,
    },

    {
      id: 64,
      strain: "Cookies",
      grams: 4567,
      date: new Date("2023-07-02"),
      logged: true,
      userId: 105,
    },

    {
      id: 21,
      strain: "Diesel",
      grams: 1000,
      date: new Date("2023-07-01"),
      logged: true,
      userId: 105,
    },
  ];


  console.log('load')
  return (
    <>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <CssBaseline/>

      <Greeting user={user} />
      
    
      <Content logEntries={logEntries}/>
     
     
      
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
