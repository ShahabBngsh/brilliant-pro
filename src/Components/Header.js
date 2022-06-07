import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const Header = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
        <Toolbar>
          <Typography>
            <LibraryBooksIcon />
          </Typography>
          <Tabs
            sx={{ mr: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/dashboard" label="DashBoard" />
            <Tab LinkComponent={NavLink} to="/courses" label="Courses" />
            <Tab LinkComponent={NavLink} to="/learners" label="Learners" />
            <Tab LinkComponent={NavLink} to="/material" label="Material" />
            <Tab LinkComponent={NavLink} to="/assessments" label="Assessments" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
