import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const PostList = ({ posts }) => (
  <List>
    {posts.map((post) => (
      <ListItem key={post.id} alignItems="flex-start">
        <ListItemText
          primary={post.title}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {post.body}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    ))}
  </List>
);

export default PostList;
