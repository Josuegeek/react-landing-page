import { useState, useEffect } from "react";
import logo from '/img/logo.png'
import SocialIcons from "./socialIcons";

function HeaderMenu(){
    const [bg, setBg] = useState("url('img/header.png') center center /cover")

    const handleResize = () => {
        (window.innerWidth >= 768)?
        setBg("url('/img/header.png') center center /cover"):
            setBg("url('/img/landing.jpg') center center /cover");
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => {window.removeEventListener('resize', handleResize)};
    }, []);

    return (
        <header className="w-full bg-center bg-cover p-8 flex flex-col items-center text-red font-graphik transition"
                style={{background: bg}}>
            <nav className="flex fixed flex-row items-center justify-between w-full pl-5 pr-5 ">
                <ul className="menu flex rounded-xl left-5 mr-10 text-center bg-gray-700 bg-opacity-90 z-20 p-5 w-11/12 md:bg-transparent md:top-0 md:p-0 md:mt-0 md:m-0 md:flex-row md:w-fit flex-col top-16 absolute md:relative gap-4 md:items-center text-gray-200 pb-16">
                    <li><a className="w-full hover:text-blue-400" href="#home">Home</a></li>
                    <li><a className="w-full hover:text-blue-400" href="#product">Product</a></li>
                    <li><a className="w-full hover:text-blue-400" href="#pricing">Pricing</a></li>
                    <li><a className="w-full hover:text-blue-400" href="#about">About</a></li>
                    <li><a className="w-full hover:text-blue-400" href="#contact">Contact</a></li>
                </ul>
                <a className="w-48 ml-7 absolute md:relative left-0" href="#home"><img src={logo} alt="logo" /></a>
                <SocialIcons style="md:relative absolute z-20 top-72 md:top-0 md:w-fit w-11/12 justify-center"></SocialIcons>
                <svg className="text-white absolute right-0 h-14 w-14 md:absolute md:invisible cursor-pointer hover:text-blue-400" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17h7M5 12h14M5 7h14"/></svg>
            </nav>

            <div className="flex flex-col text-gray-200 mt-52 max-w-lg text-center gap-4">
                <h1 className="text-5xl font-graphik font-bold">The best products start with Figma</h1>
                <p className="font-thin">Most calendars are designed for teams. Slate is designed for freelancers</p>
            </div>

        </header>
    )

}

export default HeaderMenu;