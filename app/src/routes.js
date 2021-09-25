import Chat from './Components/Chat'
import Login from './Components/Login'
import { LOGIN_ROUTE, CHAT_ROUTE } from './utils/consts'

export const publicRoutes = [
    {
        path:  LOGIN_ROUTE,
        Component: Login
    }
]

export const privatRoutes = [
    {
        path:  CHAT_ROUTE,
        Component: Chat
    }
]