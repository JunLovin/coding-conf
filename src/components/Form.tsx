import { useState, useEffect, useRef, useContext } from 'react'
import { useNavigate } from 'react-router'
import { UserContext } from '@components/UserContext'
import Upload from '@public/images/icon-upload.svg'
import Info from '@public/images/icon-info.svg'

function Form() {
    const { userData, setUserData } = useContext(UserContext)
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ emailStatus, setEmailStatus ] = useState(true)
    const [ github, setGithub ] = useState('')
    const [ pfp, setPfp ] = useState<string | null>('')
    const [pfpStatus, setPfpStatus] = useState(true)
    
    const fileInputRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()

    const handlePfp = (e:React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0] && e.target.files[0].size <= 500000) {
            const imageUrl = URL.createObjectURL(e.target.files[0])
            setPfp(imageUrl)
            console.log(imageUrl)
        } else {
            setPfpStatus(false)
        }
    }

    useEffect(() => {
        return () => {
            if (pfp) {
                URL.revokeObjectURL(pfp)
            }
        }
    }, [pfp])

    const handleName = (e:React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handleGithub = (e:React.ChangeEvent<HTMLInputElement>) => {
        setGithub(e.target.value)
    }

    const handleSubmit = () => {
        if (email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            setEmailStatus(true)
            navigate('/ticket')
        } else {
            setEmailStatus(false)
            return;
        }
        setUserData({
            name: name,
            email: email,
            username: github,
            pfp: pfp
        })
    }

    return (
        <>
        <section className="form w-full text-white h-[90dvh]">
            <div className="form-container flex flex-col w-full h-full items-center">
                <div className="form-title w-max h-max">
                    <h2 className="font-bold text-5xl w-[700px] text-center leading-normal">Your Journey to Coding Conf 2025 Starts Here!</h2>
                    <div className="form-title-text text-center text-slate-200 leading-normal">
                        <p className="text-[1.2rem]">Secure your spot at next year's biggest coding conference.</p>
                    </div>
                </div>
                
                <div className="form-form mt-8">
                    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-8">
                        <div className="form-avatar">
                            <div className="avatar-label">
                                <label htmlFor="avatar" className="font-semibold text-[1.1rem]">Upload Avatar</label>
                            </div>
                            <div className="avatar-input mt-[.3rem] w-[500px] h-[175px] border-2 p-4 flex justify-center items-center border-dashed border-slate-600 rounded-2xl bg-slate-600/20 relative">
                                <div className="upload-container w-[75px] h-[75px] flex justify-center items-center absolute translate-[-50%] top-[35%] left-[50%] p-2 rounded-2xl border-2  border-slate-700 bg-slate-500/20 cursor-pointer">
                                {pfp ? (
                                    <img src={pfp} alt="pfp" className="w-full h-full rounded-full"/>
                                ) : (
                                    <img src={Upload} alt="upload" className="w-[40px] h-[40px]"/>
                                )}
                                </div>
                                <input ref={fileInputRef} type="file" id="avatar" name="avatar" accept='image/png, image/jpeg' className="w-full h-full relative cursor-pointer opacity-0" onChange={handlePfp}/>
                                {pfp && (<div className="flex justify-center gap-6 w-full absolute top-[75%] left-[50%] translate-[-50%]"><span className="bg-slate-500/20 text-[.9rem] p-1 rounded-[5px] text-slate-300 cursor-pointer hover:underline" onClick={() => {
                                    setPfp(null)
                                }}>Remove image</span><span className="bg-slate-500/20 text-[.9rem] p-1 rounded-[5px] text-slate-100 cursor-pointer hover:underline" onClick={() => {
                                    if (fileInputRef.current) {
                                        fileInputRef.current.click();
                                    }
                                }}>Change image</span></div>)}{!pfp && (<p className="absolute top-[75%] left-[50%] translate-[-50%] w-max text-slate-400 text-[1.2rem] z-0">Drag and drop or click to upload</p>)}
                            </div>
                            {!pfpStatus && (
                                <p className="text-red-400 mt-2"><img src={Info} alt="" className="inline mr-2"/>File too large. Please upload a photo under 500KB.</p>
                            )}
                            {pfpStatus && <p className="text-slate-400 mt-2"><img src={Info} alt="" className="inline mr-2"/>Upload your photo (JPG or PNG, max size: 500KB)</p>}
                        </div>
                        <div className="form-name mt-4">
                            <div className="name-label">
                                <label htmlFor="name" className="font-semibold text-[1.1rem]">Full Name</label>
                            </div>
                            <div className="name-input">
                                <input type="text" id="name" name="name" value={name} onChange={handleName} className="w-[500px] h-[50px] rounded-2xl bg-slate-600/17 border-2 border-slate-700 p-4 mt-[.3rem] outline-0"/>
                            </div>
                        </div>
                        <div className="form-email">
                            <div className="email-label">
                                <label htmlFor="email" className="font-semibold text-[1.1rem]">Email Address</label>
                            </div>
                            <div className="email-input relative">
                                {!emailStatus ? <input type="text" id="email" name="email" placeholder="example@email.com" value={email} onChange={handleEmail} className="w-[500px] h-[50px] rounded-2xl bg-slate-600/17 border-2 border-red-400 p-4 mt-[.3rem] outline-0"/> : <input type="text" id="email" name="email" placeholder="example@email.com" value={email} onChange={handleEmail} className="w-[500px] h-[50px] rounded-2xl bg-slate-600/17 border-2 border-slate-700 p-4 mt-[.3rem] outline-0"/>}
                                {!emailStatus && (
                                    <label htmlFor="email" className="absolute bottom-[-25px] left-0 text-red-400 text-[.9rem]"><img src={Info} alt="" className="inline mr-2"/>Please enter a valid email address.</label>
                                )}
                            </div>
                        </div>
                        <div className="form-github">
                            <div className="github-label">
                                <label htmlFor="github" className="font-semibold text-[1.1rem]">Github Username</label>
                            </div>
                            <div className="github-input">
                                <input type="text" id="github" name="github" placeholder="@yourusername" value={github} onChange={handleGithub} className="w-[500px] h-[50px] rounded-2xl bg-slate-600/17 border-2 border-slate-700 p-4 mt-[.3rem] outline-0"/>
                            </div>
                        </div>
                        <div className="form-button mt-4">
                            <button className="w-full bg-orange-500 text-slate-950 font-extrabold h-[60px] text-[1.3rem] rounded-2xl cursor-pointer" onClick={() => {
                                handleSubmit()
                            }}>Generate My Ticket</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}

export default Form