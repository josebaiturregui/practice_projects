import './App.css';
import { useState, useMemo, useEffect } from 'react';
import { Paper, Grid, Box, Typography } from '@mui/material';
import  OutlinedCard  from './components/OutlinedCardComponent.jsx';
import RecipeReviewCard from './components/ComplexInteractionCard.jsx';
import TransferDataComponent from './components/TransferDataComponent.jsx';
import { useFetch } from './useFetch'; 
// import {ComplexInteractionCard} 


const BadStopWatch = () => {
  const [count, setCount] = useState(0);

  useEffect ( () => {
    console.log("StopWatch useEffect BadStopWatch")
    setInterval(() => {
      setCount(v => v + 0.1);
    }, 100)
  }, []);

  return (
  
    <div> 
      Bad Stopwatch: {count.toFixed(1)}
    </div>

  
  )

};
const GoodStopWatch = () => {
  const [count, setCount] = useState(0);

  useEffect ( () => {
    console.log("StopWatch useEffect")
   const interval = setInterval(() => {
      setCount(v => v + 0.1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
  
    <div> 
      Good Stopwatch: {count.toFixed(1)}
    </div>

  
  )

};
function App() {
  const [url, setUrl] = useState(null);


 
  const { data } = useFetch({url, 
    onSuccess: () => console.log("success")});

  console.log("App rendering");

  const [UIcolor, setUIcolor] = useState("" | null);

  const getColor = (color) => {
    setUIcolor(color);
  };

  return (
    <>
      {/* <div style={{color:'black'}}>
      <BadStopWatch />
      </div>
      <div style={{color:'black'}}>
      <GoodStopWatch  />
      </div> */}
      <div>
        Hello
      </div>
      
        <Paper elevation={12} space={3}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} style={{padding:'2rem'}}>
                <div>
                  <div>Hello</div>
                  <div>{JSON.stringify(data)}</div>
                </div>
                <button onClick={() => setUrl("/jack.json") }>Jack </button>
                <button onClick={() => setUrl("/joseba.json") }>Joseba </button>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} style={{margin:'auto', padding:'2rem'}}>
              <div 
                  style={{backgroundColor: `${UIcolor}`, width:'300px', height:'300px', border:' 2px solid black', margin:'auto'}}>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} style={{margin:'auto', padding:'2rem'}}>
              <TransferDataComponent getColor={getColor}/>
            </Grid>
          </Grid>            
        </Paper>
      <div>
        
      </div>

      <div>
      
        <Paper elevation={12} space={3}>
          <Grid container>
            <Grid item xs={6} sm={6} md={6} style={{margin:'auto', padding:'2rem'}}>
              <OutlinedCard/>
            </Grid>
            <Grid item xs={6} sm={6} md={6} style={{margin:'auto', padding:'2rem'}}>  
              <RecipeReviewCard />
            </Grid>
          </Grid>            
        </Paper>
          
      </div>
    
    </>
  )
}

export default App
