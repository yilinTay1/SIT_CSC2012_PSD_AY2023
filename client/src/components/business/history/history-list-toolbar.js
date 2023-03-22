import {
  Box,
  Card,
  CardContent,
  Grid,
  InputAdornment,
  SvgIcon,
  TextField,
  Typography
} from '@mui/material';
import { Search as SearchIcon } from '../../../icons/search';
import { TotalProfit } from '../dashboard/totalProfit';

export const HistoryListToolbar = (props) => (
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
        History
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
          <TotalProfit/>
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
              placeholder="Search MM-YYYY"
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  </Box>
);
