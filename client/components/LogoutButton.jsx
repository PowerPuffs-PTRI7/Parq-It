import React from "react";
import Button from '@mui/material/Button';
import "../styles.scss";
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