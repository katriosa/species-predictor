import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";

function TopBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Iris Species Predictor
          </Typography>
          {props.isAuthenticated && (
            <>
              <Button color="inherit">
                <HomeIcon />
              </Button>
              <Button color="inherit" href="/update_password">
                Update Password
              </Button>
              <Button color="inherit" onClick={props.logout}>
                Logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopBar;
