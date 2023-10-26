import './App.css';
import { Card, CardContent, Typography, Grid, TextField, Button } from '@mui/material';
import { inputFromElement } from './FormElement'

function App() {
  const margin = { margin: "0 5px" };
  return (
    <div className="App">
      <Typography gutterBottom variant='h3' align="center">
        React-App
      </Typography>

      <Card style={{ maxWidth: 450, margin: "0 auto", padding: "5px 5px" }}>
        <CardContent>
          <Typography gutterBottom variant="h5">Contact Us</Typography>
          <Typography variant="body2" component="p" color="textSecondary">Fill up the form and our team will get back to you with 24 hours.</Typography>
          <form>
            <Typography variant="body2" align="left" gutterBottom>Personal Info:</Typography>
            <Grid container spacing={1}>
              {
                inputFromElement.slice(0, 4).map(input =>
                  <Grid item xs={input.xs} sm={input.s}>
                    <TextField {...input} />
                  </Grid>
                )
              }
            </Grid>

            <Typography variant="body2" align="left" gutterBottom>Address:</Typography>
            <Grid container spacing={1}>
              {
                inputFromElement.slice(4, 9).map(input =>
                  <Grid item xs={input.xs} sm={input.s}>
                    <TextField {...input} />
                  </Grid>
                )
              }
              <Grid xs={12} item>
                <TextField multiline rows={3} label="Message" placeholder="Type your message" variant="outlined" fullWidth required />
              </Grid>
            </Grid>
            <Grid container spacing={1} marginTop="5px">
              <Grid xs={12} item align="right">
                <Button style={margin} type="rest" variant="outlined" color="primary">Reset</Button>
                <Button type="submit" variant="contained" color="primary">Submit</Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
