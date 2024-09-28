import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import {
  PlayArrow,
  Pause,
  SkipNext,
  SkipPrevious,
  Add,
  Delete,
} from "@mui/icons-material";

const Song = ({ title, artist, duration, isPlaying, onPlay, onDelete }) => (
  <ListItem
    secondaryAction={
      <>
        <IconButton edge="end" aria-label="play" onClick={onPlay}>
          {isPlaying ? <Pause /> : <PlayArrow />}
        </IconButton>
        <IconButton edge="end" aria-label="delete" onClick={onDelete}>
          <Delete />
        </IconButton>
      </>
    }
  >
    <ListItemText primary={title} secondary={`${artist} - ${duration}`} />
  </ListItem>
);

const MusicPlaylist = () => {
  const [playlist, setPlaylist] = useState([
    { id: 1, title: "Shape of You", artist: "Ed Sheeran", duration: "3:53" },
    { id: 2, title: "Blinding Lights", artist: "The Weeknd", duration: "3:20" },
    { id: 3, title: "Dance Monkey", artist: "Tones and I", duration: "3:29" },
  ]);
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [newSong, setNewSong] = useState({
    title: "",
    artist: "",
    duration: "",
  });

  const playSong = (index) => {
    setCurrentSong(index);
    setIsPlaying(true);
  };

  const nextSong = () => {
    setCurrentSong((prev) => (prev + 1) % playlist.length);
  };

  const prevSong = () => {
    setCurrentSong((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  const addSong = () => {
    if (newSong.title && newSong.artist && newSong.duration) {
      setPlaylist([...playlist, { ...newSong, id: Date.now() }]);
      setNewSong({ title: "", artist: "", duration: "" });
    }
  };

  const removeSong = (id) => {
    setPlaylist(playlist.filter((song) => song.id !== id));
    if (currentSong >= playlist.length - 1) {
      setCurrentSong(playlist.length - 2);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Music Playlist: Linked List in Action
      </Typography>

      <Paper elevation={3} sx={{ p: 2, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Now Playing:
        </Typography>
        {playlist.length > 0 && (
          <Song
            {...playlist[currentSong]}
            isPlaying={isPlaying}
            onPlay={() => setIsPlaying(!isPlaying)}
            onDelete={() => removeSong(playlist[currentSong].id)}
          />
        )}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <IconButton onClick={prevSong}>
            <SkipPrevious />
          </IconButton>
          <IconButton onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? <Pause /> : <PlayArrow />}
          </IconButton>
          <IconButton onClick={nextSong}>
            <SkipNext />
          </IconButton>
        </Box>
      </Paper>

      <Typography variant="h6" gutterBottom>
        Playlist:
      </Typography>
      <List>
        {playlist.map((song, index) => (
          <Song
            key={song.id}
            {...song}
            isPlaying={index === currentSong && isPlaying}
            onPlay={() => playSong(index)}
            onDelete={() => removeSong(song.id)}
          />
        ))}
      </List>

      <Paper elevation={3} sx={{ p: 2, mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Add New Song:
        </Typography>
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={newSong.title}
          onChange={(e) => setNewSong({ ...newSong, title: e.target.value })}
        />
        <TextField
          label="Artist"
          fullWidth
          margin="normal"
          value={newSong.artist}
          onChange={(e) => setNewSong({ ...newSong, artist: e.target.value })}
        />
        <TextField
          label="Duration (e.g., 3:30)"
          fullWidth
          margin="normal"
          value={newSong.duration}
          onChange={(e) => setNewSong({ ...newSong, duration: e.target.value })}
        />
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={addSong}
          sx={{ mt: 2 }}
        >
          Add Song
        </Button>
      </Paper>

      <Paper elevation={3} sx={{ p: 2, mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          How This Relates to Linked Lists:
        </Typography>
        <ul>
          <li>
            Each song is like a node in a linked list, containing data (song
            info) and a reference to the next song.
          </li>
          <li>
            Adding a song is similar to appending a node to the end of the list.
          </li>
          <li>
            Removing a song is like removing a node from the list, updating the
            connections.
          </li>
          <li>
            Playing the next or previous song is like traversing the list
            forward or backward.
          </li>
          <li>
            The current song is like a pointer to the current node in the list.
          </li>
        </ul>
      </Paper>
    </Box>
  );
};

export default MusicPlaylist;
