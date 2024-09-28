import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import SchoolIcon from "@mui/icons-material/School";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ExploreIcon from "@mui/icons-material/Explore";

const FeatureCard = ({ title, description, icon, linkTo }) => (
  <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
    <CardContent sx={{ flexGrow: 1 }}>
      {icon}
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" component={Link} to={linkTo}>
        Learn More
      </Button>
    </CardActions>
  </Card>
);

const Home = () => {
  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to Linked List Tutorials
      </Typography>
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        color="text.secondary"
      >
        Dive into the world of Linked Lists through interactive examples and
        real-world applications.
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} sm={6} md={4}>
          <FeatureCard
            title="Introduction to Linked Lists"
            description="Learn the basics of Linked Lists and their fundamental operations."
            icon={
              <SchoolIcon sx={{ fontSize: 40, color: "primary.main", mb: 2 }} />
            }
            linkTo="/intro"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FeatureCard
            title="Music Playlist Example"
            description="Explore how Linked Lists power music playlists in a hands-on demo."
            icon={
              <MusicNoteIcon
                sx={{ fontSize: 40, color: "secondary.main", mb: 2 }}
              />
            }
            linkTo="/music-playlist"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FeatureCard
            title="Other Real-World Examples"
            description="Discover various applications of Linked Lists in everyday technology."
            icon={
              <ExploreIcon
                sx={{ fontSize: 40, color: "success.main", mb: 2 }}
              />
            }
            linkTo="/other-examples"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
