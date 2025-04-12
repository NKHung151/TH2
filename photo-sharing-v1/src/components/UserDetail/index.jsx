// import React from "react";
// import { Typography } from "@mui/material";

// import "./styles.css";
// import { useParams } from "react-router-dom";

// /**
//  * Define UserDetail, a React component of Project 4.
//  */
// function UserDetail() {
//   const user = useParams();
//   return (
//     <>
//       <Typography variant="body1">
//         This should be the UserDetail view of the PhotoShare app. Since it is
//         invoked from React Router the params from the route will be in property
//         match. So this should show details of user: {user.userId}. You can fetch
//         the model for the user from models.userModel.
//       </Typography>
//     </>
//   );
// }

// export default UserDetail;
import React from "react";
import { Typography, Link } from "@mui/material";
import { useParams } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);

  return (
    <div className="user-detail">
      <Typography variant="h4" gutterBottom>
        {user.first_name} {user.last_name}
      </Typography>

      <Typography variant="body1" paragraph>
        Location: {user.location}
      </Typography>
      <Typography variant="body1" paragraph>
        {user.description}
      </Typography>
      <Typography variant="body1" paragraph>
        Occupation: {user.occupation}
      </Typography>

      <Link href={`/photos/${userId}`} color="primary">
        View photos of {user.first_name}
      </Link>

      {/* Additional information from the original code */}
      {/* <Typography variant="body1" paragraph>
        This should be the UserDetail view of the PhotoShare app. Since it is
        invoked from React Router, the params from the route will be in the
        property match. So this should show details of user: {userId}. You can
        fetch the model for the user from models.userModel.
      </Typography> */}
    </div>
  );
}

export default UserDetail;
