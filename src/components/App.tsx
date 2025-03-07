function App() {

  const handleGithub = ():void => {
    window.open("https://github.com/JunLovin", "_blank");
  }

  return (
    <>
    <div className="w-full h-dvh flex justify-center items-center">
      <h1 className="text-center text-9xl font-extrabold cursor-pointer hover:underline font-inconsolata" onClick={handleGithub}>Hello World!</h1>
    </div>
    </>
  )
}

export default App