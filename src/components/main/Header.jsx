import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import './style.css';



//husername=mainusername;
const settings = [

    { name: "Profile"},
    { name: "Reservation" },
    { name: "Logout" },
];    
const pages = [{ name: "Matches" }
//, { name: "Stadium", link: `../viewstadiums/${id}` }
, { name: "About"}];



function ResponsiveAppBar() {
    const{id}=useParams();



    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate();

    const goto = (page) => () => {
        if(page.name=="Matches"){
            
            navigate(`../matches/${id}`);
        }
        else{
            navigate(`../main/${id}`);
        }
    };
    const gotoset = (setting) => () => {
        if (setting.name == "Logout") {
            navigate(`/`);
        }
        else if(setting.name=="Reservation"){
            navigate(`../viewres/${id}`);
        }
        else{
            navigate(`../editprofile/${id}`);
        }
    };
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <SportsSoccerIcon
                        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="main"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none"
                        }}
                    >
                        EFA
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left"
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left"
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" }
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography component="a" textAlign="center" onClick={goto(page)}> {page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <SportsSoccerIcon
                        sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                    />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="main"
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none"
                        }}
                    >
                        EFA
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                component="a" 
                                sx={{ my: 2, color: "white", display: "block" }}
                                onClick={goto(page)}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt={id} src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography component="button" textAlign="center" onClick={gotoset(setting)}> {setting.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;