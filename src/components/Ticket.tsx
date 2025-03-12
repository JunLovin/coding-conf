import { useContext } from 'react'
import { UserContext } from '@components/UserContext'
import Header from '@components/Header'
import Logo from '@public/images/logo-full.svg'
import GithubLogo from '@public/images/icon-github.svg'
import lineTop from '@public/images/patternLineTop.svg'
import lineBottom from '@public/images/patternBottomDesktop.svg'

function Ticket() {
    const { userData } = useContext(UserContext)
    const { name, email, username, pfp } = userData

    const handleRandom = ():number => {
        return Math.floor(Math.random() * 1000000)
    }

    // Fix the implicit any type
    const handleGithub = (username: string | undefined): void => {
        window.open(`https://github.com/${username}`)
    }

    return (
        <>
        <Header />
        <img src={lineTop} alt="" className="absolute top-0 right-0 -z-10"/>
        <img src={lineBottom} alt="" className="absolute bottom-0 left-0 -z-10"/>
        <div className="ticket-container h-[90dvh] overflow-hidden">
            <div className="ticket flex flex-col justify-around items-center w-full h-[80%]">
                <div className="ticket-header w-max">
                    <h2 className="text-6xl max-sm:text-5xl text-white font-extrabold text-center leading-normal max-xxs:text-4xl">Congrats, <span className="bg-gradient-to-r from-orange-600 to-white bg-clip-text text-transparent">{name}!</span></h2>
                    <h2 className="text-5xl max-sm:text-4xl text-white font-extrabold text-center leading-normal max-xxs:text-3xl">Your ticket is ready.</h2>
                    <div className="ticket-header-text w-max mx-auto">
                        <p className="text-white text-[1.1rem] max-sm:text-[1rem] max-sm:w-120 max-xxs:w-90 max-xxs:mx-auto text-center leading-normal mt-6 w-2xl m-auto">We've emailed your ticket to <span className='email text-orange-500'>{email}</span> and will send updates in the run up to the event.</p>
                    </div>
                </div>
                <div className="ticket-image max-sm:w-full px-4">
                    <div className="ticker-user bg-[url(../../images/pattern-ticket.svg)] bg-no-repeat max-sm:w-full max-sm:bg-contain bg-center bg-cover w-[645px] h-[300px] p-6 relative flex flex-col justify-around max-xxs:p-3 max-xxs:py-12">
                    <div className="ticket-logo w-full max-sm:scale-90 max-xxs:scale-80 max-xxs:w-max max-xxs:transform-origin-left">
                        <img src={Logo} alt="logo"/>
                        <div className="ticket-logo-text">
                            <p className="text-slate-400 mt-2 ml-2">Jan 31, 2025 / Austin, TX.</p>
                        </div>
                    </div>
                    <div className="ticket-user flex gap-4 max-smm:gap-2 w-max max-xxs:ml-4">
                        <div className="ticket-user-pfp w-max">
                            <img src={pfp || '/path/to/default-image.jpg'} alt={name} className="rounded-2xl h-[100px] w-[100px] max-sm:h-[80px] max-sm:w-[80px]"/>
                        </div>
                        <div className="ticket-user-name flex flex-col items-center justify-center">
                            <h3 className="text-white text-2xl font-bold w-max max-sm:text-xl">{name}</h3>
                            <div className="ticket-user-username">
                                <p className="text-white text-left hover:underline cursor-pointer flex items-center" onClick={() => handleGithub(username)}><img src={GithubLogo} alt="" className="inline-block mr-1" />@{username}</p>
                            </div>
                        </div>
                    </div>
                        <span className="text-gray-500 absolute -right-2 rotate-90 text-4xl max-xxs:text-3xl top-[45%] max-sm:top-[43%] max-xxs:-right-4">
                            #{handleRandom()}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Ticket