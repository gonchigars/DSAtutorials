import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const NodeBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: theme.spacing(1),
  display: "inline-flex",
  flexDirection: "column",
  alignItems: "center",
  width: "150px",
}));

const ArrowBox = styled(Box)({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "50px",
});

const CodeBlock = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  margin: theme.spacing(2, 0),
  backgroundColor: theme.palette.grey[100],
  "& pre": {
    margin: 0,
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
  },
}));

class Song {
  constructor(title, artist, duration) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
    this.next = null;
  }
}

class Playlist {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addSong(title, artist, duration) {
    const newSong = new Song(title, artist, duration);
    if (!this.head) {
      this.head = newSong;
      this.tail = newSong;
    } else {
      this.tail.next = newSong;
      this.tail = newSong;
    }
  }
}

const RealWorldImplementation = () => {
  const [backendData, setBackendData] = useState(null);
  const [playlist, setPlaylist] = useState(null);
  const [newSong, setNewSong] = useState({
    title: "",
    artist: "",
    duration: "",
  });

  useEffect(() => {
    // Simulating API call
    const mockData = {
      playlist: [
        { title: "Shape of You", artist: "Ed Sheeran", duration: "3:53" },
        { title: "Blinding Lights", artist: "The Weeknd", duration: "3:20" },
        { title: "Dance Monkey", artist: "Tones and I", duration: "3:29" },
      ],
    };
    setBackendData(mockData);
  }, []);

  const createPlaylist = () => {
    const list = new Playlist();
    backendData.playlist.forEach((song) => {
      list.addSong(song.title, song.artist, song.duration);
    });
    setPlaylist(list);
  };

  const renderPlaylist = () => {
    if (!playlist) return null;
    const nodes = [];
    let current = playlist.head;
    while (current) {
      nodes.push(
        <React.Fragment key={current.title}>
          <NodeBox elevation={3}>
            <Typography variant="body2">{current.title}</Typography>
            <Typography variant="caption">{current.artist}</Typography>
            <Typography variant="caption">{current.duration}</Typography>
          </NodeBox>
          {current.next && (
            <ArrowBox>
              <Typography>→</Typography>
            </ArrowBox>
          )}
        </React.Fragment>
      );
      current = current.next;
    }
    return (
      <Box
        sx={{ display: "flex", alignItems: "center", overflowX: "auto", pb: 2 }}
      >
        {nodes}
      </Box>
    );
  };

  const handleAddSong = () => {
    if (newSong.title && newSong.artist && newSong.duration) {
      playlist.addSong(newSong.title, newSong.artist, newSong.duration);
      setNewSong({ title: "", artist: "", duration: "" });
      setPlaylist({ ...playlist }); // Trigger re-render
    }
  };

  const linkedListCreationCode = `
class Song {
  constructor(title, artist, duration) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
    this.next = null;
  }
}

class Playlist {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addSong(title, artist, duration) {
    const newSong = new Song(title, artist, duration);
    if (!this.head) {
      this.head = newSong;
      this.tail = newSong;
    } else {
      this.tail.next = newSong;
      this.tail = newSong;
    }
  }
}

// Function to create playlist from JSON data
const createPlaylist = (jsonData) => {
  const playlist = new Playlist();
  jsonData.playlist.forEach(song => {
    playlist.addSong(song.title, song.artist, song.duration);
  });
  return playlist;
};

// Usage
const jsonData = {
  "playlist": [
    { "title": "Shape of You", "artist": "Ed Sheeran", "duration": "3:53" },
    { "title": "Blinding Lights", "artist": "The Weeknd", "duration": "3:20" },
    { "title": "Dance Monkey", "artist": "Tones and I", "duration": "3:29" }
  ]
};
const myPlaylist = createPlaylist(jsonData);
  `;

  const frontendRenderCode = `
const renderPlaylist = () => {
  if (!playlist) return null;
  const nodes = [];
  let current = playlist.head;
  while (current) {
    nodes.push(
      <React.Fragment key={current.title}>
        <NodeBox elevation={3}>
          <Typography variant="body2">{current.title}</Typography>
          <Typography variant="caption">{current.artist}</Typography>
          <Typography variant="caption">{current.duration}</Typography>
        </NodeBox>
        {current.next && (
          <ArrowBox>
            <Typography>→</Typography>
          </ArrowBox>
        )}
      </React.Fragment>
    );
    current = current.next;
  }
  return <Box sx={{ display: 'flex', alignItems: 'center', overflowX: 'auto', pb: 2 }}>{nodes}</Box>;
};
  `;

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Music Playlist: Linked List in Action
      </Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Backend Data (JSON):
        </Typography>
        <CodeBlock>
          <pre>{JSON.stringify(backendData, null, 2)}</pre>
        </CodeBlock>

        {backendData && !playlist && (
          <Button variant="contained" onClick={createPlaylist} sx={{ mt: 2 }}>
            Create Playlist
          </Button>
        )}

        {playlist && (
          <>
            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
              Playlist Visualization:
            </Typography>
            {renderPlaylist()}

            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
              Add New Song:
            </Typography>
            <TextField
              label="Title"
              value={newSong.title}
              onChange={(e) =>
                setNewSong({ ...newSong, title: e.target.value })
              }
              fullWidth
              margin="normal"
            />
            <TextField
              label="Artist"
              value={newSong.artist}
              onChange={(e) =>
                setNewSong({ ...newSong, artist: e.target.value })
              }
              fullWidth
              margin="normal"
            />
            <TextField
              label="Duration"
              value={newSong.duration}
              onChange={(e) =>
                setNewSong({ ...newSong, duration: e.target.value })
              }
              fullWidth
              margin="normal"
            />
            <Button variant="contained" onClick={handleAddSong} sx={{ mt: 2 }}>
              Add Song
            </Button>
          </>
        )}
      </Paper>

      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Linked List Creation Code:
        </Typography>
        <CodeBlock>
          <pre>{linkedListCreationCode}</pre>
        </CodeBlock>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Frontend Rendering Code:
        </Typography>
        <CodeBlock>
          <pre>{frontendRenderCode}</pre>
        </CodeBlock>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          How the Linked List is Created and Displayed:
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="1. Data Structure"
              secondary="The Song class represents each node, and the Playlist class implements the linked list structure."
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="2. List Creation"
              secondary="The createPlaylist function converts JSON data into a linked list structure."
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="3. Rendering"
              secondary="The renderPlaylist function traverses the linked list and creates React components for each node."
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="4. Visualization"
              secondary="Each song is represented by a NodeBox, with arrows showing the links between nodes."
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="5. Interactivity"
              secondary="New songs can be added, demonstrating how the linked list grows dynamically."
            />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
};

export default RealWorldImplementation;
