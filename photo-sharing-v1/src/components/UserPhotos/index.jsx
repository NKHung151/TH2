// import React from "react";
// import { Typography } from "@mui/material";

// import "./styles.css";
// import { useParams } from "react-router-dom";

// /**
//  * Define UserPhotos, a React component of Project 4.
//  */
// function UserPhotos() {
//   const user = useParams();
//   return (
//     <Typography variant="body1">
//       This should be the UserPhotos view of the PhotoShare app. Since it is
//       invoked from React Router the params from the route will be in property
//       match. So this should show details of user:
//       {user.userId}. You can fetch the model for the user from
//       models.photoOfUserModel(userId):
//     </Typography>
//   );
// }

// export default UserPhotos;

import React from "react";
import { useParams, Link } from "react-router-dom";
import models from "../../modelData/models"; 
import { Typography, Divider } from "@mui/material"; 
import "./styles.css"; 

function UserPhotos() {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId) || [];
  const formatDate = (date) => {
    const options = {
      year: "numeric",
      month: "long", 
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return new Date(date).toLocaleString("en-US", options);
  };

  return (
    <div className="user-photos">
     
      <Typography variant="h4" gutterBottom>
        Photos of the User
      </Typography>

      
      {photos.length === 0 ? (
        <Typography variant="body1">
          No photos available for this user.
        </Typography>
      ) : (
        photos.map((photo) => (
          <div key={photo._id} className="photo-block">
            {/* Display user photo */}
            <img
              src={`/images/${photo.file_name}`}
              alt="User Photo"
              style={{ width: "300px", borderRadius: "8px" }}
            />
            
            <Typography variant="body1">
              Created on: {formatDate(photo.date_time)}
            </Typography>

            {/* Display comments */}
            <Typography variant="h6">Comments:</Typography>
            {photo.comments && photo.comments.length > 0 ? (
              <ul>
                {photo.comments.map((comment) => (
                  <li key={comment._id}>
                    <Typography variant="body2">{comment.comment}</Typography>
                    <Typography variant="body2">
                      <strong>
                        {comment.user.first_name} {comment.user.last_name}
                      </strong>{" "}
                      - {formatDate(comment.date_time)}
                    </Typography>
                    {/* Link to the user's profile who commented */}
                    <Link to={`/users/${comment.user._id}`} color="primary">
                      View commenter profile
                    </Link>
                    <Divider />
                  </li>
                ))}
              </ul>
            ) : (
              <Typography variant="body1">No comments available.</Typography>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default UserPhotos;
