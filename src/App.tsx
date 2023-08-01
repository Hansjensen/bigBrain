
import './App.css'
import Header from './components/Header';
import React, { useReducer, useState } from 'react';

import { createTheme, ThemeProvider } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs';

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

import { LogEntry, SceneSetting, User } from './types/interfaces';
import { LocalizationProvider } from '@mui/x-date-pickers';

import { logEntryReducer } from './components/Reducers';
import {LogContext, LogDispatchContext} from './components/LogContext'
import uniqid from 'uniqid'



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

const scene: SceneSetting = {
  pricePerPound: 70,
  currentScene: 'Test Test',
  wetDry: 'Wet'


}


console.log('out')


const logEntriesData: LogEntry[] = [
  
  {
    id: uniqid('log-'),
    strain: "Og Kush",
    grams: 1988,
    date: dayjs(),
    logged: false,
    userId: '101',
    scene:  "Test Test"
  },
  
  {
    id: uniqid('log-'),
    strain: "Green Crack",
    grams: 2500,
    date: dayjs(),
    logged: true,
    userId: '101',
    scene: "Test Test"
  },

  {
    id: '46',
    strain: "Birthday Cake",
    grams: 4000,
    date: dayjs(),
    logged: true,
    userId: '101',
    scene: "Test Test"
  },

  {
    id: '64',
    strain: "Cookies",
    grams: 4567,
    date: dayjs(),
    logged: true,
    userId: '101',
    scene: "Test Test"
  },

  {
    id: '21',
    strain: "Diesel",
    grams: 1000,
    date: dayjs("2023-07-01"),
    logged: true,
    userId: '101',
    scene: "Test Test"
  },
]
const userData: User = {
  userName: "Hans",
  id: '101',
  sceneList: ["Slick Dep 2023", "Test Test"]
}
const strains: Array<string> = [
  'Strawguana',
  'Og Kush',
  'Diesel'
]


function App() {
  const[user, setUser] = useState(userData)
  const[selectedBottom, setSelectedBottom] = useState('')
  const[logEntries, dispatchLogEntries] = useReducer(logEntryReducer, logEntriesData)

 

  return (
    <>
    <LogContext.Provider value={logEntries}>
      <LogDispatchContext.Provider value={dispatchLogEntries}>
        <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <BrowserRouter>
            <CssBaseline/>

            <Header user={user} />
            
          
            <Content  user={user} scene={scene} strains={strains} />
          
          
            
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
      </LogDispatchContext.Provider>
    </LogContext.Provider>
     
    </>
  
  )
}

export default App;
