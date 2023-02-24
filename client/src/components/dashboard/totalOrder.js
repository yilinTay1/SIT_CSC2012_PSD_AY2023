import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import MoneyIcon from '@mui/icons-material/Money';

export const TotalOrder = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            TOTAL ORDER
          </Typography>
          <Typography
            color="textPrimary"
            variant="h1"
          >
            10
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: '#564d4d',
              height: 56,
              width: 56
            }}
          >
            <MoneyIcon/>
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
