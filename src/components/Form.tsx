import Upload from '@public/images/icon-upload.svg'

function Form() {
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
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="form-avatar">
                            <div className="avatar-label">
                                <label htmlFor="avatar">Upload Avatar</label>
                            </div>
                            <div className="avatar-input w-[500px] h-[175px] border-2 p-4 flex justify-center items-center border-dashed border-slate-600 rounded-2xl bg-slate-600/20 relative">
                                <div className="upload-container absolute translate-[-50%] top-[35%] left-[50%] p-3 rounded-2xl border-2  border-slate-700 bg-slate-500/20 cursor-pointer">
                                    <img src={Upload} alt="upload"/>
                                </div>
                                <input type="file" id="avatar" name="avatar" className="w-full h-full relative cursor-pointer"/>
                                <p className="absolute top-[65%] left-[50%] translate-[-50%] w-max text-slate-300 text-[1.2rem] z-0">Drag and drop or click to upload</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}

export default Form