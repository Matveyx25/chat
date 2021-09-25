import { Box, Button, Container, Grid } from '@material-ui/core'
import React, { useContext } from 'react'
import { Context } from '../index'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Login() {
    const {auth} = useContext(Context)

    const login = async() => {
        const provider = new GoogleAuthProvider()
        const {user} = getAuth();
        signInWithPopup(auth, provider)
    }

    return (
        <Container>
            <Grid container style={{height: window.innerHeight - 50}} alignItems={"center"} justifyContent={"center"}>
                <Grid style={{width: 400, background: 'lightgray'}} container alignItems={"center"} direction={"column"} >
                    <Box p={5}>
                        <Button onClick={login} variant={"outlined"}>Войти с помощью Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login
