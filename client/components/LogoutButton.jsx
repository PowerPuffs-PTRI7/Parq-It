import React from "react";
import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import "../styles.scss";
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';


function LogoutButton(props) {

  const handleClickOpen = () => {
    console.log('clicked logout');
  };

  return (
    <Button color="inherit" onClick={handleClickOpen} sx={{ flexGrow: 1 }}>
      <Typography
        variant="h6"
        component="div"
        sx={{
          textTransform: "none",
          fontWeight: "light",
          color: "#36454F",
        }}
      >
        <div>
          <div color="inherit" sx={{ flexGrow: 1 }}>
          <Typography
              variant="h6"
              component="div"
              sx={{
                textTransform: "none",
                fontWeight: "light",
                color: "#36454F",
              }}>
              <div className='nav-text'>
                log out
             </div>
            </Typography>
          </div>
        </div>
      </Typography>
    </Button>
  );
}

export default LogoutButton;