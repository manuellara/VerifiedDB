import React from 'react'

// MUI
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'

// icons
import VerifiedIcon from '@mui/icons-material/Verified';

export default function Navbar() {
    return (
        <AppBar position='sticky'>
            <Toolbar>

                <IconButton size="large" edge="start" color="inherit">
                    <VerifiedIcon />
                </IconButton>

                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Verified DB
                </Typography>

                {/* <Tooltip title="coming soon...">
                    <Button color="inherit">
                        Login | Register
                    </Button>
                </Tooltip> */}

            </Toolbar>
        </AppBar>
    )
}
