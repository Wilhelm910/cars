import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import Image from 'next/image';
import { CustomButton, FooterList } from '.';
import { Grid } from '@mui/material';
import { footerLinks } from '../../constants';

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1 }} mt={25}>
            <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
                <Toolbar>
                    <Grid container mt={2}>
                        <Grid item xs={6}>
                            <Image
                                alt='Logo'
                                src="/logo.svg"
                                width={118}
                                height={18}
                                style={{ objectFit: "contain" }}
                            />
                        </Grid>
                        {footerLinks.map((footerLink, index) => {
                            return (
                                <Grid item xs={2} key={index}>
                                    <FooterList footerLink={footerLink} />
                                </Grid>
                            )
                        })}
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Footer