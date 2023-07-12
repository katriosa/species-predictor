import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { connect } from "react-redux";
import axios from "axios";
import * as settings from "../settings";

const defaultTheme = createTheme();

function PasswordUpdate(props) {
  const [new_password1, setuNewPassword1] = useState(null);
  const [new_password2, setuNewPassword2] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleFormFieldChange = (event) => {
    setSuccess(false);
    switch (event.target.id) {
      case "new_password1":
        setuNewPassword1(event.target.value);
        break;
      case "new_password2":
        setuNewPassword2(event.target.value);
        break;
      default:
        return null;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (new_password1 !== new_password2) {
      alert("Passwords don't match");
    } else {
      let headers = { Authorization: `Token ${props.token}` };
      let method = "post";
      let url = settings.API_SERVER + "/api/auth/update_password/";
      let passwordFormData = new FormData();
      passwordFormData.append("new_password1", new_password1);
      passwordFormData.append("new_password2", new_password2);
      let config = { headers, method, url, data: passwordFormData };

      //Axios update_password API call
      axios(config)
        .then((res) => {
          setSuccess(true);
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {success ? (
            <Typography variant="button" gutterBottom>
              Password update successful!
            </Typography>
          ) : null}
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Update Password
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="new_password1"
              label="Enter New Password"
              name="new_password1"
              type="password"
              autoFocus
              onChange={handleFormFieldChange}
              error={new_password1 !== new_password2}
              helperText={
                new_password1 !== new_password2 ? "Passwords don't match" : null
              }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="new_password2"
              label="Enter Your Password Again"
              type="password"
              id="new_password2"
              autoComplete="current-password"
              onChange={handleFormFieldChange}
              error={new_password1 !== new_password2}
              helperText={
                new_password1 !== new_password2 ? "Passwords don't match" : null
              }
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update Password
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};
export default connect(mapStateToProps)(PasswordUpdate);
