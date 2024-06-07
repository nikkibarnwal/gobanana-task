import React from "react";
import { Card, CardContent, List, ListItem, Typography } from "@mui/material";

const toTitleCase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const PostList = ({ posts }) => (
  <List>
    {posts.map((post) => (
      <ListItem key={post.id} alignItems="flex-start">
        <Card
          sx={{
            width: 1,
            border: 1,
            borderColor: "primary.main",
            borderRadius: "16px",
            ":hover": {
              boxShadow: 20,
              backgroundColor: "#00d2ff",
              color: "#F0FFFF",
            },
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {toTitleCase(post.title)}
            </Typography>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {toTitleCase(post.body)}
            </Typography>
          </CardContent>
        </Card>
      </ListItem>
    ))}
  </List>
);

export default PostList;
