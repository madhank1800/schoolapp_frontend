import React, {  useContext } from "react";
import { MyContext } from "../MyContext";
//import React, { Suspense, lazy, useContext } from "react";

import telugu_school from "../Images/remove_white.jpg";
//import schoolLogo from '../Images/school_logo.jpg'
//import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AbcIcon from "@mui/icons-material/Abc";
import NestedRoute from "../SchoolSection/NestedRoute";
import { styled, useTheme } from "@mui/material/styles";
//import FallbackComponent from "../FallbackComponent";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";

import Divider from "@mui/material/Divider";
import BiotechIcon from "@mui/icons-material/Biotech";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import EventIcon from "@mui/icons-material/Event";
//import CssBaseline from "@material-ui/core/CssBaseline";
import LockIcon from "@mui/icons-material/Lock";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
//import AddStudent from "./AddStudent";
import { Link, Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
//import { Link, Outlet, Route, Routes } from "react-router-dom";

//const AddStudent = lazy(() => import('../SchoolSection/AddStudent'));
//const Attendance = lazy(() => import("../SchoolSection/Attendance"));
//const Labs = lazy(() => import('../SchoolSection/Labs'));
//const Sports = lazy(() => import("../SchoolSection/Sports"));
//const ProgressCard = lazy(() => import("../SchoolSection/ProgressCard"));
//const SchoolEvents = lazy(() => import('../SchoolSection/SchoolEvents'));
//const Profile = lazy(() => import("../SchoolSection/Profile"));


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const HomePage = () => {
  const { globalState } = useContext(MyContext);

  console.log("globalState", globalState.token);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
 // const [addStudent, setStudent] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const icons = [
    <AddIcon />,
    <AppRegistrationIcon />,
    <SportsBasketballIcon />,
    <EventIcon />,
    <AbcIcon />,
    
    <BiotechIcon />,
    <AccountCircleIcon/>,
    <LockIcon />,
  ];

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          style={{ backgroundColor: "#FBA834" }}
          open={open}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              School app
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <Divider />
          <List>
            {[
              { text: "Add Student", path: "addstudent" },
              { text: "attendance", path: "attendance" },
              { text: "sports", path: "sports" },
              { text: "progress card", path: "progressCard" },

              { text: "events", path: "events" },
              { text: "labs", path: "labs" },
              { text: "profile", path: "profile" },
              { text: "logout", path: "logout" },
            ].map((item, index) => (
              <ListItem
                key={item.text}
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  component={Link}
                  to={`${item.path}`}
                  // onClick={()=>setStudent(true)}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {icons[index]}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
        </Box>
      </Box>

      <Box>
        {globalState.role === "student" && <h1>{globalState.role}page</h1>}
        {globalState.role === "teacher" && (
          /* {addStudent  && (<><AddStudent/></>)} */

          <>
            <Box sx={{ display: "flex", flexGrow: 1 }}>
              <CssBaseline />
              <AppBar
                position="fixed"
                style={{ backgroundColor: "#333A73" }}
                open={open}
              >
                <Toolbar>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleDrawerOpen}
                    sx={{ mr: 2, ...(open && { display: "none" }) }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    paata shala
                  </Typography>
                  <Button color="inherit">Login</Button>
                </Toolbar>
              </AppBar>
              <Drawer
                variant="permanent"
                open={open}
                sx={{ backgroundColor: "#333A73" }}
              >
                <DrawerHeader sx={{ backgroundColor: "#333A73" }}>
                  {open && (
                    <>
                      <Grid className="school_logo">
                        <img
                          src={telugu_school}
                          alt="school app"
                          height=" 50px"
                          width="140px"
                          className="hide_bg"
                        />
                      </Grid>
                    </>
                  )}
                  <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "rtl" ? (
                      <ChevronRightIcon />
                    ) : (
                      <>
                        <ChevronLeftIcon />
                      </>
                    )}
                  </IconButton>
                </DrawerHeader>
                <Divider />
                <Divider />
                <List>
                  {[
                    { text: "Add Student", path: "addstudent" },
                    { text: "attendance", path: "attendance" },
                    { text: "sports", path: "sports" },
                    { text: "progress card", path: "progressCard" },

                    { text: "events", path: "events" },
                    { text: "labs", path: "labs" },
                    { text: "profile", path: "profile" },
                    { text: "logout", path: "logout" },
                  ].map((item, index) => (
                    <ListItem
                      key={item.text}
                      disablePadding
                      sx={{ display: "block" }}
                    >
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                        component={Link}
                        to={`${item.path}`}
                        // onClick={()=>setStudent(true)}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {icons[index]}
                        </ListItemIcon>
                        <ListItemText
                          primary={item.text}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
              <Box component="main" sx={{ flexGrow: 1, pl: 3 }}>
                <DrawerHeader />

                {/* 
                <Suspense fallback={<FallbackComponent />}>
                  <Routes>
                    <Route path="addstudent" element={<AddStudent />} />
                    <Route path="attendance" element={<Attendance />} />
                    <Route path="sports" element={<Sports />} />
                    <Route path="labs" element={<Labs />} />
                    <Route path="progresscard" element={<ProgressCard />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="events" element={<SchoolEvents />} />
                  </Routes>
                </Suspense> */}
                <Outlet />
                <NestedRoute />
              </Box>
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default HomePage;
