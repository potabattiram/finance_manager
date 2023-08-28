import React,{ useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, TextField } from "@mui/material";
import { DatePicker } from "antd";


export default function WriteOwedComp() {
  const [value, setvalue] = React.useState();
  const [headText,setHeadText]= useState('Owed by me')

  const [name,setName] = useState('');
  const [amount,setAmount] = useState('');
  const [bank, setBank] = React.useState('');
  const [date,setDate] = useState('');

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setvalue(event.target.value);
    if(event.target.value==1){
        setHeadText('Owed by me')
    }
    else{
        setHeadText('Owed to')
    }
  };
  const handleBankChange = (event) => {
    setBank(event.target.value);
  }

  function dateSetter(date){
    setDate(date.$d);
  }
  
  function daysRemainingOrOver(dateString) {
    const inputDate = new Date(dateString);
    const currentDate = new Date();
  
    const timeDifference = inputDate - currentDate;
    const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
  
    if (daysDifference > 0) {
      return `${Math.floor(daysDifference)} days left`;
    } else if (daysDifference < 0) {
      return `${Math.abs(Math.floor(daysDifference))} days over`;
    } else {
      return "Today is the same as the input date";
    }
  }

  function OnSubmit(){
    let dataObj = {
      "name": name,
      "amount": amount,
      "bank": bank,
      "date": date,
      "daysRemaining": daysRemainingOrOver(date),
      "method":headText
  }
  let storedData = JSON.parse(localStorage.getItem('storedData')) || [];

  storedData.push(dataObj);
  localStorage.setItem('storedData', JSON.stringify(storedData));
  }
  return (
    <div style={{ margin: "1rem" }}>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Owe</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label="Owe"
            onChange={handleChange}
          >
            <MenuItem value={1}>Owed By Me</MenuItem>
            <MenuItem value={2}>Owed to</MenuItem>
          </Select>
        </FormControl>
      </Box>

            <div style={{display:'flex', flexDirection: 'column', gap: '1rem'}}>
                <h2>{headText}</h2>
                <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(e) => setName(e.target.value)}/>
                <TextField id="outlined-basic" label="Amount" type="number" variant="outlined" onChange={(e) => setAmount(e.target.value)}/>

                <DatePicker
                    onChange={(e) => {
                        setLoading(true)
                        // dateSetter(moment(e).format("DD MM YYYY"))}}
                        dateSetter(e)}}
                    allowClear="false"
                    autoFocus="true"
                    autoComplete="true"
                    inputReadOnly="true"
                    onFocus={(e) => e.target.readOnly = true}
                    style={{
                        height:"3rem",
                        borderRadius: "30px",
                        cursor: "pointer",
                        fontSize: "23px",
                        textDecorationColor:"black",
                        fontFamily:"'Roboto', sans-serif"
                    }}
                    />

                    <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Select Bank</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={bank}
                                label="Select bank"
                                onChange={handleBankChange}
                            >
                                <MenuItem value={'BOB'}>Bank of Baroda</MenuItem>
                                <MenuItem value={'PNB'}>Punjab National Bank</MenuItem>
                            </Select>
                            </FormControl>
                        </Box>
                        <Button variant="outlined" style={{width:'6rem'}} onClick={() => OnSubmit()}>Submit</Button>
            </div>
    </div>
  );
}
