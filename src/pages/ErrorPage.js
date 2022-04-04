import React from 'react'

// MUI 5
import { Box, Typography } from '@mui/material'

// components 
import { Layout } from '../components/Layout'

const boxStyle = {
    height: '100vh',
};

export default function ErrorPage() {
    return (
        <Layout>
            <Box sx={{ ...boxStyle }}>
                <Typography variant='h1'>
                    Cannot find page
                </Typography>
            </Box>
        </Layout>
    )
}
