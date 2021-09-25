import { Box, Container, Grid } from '@material-ui/core'
import '../App.css'
import React from 'react'

function Preloader() {
    return (
        <Container>
            <Grid container style={{height: window.innerHeight - 50}} alignItems={"center"} justifyContent={"center"}>
                <Grid container alignItems={"center"} direction={"column"} >
                    <Box p={5}>
                        <div className="lds-dual-ring"></div>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Preloader
