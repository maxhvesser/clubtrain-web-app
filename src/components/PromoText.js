import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import Image from 'mui-image'
import HomeImage from "../assets/img/image_home.png"

function Headline() {
    return (
        <Typography
            variant="h3"
            fontSize={100}
            fontWeight={600}
            marginBottom={3}
        >
            social media, for sports clubs
        </Typography>
    )
}

function Caption() {
    return (
        <Typography
            variant="h6"
            fontSize={28}
            fontWeight={400}
            marginBottom={{
                xs: 8,
                sm: 8,
                md: 0
            }}
        >
            A new take on managing your sports club where you can digitally take control of your sports club and better drive member engagement.
        </Typography>
    )
}

export default function PromoText() {
    return (
        <Box
            sx={{
                flexGrow: 1,
                background: "#2C343D"
            }}
            display="flex"
            justifyContent="center"
            alignContent="center"
        >
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} maxWidth="1440px">
                <Grid item xs={4} sm={8} md={4}>
                    <Box
                        paddingY={8}
                    >
                        <Image
                            src={HomeImage}
                            fit="scale-down"
                            shift="top"
                            sx={{
                                maxHeight: 728
                            }}
                        />
                    </Box>
                </Grid>
                <Grid item xs={4} sm={8} md={8}>
                    <Box
                        height="1"
                        width="1"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        paddingX={8}
                    >
                        <Headline />
                        <Caption />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}