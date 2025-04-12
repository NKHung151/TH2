// import React from "react";
// import {
//   Divider,
//   List,
//   ListItem,
//   ListItemText,
//   Typography,
// } from "@mui/material";

// import "./styles.css";
// import models from "../../modelData/models";

// /**
//  * Define UserList, a React component of Project 4.
//  */
// function UserList() {
//   const users = models.userListModel();
//   return (
//     <div>
//       <Typography variant="body1">
//         This is the user list, which takes up 3/12 of the window. You might
//         choose to use <a href="https://mui.com/components/lists/">Lists</a> and{" "}
//         <a href="https://mui.com/components/dividers/">Dividers</a> to display
//         your users like so:
//       </Typography>
//       <List component="nav">
//         {users.map((item) => (
//           <>
//             <ListItem>
//               <ListItemText primary={item.first_name} />
//             </ListItem>
//             <Divider />
//           </>
//         ))}
//       </List>
//       <Typography variant="body1">
//         The model comes in from models.userListModel()
//       </Typography>
//     </div>
//   );
// }

// export default UserList;
import React from "react";
import { Link } from "react-router-dom";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material"; // Import Material-UI components
import models from "../../modelData/models"; // Import models to fetch user data
import "./styles.css"; // Import CSS file for styling

/**
 * Define UserList, a React component of Project 4.
 */
function UserList() {
  const users = models.userListModel(); // Fetch the list of users

  return (
    <div className="user-list">
      {/* Description of the user list */}
      <Typography variant="body1" paragraph>
        This is the user list, which takes up 3/12 of the window. You might
        choose to use <a href="https://mui.com/components/lists/">Lists</a> and{" "}
        <a href="https://mui.com/components/dividers/">Dividers</a> to display
        your users like so:
      </Typography>

      {/* Header for the user list */}
      <Typography variant="h4" gutterBottom>
        User List
      </Typography>

      {/* Using List and ListItem from Material-UI */}
      <List component="nav">
        {users.map((user) => (
          <div key={user._id}>
            {/* Each user will be displayed in a ListItem */}
            <ListItem button component={Link} to={`/users/${user._id}`}>
              <ListItemText primary={`${user.first_name} ${user.last_name}`} />
            </ListItem>
            {/* Adding a Divider between items in the list */}
            <Divider />
          </div>
        ))}
      </List>

      {/* Additional description about the model */}
      <Typography variant="body1" paragraph>
        The model comes in from models.userListModel()
      </Typography>
    </div>
  );
}

export default UserList;
