
import { Grid, Typography } from '@mui/material';
import {Box} from '@mui/system';


export default function App() {
  return (
    <Box
      sx = {{
        display: 'flex',
        justifyContent: 'space-evenly'
      }}
    >
      <Typography sx={{
        bgcolor: 'warning.main'
      }}>Hello</Typography>
      <Grid>
        <h1>hi</h1>
      </Grid>
    </Box>
  );
}
