import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon, Typography, Grid
} from '@mui/material';
import { Search as SearchIcon } from '../../icons/search';
import { Upload as UploadIcon } from '../../icons/upload';
import { Download as DownloadIcon } from '../../icons/download';
import { TotalOrder } from '../dashboard/totalOrder';
import { CompleteOrder } from '../dashboard/completeOrder';
import { OrderPending } from '../dashboard/orderPending';

export const CustomerListToolbar = (props) => (
  <Box {...props}>
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        m: -1
      }}
    >

      <Typography
        sx={{ m: 1 }}
        variant="h4"
      >
        Orders
      </Typography>
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TotalOrder/>
        </Grid>
        <Grid
          item
          xl={3}
          lg={3}
          sm={6}
          xs={12}
        >
          <CompleteOrder/>
        </Grid>
        <Grid
          item
          xl={3}
          lg={3}
          sm={6}
          xs={12}
        >
          <OrderPending/>
        </Grid>
      </Grid>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Box sx={{ maxWidth: 500 }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      color="action"
                      fontSize="small"
                    >
                      <SearchIcon/>
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Search Order ID"
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  </Box>
);
