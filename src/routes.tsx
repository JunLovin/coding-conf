import App from './App'
import DefaultError from '@components/DefaultError'
import Ticket from '@components/Ticket'

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <DefaultError />
    },
    {
        path: '/ticket',
        element: <Ticket />,
        errorElement: <DefaultError />
    }
]

export default routes