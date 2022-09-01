import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "../../components/copyright/copyright";

const theme = createTheme();

export default function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{ height: "100vh", justifyContent: "center", alignItems: "center" }}
      >
        <CssBaseline />
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "row",
            // alignItems: "center",
            width: "60%",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            component={Paper}
            elevation={6}
            square
            sx={{
              background: "#c3c3c3",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderTopLeftRadius: "12px",
              borderBottomLeftRadius: "12px",
            }}
          >
            <Box>
              <Typography component="h4" variant="h4">
                Welcome to
              </Typography>
              <Typography
                component="h1"
                variant="h1"
                sx={{ textDecoration: "underline", fontWeight: "400" }}
              >
                Freewyre!
              </Typography>
              <Typography
                component="h6"
                variant="h6"
                sx={{ maxWidth: "385px" }}
              >
                Connect with friends and the world around you on freewyre.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            component={Paper}
            elevation={6}
            square
            sx={{
              borderTopRightRadius: "12px",
              borderBottomRightRadius: "12px",
            }}
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Create Account
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  name="userName"
                  autoComplete="userName"
                  autoFocus
                  inputProps={{ sx: { paddingY: "10px" } }}
                  InputLabelProps={{
                    sx: { lineHeight: ".9em" },
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  inputProps={{ sx: { paddingY: "10px" } }}
                  InputLabelProps={{
                    sx: { lineHeight: ".9em" },
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  inputProps={{ sx: { paddingY: "10px" } }}
                  InputLabelProps={{
                    sx: { lineHeight: ".9em" },
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="confirm-password"
                  inputProps={{ sx: { paddingY: "10px" } }}
                  InputLabelProps={{
                    sx: { lineHeight: ".9em" },
                  }}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Already have an account? Sign In"}
                    </Link>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </ThemeProvider>
  );
}
