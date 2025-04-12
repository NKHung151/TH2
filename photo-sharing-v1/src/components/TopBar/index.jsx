// import React from "react";
// import { AppBar, Toolbar, Typography } from "@mui/material";

// import "./styles.css";

// /**
//  * Define TopBar, a React component of Project 4.
//  */
// function TopBar() {
//   return (
//     <AppBar className="topbar-appBar" position="absolute">
//       <Toolbar>
//         <Typography variant="h5" color="inherit">
//           This is the TopBar component
//         </Typography>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default TopBar;
import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

function TopBar() {
  const location = useLocation();
  let title = "Photo App";

  if (location.pathname.startsWith("/users/")) {
    const userId = location.pathname.split("/")[2];
    const user = models.userModel(userId);
    title = `${user.first_name} ${user.last_name}`;
  } else if (location.pathname.startsWith("/photos/")) {
    const userId = location.pathname.split("/")[2];
    const user = models.userModel(userId);
    title = `Photos of ${user.first_name}`;
  }

  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar>
        <Typography variant="h5" color="inherit">
          {title} {}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
