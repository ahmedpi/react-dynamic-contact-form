import './App.css';
import { Card, CardContent, Typography, Grid, TextField, Button } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Typography gutterBottom variant='h3' align="center">
        React-App
      </Typography>

      <Card style={{maxWidth:450, margin: "0 auto", padding:"20px 5px"}}>
        <CardContent>
          <Typography gutterBottom variant="h5">Contact Us</Typography>
          <Typography variant="body2" component="p" color="textSecondary">Fill up the form and our team will get back to you with 24 hours.</Typography>
          <form>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField label="First Name" placeholder="Enter first name" variant="outlined" fullWidth required />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField label="Last Name" placeholder="Enter last name" variant="outlined" fullWidth required />
            </Grid>
            <Grid xs={12} item>
              <TextField type="email" label="Email" placeholder="Enter email" variant="outlined" fullWidth required />
            </Grid>
            <Grid xs={12} item>
              <TextField type="number" label="Phone" placeholder="Enter phone number" variant="outlined" fullWidth required />
            </Grid>
            <Grid xs={12} item>
              <TextField multiline rows={4} label="Message" placeholder="Type your message" variant="outlined" fullWidth required />
            </Grid>
            <Grid xs={12} item>
              <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
            </Grid>
          </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
