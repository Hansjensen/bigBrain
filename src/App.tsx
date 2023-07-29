
import './App.css'
import Header from './components/Header';
import React from 'react';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

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

import { LogEntry, Admin, User } from './types/interfaces';
import { LocalizationProvider } from '@mui/x-date-pickers';



const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props;
  // Map href (Material UI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} />;
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#365544',
      light: '#5f7a6b',
      dark: '#1b332d',
    },
    secondary: {
      main: '#543655',
      light: '#7e5080',
      dark: '#342035',
    }
  },
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

//ADMIN SETTINGS 

const sceneSetting: sceneSetting = {
  pricePerPound: 70,
  currentScene: 'Test Test',
  wetDry: 'Wet'


}


console.log('out')


const logEntriesData: LogEntry[] = [
  {
    id: 1,
    strain: "OG Kush",
    grams: 2700,
    date: new Date("2023-07-27"),
    logged: false,
    userId: 101,
    scene: "Test Test"
  },
  {
    id: 2,
    strain: "Purple People Eater",
    grams: 1988,
    date: new Date("2023-07-26"),
    logged: true,
    userId: 101,
    scene:  "Test Test"
  },
  
  {
    id: 25,
    strain: "Green Crack",
    grams: 2500,
    date: new Date("2023-07-04"),
    logged: true,
    userId: 101,
    scene: "Test Test"
  },

  {
    id: 46,
    strain: "Birthday Cake",
    grams: 4000,
    date: new Date("2023-07-03"),
    logged: true,
    userId: 101,
    scene: "Test Test"
  },

  {
    id: 64,
    strain: "Cookies",
    grams: 4567,
    date: new Date("2023-07-02"),
    logged: true,
    userId: 101,
    scene: "Test Test"
  },

  {
    id: 21,
    strain: "Diesel",
    grams: 1000,
    date: new Date("2023-07-01"),
    logged: true,
    userId: 101,
    scene: "Test Test"
  },
];
const userData: User = {
  userName: "Hans",
  id: 101,
  sceneList: ["Slick Dep 2023", "Test Test"]
}

function App() {
  const[user, setUser] = useState(userData)
  const[selectedBottom, setSelectedBottom] = useState('')
  const[logEntries, setLogEntries] = useState(logEntriesData)
 
  



 


  console.log('load')
  return (
    <>
    <ThemeProvider theme={theme}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <BrowserRouter>
      <CssBaseline/>

      <Header user={user} />
      
    
      <Content logEntries={logEntries} user={user} scene={sceneSetting}/>
     
     
      
      <BottomNavigation
        id="bottomNav"
        sx={{ position: 'fixed', bottom: 0, width: 1.0, }}
        showLabels
        value={selectedBottom}
        color='secondary'
        onChange={(event, newValue) => {
          setSelectedBottom(newValue);
        }}>
        
         
            <BottomNavigationAction component={RouterLink}  to="/user" value="/user" label="User" icon={<AccountCircleOutlined />} />
            <BottomNavigationAction component={RouterLink}  to="/addentry" value="/addentry" label="Add Entry" icon={<Add/>} />
            <BottomNavigationAction component={RouterLink}  to="/entries" value="/entries" label="Entries" icon={<DocumentScanner />} />
         
      </BottomNavigation>
      </BrowserRouter>
      </LocalizationProvider>
    </ThemeProvider>
     
    </>
  
  )
}

export default App;
