import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { fetchPosts } from "./api";
import PostList from "./components/PostList";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getPosts = async () => {
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);
    };

    getPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Navbar />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PostList posts={filteredPosts} />
    </Container>
  );
};

export default App;
