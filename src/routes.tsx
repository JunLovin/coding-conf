import App from './App'
import DefaultError from '@components/DefaultError'

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <DefaultError />
    }
]

export default routes