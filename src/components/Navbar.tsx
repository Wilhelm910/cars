import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import Image from 'next/image';
import { CustomButton } from '.';

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }} mb={10}>
            <AppBar position="fixed">
                <Toolbar sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <Link href="/">
                        <Image
                            alt='Logo'
                            src="/logo.svg"
                            width={118}
                            height={18}
                            style={{ objectFit: "contain" }}
                        />
                    </Link>
                    <CustomButton
                        title="Sign In"
                        buttonStyles="contained"
                        btnType='button'
                        btnColor="secondary"
                    />
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar