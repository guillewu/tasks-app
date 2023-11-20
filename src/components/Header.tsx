import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function Header() {
  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Tasks App
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
}
