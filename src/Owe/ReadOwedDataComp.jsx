import React, {useState, useEffect} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Checkbox, FormControlLabel } from '@mui/material';


export default function ReadOwedDataComp() {
    const [data, setData] = useState([]);
    const [owedByMeFilter, setOwedByMeFilter] = useState(false);
    const [owedToFilter, setOwedToFilter] = useState(false);
  
    useEffect(() => {
      // Fetch data from localStorage
      const storedData = JSON.parse(localStorage.getItem('storedData')) || [];
      setData(storedData);
    }, []);
  
    const cardStyle = {
      width: '300px',
      margin: '10px auto',
      backgroundColor: 'white',
      color: 'black',
      boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
    };
  
  
    const paymentClosed = (name) => {
      // Filter out the data item by name
      const updatedData = data.filter(item => item.name !== name);
      setData(updatedData);
      localStorage.setItem('storedData', JSON.stringify(updatedData));
    };
  
    const filteredData = data.filter(item => {
      if (owedByMeFilter && item.method === 'Owed by me') {
        return true;
      }
      if (owedToFilter && item.method === 'Owed to') {
        return true;
      }
      return false;
    });
  
    return (
      <div>
        <div style={{display: 'flex', flexDirection: 'column', margin:'1rem'}}>
          <FormControlLabel
            control={<Checkbox checked={owedByMeFilter} onChange={() => setOwedByMeFilter(!owedByMeFilter)} />}
            label="Owed by me"
          />
          <FormControlLabel
            control={<Checkbox checked={owedToFilter} onChange={() => setOwedToFilter(!owedToFilter)} />}
            label="Owed to"
          />
          <Button variant="outlined"  onClick={() => { setOwedByMeFilter(false); setOwedToFilter(false); }} style={{width:'40%'}}>Clear Filter</Button>
        </div>
        {filteredData.map((item, index) => (
          <Card key={index} style={cardStyle}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {item.name}
              </Typography>
              <Typography style={{color:'red'}}>
                {item.daysRemaining}
              </Typography>
              <Typography>
                Amount: {item.amount}
              </Typography>
              <Typography>
                Bank: {item.bank}
              </Typography>
              <Typography>
                Date: {item.date}
              </Typography>
              <Typography>
                Method: <b>{item.method}</b>
              </Typography>
              <Button variant="outlined" onClick={() => paymentClosed(item.name)}>
                Close Payment
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
  