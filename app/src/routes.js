import Chat from './Components/Chat'
import Login from './Components/Login'
import { LOGIN_ROUT, CHAT_ROUT } from './utils/consts'

export const publicRoutes = [
    {
        path:  LOGIN_ROUT,
        Component: Login
    }
]

export const privatRoutes = [
    {
        path:  CHAT_ROUT,
        Component: Chat
    }
]