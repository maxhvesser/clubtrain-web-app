import React from 'react'
import { makeStyles } from '@mui/styles'
import {AppBar, Box, Icon, IconButton, SvgIcon, Toolbar, Typography} from "@mui/material";
import { ReactComponent as Logo } from '../assets/svg/ic_logo.svg'

function BrandingLogo(props) {
    return (
        <SvgIcon {...props}>
            <Logo />
        </SvgIcon>
    )
}

const useStyles = makeStyles((theme) => ({
    appBarTitle: {
        flexGrow: '1'
    }
}))

export default function Header() {
    const classes = useStyles();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="fixed"
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                        <BrandingLogo sx={{ fontSize: 32 }} />
                    </IconButton>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        ClubTrain
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </Box>
    );
}