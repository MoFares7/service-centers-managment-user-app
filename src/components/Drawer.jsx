import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AppointmentsMangamentPage from './../pages/AppointmentsMangamentPage';
import ActivitysManagmentPage from './../pages/ActivitysManagmentPage';
import { AirOutlined, CalendarMonth, Chat, CoPresentOutlined } from '@mui/icons-material';
import FeedbackPage from './../pages/FeedbackPage';

const drawerWidth = 270;
const options = ['Appointments Management', 'Volunteer Management', 'Feedback Management'];

const openedMixin = (theme) => ({
        width: drawerWidth,
        transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
});

const closedMixin = (theme) => ({
        transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.up('sm')]: {
                width: `calc(${theme.spacing(8)} + 1px)`,
        },
});

const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
                marginLeft: drawerWidth,
                width: `calc(100% - ${drawerWidth}px)`,
                transition: theme.transitions.create(['width', 'margin'], {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.enteringScreen,
                }),
        }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
                width: drawerWidth,
                flexShrink: 0,
                whiteSpace: 'nowrap',
                boxSizing: 'border-box',
                ...(open && {
                        ...openedMixin(theme),
                        '& .MuiDrawer-paper': openedMixin(theme),
                }),
                ...(!open && {
                        ...closedMixin(theme),
                        '& .MuiDrawer-paper': closedMixin(theme),
                }),
        }),
);

export default function DrawerCenterDetails() {
        const theme = useTheme();
        const [open, setOpen] = React.useState(false);
        const [selectedOption, setSelectedOption] = useState(''); // State variable to track the selected option

        const handleDrawerOpen = () => {
                setOpen(true);
        };

        const handleDrawerClose = () => {
                setOpen(false);
        };

        // Function to handle option clicks
        const handleOptionClick = (option) => {
                setSelectedOption(option);
        };
        return (
                <Box sx={{ display: 'flex' }}>
                        <CssBaseline />
                        <AppBar position="fixed" open={open}>
                                <Toolbar sx={{
                                        backgroundColor: '#9C27B0'
                                }}>
                                        <IconButton
                                                color="inherit"
                                                aria-label="open drawer"
                                                onClick={handleDrawerOpen}
                                                edge="start"
                                                sx={{
                                                        marginRight: 5,
                                                        ...(open && { display: 'none' }),
                                                }}
                                        >
                                                <MenuIcon />
                                        </IconButton>
                                        <Typography variant="h6" noWrap component="div">
                                                All Service in TOGETHER
                                        </Typography>
                                </Toolbar>
                        </AppBar>
                        <Drawer variant="permanent" open={open}>
                                <DrawerHeader>
                                        <IconButton onClick={handleDrawerClose}>
                                                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                                        </IconButton>
                                </DrawerHeader>
                                <Divider />
                                <List>
                                        {options.map((text, index) => (
                                                <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                                                        <ListItemButton
                                                                sx={{
                                                                        minHeight: 48,
                                                                        justifyContent: open ? 'initial' : 'center',
                                                                        px: 2.5,
                                                                }}
                                                                onClick={() => handleOptionClick(text)}
                                                        >
                                                                <ListItemIcon
                                                                        sx={{
                                                                                minWidth: 0,
                                                                                mr: open ? 3 : 'auto',
                                                                                justifyContent: 'center',
                                                                        }}
                                                                >
                                                                        {index % 3 === 0 ? (
                                                                                <CalendarMonth />
                                                                        ) : index % 2 === 0 ? (
                                                                                <Chat />
                                                                        ) : (
                                                                                <CoPresentOutlined />
                                                                        )}
                                                                </ListItemIcon>
                                                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                                        </ListItemButton>
                                                </ListItem>
                                        ))}
                                </List>

                                <Divider />
                        </Drawer>
                        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                                {selectedOption === 'Appointments Management' && <AppointmentsMangamentPage />}
                                {selectedOption === 'Volunteer Management' && <ActivitysManagmentPage />}
                                {selectedOption === 'Feedback Management' && <FeedbackPage />}
                        </Box>
                </Box>
        );
}
