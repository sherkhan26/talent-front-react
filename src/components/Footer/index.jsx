import React from 'react';
import styles from "../Footer/Footer.module.scss";
import Container from "@mui/material/Container";

export const Footer = () => {
    return (
        <div className={styles.root}>
            <Container maxWidth="lg">
                <div className={styles.inner}>
                    <h1>FOOTER</h1>
                </div>

            </Container>
        </div>
    )
}