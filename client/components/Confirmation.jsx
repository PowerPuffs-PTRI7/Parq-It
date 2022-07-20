import React from 'react';
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
import { Login } from './Login.jsx'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function Confirmation(props) {
  //Use state declaration
  const { children, onClose, ...other } = props;
  return (
    <DialogTitle sx={{ 
        position: "relative",
        marginLeft: "1.7rem",
        marginTop: "1rem",
        p: 2 ,
        color:"#BBD1D1",
        fontSize: "800",
        fontWeight: "bold"}} {...other}>
        <div className='closeIcon' sx={{ padding: "5px" }}>
        Order was successful!
        </div>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: "#BBD1D1",
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
  );
}
