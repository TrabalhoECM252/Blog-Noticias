import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom"

export default function Header() {
  const history = useNavigate();
  const loginPage = () => {
    history("/login")
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            True News
          </Typography>
          <Button color="inherit" onClick={loginPage}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
