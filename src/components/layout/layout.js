import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Sidebar from "../sidebar/sidebar";
import {Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid
          xs={4}
          sx={{
            height: "100vh",
            width: "20%",
            backgroundColor: "white",
            overflowY: "auto",
            boxSizing: "border-box",
          }}
        >
          <Box>
            <Sidebar></Sidebar>
          </Box>
        </Grid>
        <Grid
          xs={8}
          sx={{
            height: "100vh",
            width: "80%",
            overflowY: "auto",
          }}
        >
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
