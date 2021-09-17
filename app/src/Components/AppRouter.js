import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import { privatRoutes, publicRoutes } from '../routes'
import { CHAT_ROUT, LOGIN_ROUT } from '../utils/consts'

function AppRouter() {
    const user = true
    return user ? (
        <Switch>
            {privatRoutes.map(({path, Component}) => {
                <Route path={path} component={Component} exact={true}/>
            })}
            <Redirect to={CHAT_ROUT}/>
        </Switch>
    ) : (
        <Switch>
            {publicRoutes.map(({path, Component}) => {
                <Route path={path} component={Component} exact={true}/>
            })}
            <Redirect to={LOGIN_ROUT}/>
        </Switch>
    )
}

export default AppRouter
