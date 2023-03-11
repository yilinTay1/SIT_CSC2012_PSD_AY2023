import { useContext } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { Box, MenuItem, MenuList, Popover, Typography } from '@mui/material';
import { AuthContext } from '../contexts/auth-context';
import { auth, ENABLE_AUTH } from '../lib/auth';
import { EmailPassword } from '../components/firebase/EmailPassword'

export const AccountPopover = (props) => {
  const { anchorEl, onClose, open, ...other } = props;
  const authContext = useContext(AuthContext);

  const handleSignOut = async () => {
    onClose?.();
      
      const biz   = sessionStorage.getItem('business');
      let         _reloginPage = "/customer/login"  // default login page
      if(biz)     _reloginPage = "/business/login"  // unless previously logged in as business
     
      if(EmailPassword.logOut)
      {
        console.log("User is successfully logged out!")
      }
      sessionStorage.clear()
      // Redirect to sign-in page
      Router
        .push(_reloginPage)
        .catch(console.error);
      return;
  };

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom'
      }}
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: { width: '300px' }
      }}
      {...other}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2
        }}
      >
        <Typography variant="overline">
          Account
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          John Doe
        </Typography>
      </Box>
      <MenuList
        disablePadding
        sx={{
          '& > *': {
            '&:first-of-type': {
              borderTopColor: 'divider',
              borderTopStyle: 'solid',
              borderTopWidth: '1px'
            },
            padding: '12px 16px'
          }
        }}
      >
        <MenuItem onClick={handleSignOut}>
          Sign out
        </MenuItem>
      </MenuList>
    </Popover>
  );
};

AccountPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired
};
