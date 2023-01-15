import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import React from "react";
import dateFormater from "../utils/dateFormater";

const PermitCard = ({ permit }) => {
  const { status, comments } = permit;

  let color = "blue";

  switch (status) {
    case "D":
      color = "#7949FF";
      break;
    case "W":
      color = "#FFBA35";
      break;
    case "C":
      color = "#1DD1A1";
      break;
    case "P":
      color = "#FF0606";
  }

  return (
    <>
      <Card
        sx={{
          backgroundColor: color,
          padding: 1,
          minHeight: "204px",
          width: "173px",
          paddingY: "23px",
          paddingX: "11px",
          borderRadius: "5px",
        }}
        variant="outlined"
      >
        {comments.length > 0 ? (
          <>
            <Typography>
              {" "}
              {comments[0].user.firstName.toUpperCase()}{" "}
              {comments[0].user.lastName.toUpperCase()} :
            </Typography>
            <Divider
              sx={{
                mb: "12px",
              }}
            />

            {comments.map((comment) => (
              <>
                <Box
                  sx={{
                    marginBottom: "16px",
                  }}
                >
                  <Typography color="white" variant="body2">
                    {comment.commentText}
                  </Typography>
                  <Typography variant="caption">
                    {dateFormater(comment.timeStamp)}
                  </Typography>
                </Box>
              </>
            ))}
          </>
        ) : (
          <Box>
            <Typography> Not Started</Typography>
          </Box>
        )}
      </Card>
    </>
  );
};

export default PermitCard;
