import React from 'react';
import { makeStyles } from '@mui/styles'
import Header from "./components/Header";
import PromoText from "./components/PromoText";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
    }
}));

export default function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <PromoText />
        </div>
    );
}