import * as React from "react";

import 'katex/dist/katex.min.css';
import {  InlineMath } from 'react-katex';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
//
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// import InboxIcon from '@mui/icons-material/Inbox';
//BlockMath
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import Divider from '@mui/material/Divider';


import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';



//import React, { useEffect, }  from "react";
import { BrowserRouter as Router ,    Routes,    Route,    Link  }  from "react-router-dom";
//useNavigate,
//

//import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
//import OutlinedInput from '@mui/material/OutlinedInput'

// import axios from 'axios';







//
//
// const drawerWidth = 240;



 const darkTheme = createTheme({ palette: { mode: 'dark' } });
// const lightTheme = createTheme({ palette: { mode: 'light' } });


function App() {
  //let  darkTheme = createTheme({ palette: { mode: 'dark' } });









//
// import cStringIO
// my_stringIObytes = cStringIO.StringIO()
// plt.savefig(my_stringIObytes, format='jpg')
// my_stringIObytes.seek(0)
// my_base64_jpgData = base64.b64encode(my_stringIObytes.read())

//  <ThemeProvider theme={}>

  return (

  <Router>
<Grid container spacing={2}>
  <Grid item xs={12} md={12}>
    <Box>
    <AppBar position="static">
       <Toolbar variant="dense">
         <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
           <MenuIcon />
         </IconButton>
         <Typography variant="h6" color="inherit" component="div">
           RoboMATH
         </Typography>
       </Toolbar>
     </AppBar>
    </Box>
  </Grid>

  <Grid item xs={2} md={1}>
    <Box></Box>
  </Grid>
  <Grid item xs={9} md={10}>

    <Box>

    <Routes>
      <Route path="/" element={<Home  />} />

      <Route  path="/equations" element={    <Equations  />  } />





    </Routes>

    <Divider light />
    Asd
 <ThemeProvider theme={darkTheme}>
      <Box
      sx={{
                p: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
                borderRadius: 5
              }}

      >
      <Paper>
        Онлайн калькуляторы. Решение уравнений
        </Paper>
        </Box>
</ThemeProvider >
    <List component="nav" aria-label="main mailbox folders">



        <Link  to="/equations">
               <ListItemButton>

                 <ListItemText primary="Решение квадратных уравнений" />
               </ListItemButton>
                </Link>
               <ListItemButton>

                 <ListItemText primary="Решение квадратных уравнений" />
               </ListItemButton>
               <ListItemButton>

                 <ListItemText primary="Решение квадратных уравнений" />
               </ListItemButton>
               <ListItemButton>

                 <ListItemText primary="Решение квадратных уравнений" />
               </ListItemButton>



             </List>
    </Box>
  </Grid>
  <Grid item xs={10} md={11}>
  </Grid >

</Grid>

  </Router>



    );
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {

  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
function Home() {
  return (
    <div>HOME</div>
  );
}
function Equations() {
  const [value, setValue] = React.useState(0);
  const [valueA, setValueA] = React.useState(0);
  const [valueB, setValueB] = React.useState(0);
  const [valueC, setValueC] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };




  return (
    <div>
     <Typography variant="h5" color="inherit" component="div">
    Онлайн калькулятор. Решение квадратных уравнений{valueA}
    </Typography>
    <Box
    sx={{
              p: 2,
              bgcolor: '#eeeeff',
              display: 'grid',
              gridTemplateColumns: { md: '1fr 1fr' },
              gap: 2,
              borderRadius: 5
            }}

    >

    Используя этот онлайн калькулятор для решения квадратных уравнений, вы сможете очень просто и быстро найти корни квадратного уравнения.

Воспользовавшись онлайн калькулятором для решения квадратных уравнений, вы получите детальное решение вашего примера, которое позволит понять алгоритм решения задач и закрепить пройденный на уроках материал.




    </Box>
    <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Калькулятор" {...a11yProps(0)} />
              <Tab label="Инструкция" {...a11yProps(1)} />
              <Tab label="Теория" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
          <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1 },
    }}
    noValidate
    autoComplete="off"
  >
    <FormControl variant="standard">
      <InputLabel htmlFor="component-simple">a</InputLabel>
      <Input type="number" id="component-simple" value={valueA}
       onChange={(e) => setValueA(e.target.value)}
     />
    </FormControl>
    <FormControl variant="standard">
      <InputLabel htmlFor="component-helper">b</InputLabel>
      <Input
      type="number"
        id="component-helper"
        value={valueB}
      onChange={(e) => setValueB(e.target.value)}
        aria-describedby="component-helper-text"
      />
      <FormHelperText id="component-helper-text">
        Some important helper text
      </FormHelperText>
    </FormControl>
    <FormControl variant="standard">
      <InputLabel htmlFor="component-simple">c</InputLabel>
      <Input type="number" id="component-simple" value={valueC}
      onChange={(e) => setValueC(e.target.value)}/>
    </FormControl>




  </Box>
  <p>a={valueA}</p>
  <p>

  <InlineMath math={String(valueA).replace('1','')+'x^2+'+String(valueB).replace('1','')+'x+'+String(valueC).replace('1','')+'=0'} />
</p>
  <p>В квадратном уравнении <InlineMath math={'ax2 + bx + c = 0'}/></p>
  <p>  <InlineMath  math={     'a = '+valueA }/></p>
  <p>  <InlineMath  math={     'b = '+valueB }/></p>
  <p>  <InlineMath  math={     'c = '+valueC }/></p>
  <p>  <InlineMath  math={'x = \\cfrac{-b \\pm \\sqrt{D}} {2a}  ,    D = b^2 - 4ac'} /></p>
  <p>  <InlineMath  math={'D = b^2 - 4ac='+String(valueB)+'*'+String(valueA)+"-4*"+String(valueC)+'*'+valueC} /></p>

          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </Box>
    </div>
  );
}








export default App;
