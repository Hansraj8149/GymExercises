import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
    <Box mt="80px" bgcolor="#FFF3F4">
        <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
            <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
        </Stack>
        <Typography variant="h5" sx={{ fontSize: { lg: '20px', xs: '20px' } }} color='gray' mt="41px" textAlign="center" pb="30px">My By Hansraj Saini</Typography>
    </Box>
);

export default Footer;