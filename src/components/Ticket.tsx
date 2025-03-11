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
    const handleGithub = (username: string): void => {
        window.open(`https://github.com/${username}`)
    }

    return (
        <>
        <Header />
        <img src={lineTop} alt="" className="absolute top-0 right-0"/>
        <img src={lineBottom} alt="" className="absolute bottom-0 left-0"/>
        <div className="ticket-container h-[90dvh]">
            <div className="ticket flex flex-col justify-around items-center w-full h-[80%]">
                <div className="ticket-header">
                    <h2 className="text-6xl text-white font-extrabold text-center leading-normal">Congrats, <span className="bg-gradient-to-r from-orange-600 to-white bg-clip-text text-transparent">{name}!</span></h2>
                    <h2 className="text-5xl text-white font-extrabold text-center leading-normal">Your ticket is ready.</h2>
                    <div className="ticket-header-text">
                        <p className="text-white text-[1.1rem] text-center leading-normal mt-6 w-2xl m-auto">We've emailed your ticket to <span className='email text-orange-500'>{email}</span> and will send updates in the run up to the event.</p>
                    </div>
                </div>
                <div className="ticket-image">
                    <div className="ticker-user bg-[url(../../public/images/pattern-ticket.svg)] bg-no-repeat w-[600px] h-[300px] p-6 relative flex flex-col justify-around">
                    <div className="ticket-logo w-full">
                        <img src={Logo} alt="logo"/>
                        <div className="ticket-logo-text">
                            <p className="text-slate-400 mt-2 ml-2">Jan 31, 2025 / Austin, TX.</p>
                        </div>
                    </div>
                    <div className="ticket-user flex gap-4">
                        <div className="ticket-user-pfp">
                            <img src={pfp} alt={name} className="rounded-2xl h-[100px] w-[100px]"/>
                        </div>
                        <div className="ticket-user-name flex flex-col items-center justify-center">
                            <h3 className="text-white text-2xl font-bold w-max">{name}</h3>
                            <div className="ticket-user-username">
                                <p className="text-white text-left hover:underline cursor-pointer flex items-center" onClick={() => handleGithub(username)}><img src={GithubLogo} alt="" className="inline-block mr-1" />@{username}</p>
                            </div>
                        </div>
                    </div>
                        <span className="text-gray-500 absolute right-0 rotate-90 text-3xl top-[40%]">
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