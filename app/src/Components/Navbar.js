import React, { useContext } from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import {Button, Grid} from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { LOGIN_ROUTE } from '../utils/consts'
import { Context } from '../index';
import { useAuthState } from 'react-firebase-hooks/auth';

function Navbar() {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    return (
        <div>
            <AppBar color={"primary"} position="static">
                <ToolBar variant={"dense"}>
                    <Grid container justify={"flex-end"}>
                        {!user ? 
                            <NavLink to={LOGIN_ROUTE}>
                                <Button variant={"outlined"}>Login</Button>
                            </NavLink>
                            :
                            <Button onClick={() => auth.signOut()} variant={"outlined"}>Выйти</Button>
                        }
                    </Grid>
                </ToolBar>
            </AppBar>
        </div>
    )
}

export default Navbar
