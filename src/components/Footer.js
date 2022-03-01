import React from 'react';
import {Box, Typography} from "@mui/material";

export default function Footer() {
    return (
        <Box
            sx={{
                flexGrow: 1,
                background: "#191C1D"
            }}
            paddingY={2}
            display="flex"
            alignContent="center"
            justifyContent="center"
        >
            <Typography
                variant="body1"
                fontSize={18}
                fontWeight={100}
            >
                © 2022 Copyright: ClubTrain
            </Typography>
        </Box>
    )
}