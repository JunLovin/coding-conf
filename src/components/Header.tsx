import { useNavigate } from 'react-router-dom';
import Logo from '@public/images/logo-full.svg'

function Header() {
    const navigate = useNavigate();

    const handleReload = ():void => {
        navigate('/');
    }

    return (
        <>
        <header className="w-full h-[70px] flex justify-center items-center">
            <img src={Logo} alt="Logo" className="h-8 cursor-pointer" onClick={handleReload}/>
        </header>
        </>
    )
}

export default Header