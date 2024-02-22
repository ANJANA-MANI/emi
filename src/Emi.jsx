import React, { useState } from 'react'
import { Card } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import { TextField } from '@mui/material';
function Emi() {
    const[amount,setAmount]=useState(0);
    const[rate,setRate]=useState(0);
    const[tenure,setTenure]=useState(0);
    const[emi,setEmi]=useState(0)
    const calculate=(e)=>{
        
        var monthlyInterestRate = (rate / 12) / 100;

    // Calculate the number of monthly installments
    var numberOfPayments = tenure * 12;

    // Calculate EMI using the formula
    var output = amount * monthlyInterestRate * Math.pow((1 + monthlyInterestRate), numberOfPayments) / (Math.pow((1 + monthlyInterestRate), numberOfPayments) - 1);

    setEmi(output.toFixed(2));
    }
  return (
    <div>
        <Card sx={{ maxWidth: 345,marginLeft:'500px' }}>
      <CardMedia
        sx={{ height: 140 }}
        image="data:image/jpeg;base64,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"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          EMI:{emi}
        </Typography>
       <div style={{margin:"10px",justifyContent:"space-around"}}>
       <TextField id="filled-basic" label="Amount" value={amount||""} variant="filled" onChange={(e)=>{
        setAmount(e.target.value);
       }}/>
<TextField id="filled-basic"value={rate||""} label="Rate" variant="filled" onChange={(e)=>{
        setRate(e.target.value);
       }}/>
<TextField id="filled-basic"value={tenure||""} label="Tenure" variant="filled" onChange={(e)=>{
        setTenure(e.target.value);
       }}/>
       </div>

      </CardContent>
      <CardActions>
        <Button style={{marginLeft:"35%"}}variant="contained"onClick={e=>{calculate(e)}}>Calculate</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default Emi