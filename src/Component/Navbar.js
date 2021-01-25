import React from "react";
import { Layout } from "antd";
import {
  PlusCircleFilled,
  MenuOutlined,
  SearchOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import pic from "../img/gid.jpg";

import Avatar from "@material-ui/core/Avatar";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "30ch",
      height: "10px",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const classe = useStyle();
  return (
    <div>
      <div
        style={{
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          position: "sticky",
          zIndex: "10",
          top: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly ",
            alignItems: "center",
            padding: "0 10px",
          }}
        >
          <MenuOutlined style={{ fontSize: "20px" }} />
          <PlusCircleFilled
            style={{ fontSize: "30px", marginLeft: "20px", color: "#09C09E" }}
          />
          <div>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",

            width: "200px",
            marginRight: "30px",
          }}
        >
          <NotificationOutlined />
          <div
            style={{
              height: "10px",
              width: "10px",
              backgroundColor: "#09C09E",
              borderRadius: "10px",
              marginTop: "-10px",
              marginLeft: "-20px",
            }}
          ></div>
          <div
            style={{
              height: 0,
              width: 0,
              marginTop: "-40px",
              marginLeft: "30px",
            }}
            className={classe.root}
          >
            <Avatar alt="Remy Sharp" src={pic} />
          </div>
          <h5 style={{ color: "white", marginLeft: "30px" }}>Gideon Ekeke</h5>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
