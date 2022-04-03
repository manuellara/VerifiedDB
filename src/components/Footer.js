import React from 'react'

// MUI
import { Box, Grid, Link, Typography } from '@mui/material'

const boxStyle = {
    height: '40vh',
    backgroundColor: 'primary.main',
    color: 'white',
    px: { xs: 3, sm: 10 },
    py: { xs: 5, sm: 10 },
};

export default function Footer() {
    return (
        <Box sx={{ ...boxStyle }}>

            <Grid container spacing={5}>

                <Grid item xs={12} sm={4}>
                    <Box borderBottom={1}>
                        <Typography variant='h6'>
                            About
                        </Typography>
                    </Box>

                    <Box>
                        <Link color="inherit">
                            About
                        </Link>
                    </Box>

                    <Box>
                        <Link color="inherit">
                            FAQ
                        </Link>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Box borderBottom={1}>
                        <Typography variant='h6'>
                            Contribute
                        </Typography>
                    </Box>

                    <Box>
                        <Link color="inherit" target="_blank" href="">
                            Submit a user
                        </Link>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Box borderBottom={1}>
                        <Typography variant='h6'>
                            Other
                        </Typography>
                    </Box>

                    <Box>
                        <Link color="inherit" target="_blank" href="https://www.buymeacoffee.com/manuellara">
                            Request API key
                        </Link>
                    </Box>
                </Grid>

            </Grid>

            <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
                Lara Laboratories &reg; {new Date().getFullYear()}
            </Box>

        </Box>
    )
}
