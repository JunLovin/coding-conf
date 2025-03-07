import { useNavigate } from 'react-router-dom'
import Header from '@components/Header'

function DefaultError() {
    const navigate = useNavigate();

    const handleHome = ():void => {
        navigate('/');
    }

    return (
        <>
        <Header />
        <h2 className="text-6xl hover:underline text-white" onClick={handleHome}>Return Back</h2>
        </>
    )
}

export default DefaultError