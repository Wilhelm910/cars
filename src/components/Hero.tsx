"use client"

import { Box, Grid, Typography, styled } from '@mui/material'
import React from 'react'
import { CustomButton } from '.'
import Image from 'next/image'
import bg from '../../public/hero-bg.png'

const Hero = () => {

    function handleScroll() {
        console.log("test")
    }

    const Background = styled("div")({
        backgroundImage: `url(${bg.src})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: "550px",
        height: "400px",
        position: "absolute",
        top: "0px",
        right: "0px",
        zIndex: "-1"
    });

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6}>
                    <Box mb={2} sx={{display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", height: {lg: 500}}} >
                        <Typography variant='h3'>Find, book or rent a car - quickly and easily!</Typography>
                        <Typography mb={2} variant='body1'>Streamline your car rental experience with our effortless booking process.</Typography>
                        <CustomButton
                            title="Explore Cars"
                            buttonStyles="contained"
                            handleClick={handleScroll}
                            btnType='button'
                            btnColor="secondary"
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Box sx={{ position: "relative", height: "500px"}}>
                        <Image
                            alt='Car Image'
                            src="/hero.png"
                            width={500}
                            height={500}
                            style={{ objectFit: "contain", position: "absolute", right: "0" }}
                        />
                        <Background />
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Hero