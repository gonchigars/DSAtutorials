import React from "react";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ExploreIcon from "@mui/icons-material/Explore";
import CodeIcon from "@mui/icons-material/Code";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LinkIcon from "@mui/icons-material/Link";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";

const drawerWidth = 240;

const Sidebar = ({ open, toggleDrawer }) => {
  const [linkedListOpen, setLinkedListOpen] = React.useState(true);

  const handleLinkedListClick = () => {
    setLinkedListOpen(!linkedListOpen);
  };

  const menuItems = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    {
      text: "Linked List",
      icon: <LinkIcon />,
      subItems: [
        { text: "Introduction", icon: <SchoolIcon />, path: "/intro" },
        {
          text: "Music Playlist",
          icon: <MusicNoteIcon />,
          path: "/music-playlist",
        },
        {
          text: "Other Examples",
          icon: <ExploreIcon />,
          path: "/other-examples",
        },
        {
          text: "Real-World Implementation",
          icon: <CodeIcon />,
          path: "/real-world",
        },
      ],
    },
  ];

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {menuItems.map((item) =>
          item.subItems ? (
            <React.Fragment key={item.text}>
              <ListItem onClick={handleLinkedListClick}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
                {linkedListOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={linkedListOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems.map((subItem) => (
                    <ListItem
                      key={subItem.text}
                      component={Link}
                      to={subItem.path}
                      onClick={toggleDrawer}
                      sx={{ pl: 4 }}
                    >
                      <ListItemIcon>{subItem.icon}</ListItemIcon>
                      <ListItemText primary={subItem.text} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ) : (
            <ListItem
              key={item.text}
              component={Link}
              to={item.path}
              onClick={toggleDrawer}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          )
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;
