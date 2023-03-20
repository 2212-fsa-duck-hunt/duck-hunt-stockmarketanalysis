"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function AboveBar() {
    return (
        <Box sx={{ height: 20 }}>
            <AppBar position="static" style={{ background: "#110f20" }}>
                <Toolbar>
                    <Typography component="div" sx={{ flexGrow: 1 }}>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}