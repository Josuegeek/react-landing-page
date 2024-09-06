import { useState, useEffect } from "react";
import logo from '../assets/img/logo.png'
import SocialIcons from "./socialIcons";

function HeaderMenu(){
    const [bg, setBg] = useState("url('src/assets/img/header.png') center center /cover")

    const handleResize = () => {
        (window.innerWidth >= 768)?
        setBg("url('src/assets/img/header.png') center center /cover"):
            setBg("url('src/assets/img/landing.jpg') center center /cover");
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => {window.removeEventListener('resize', handleResize)};
    }, []);

    return (
        <header className="w-full bg-center bg-cover p-8 flex flex-col items-center text-red font-graphik"
                style={{background: bg}}>
            <nav className="flex flex-row items-center justify-between w-full">
                <ul className="flex flex-row gap-4 items-center text-gray-200">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#product">Product</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <a className="w-48 ml-7" href="#home"><img src={logo} alt="logo" /></a>
                <SocialIcons></SocialIcons>
            </nav>

            <div className="flex flex-col text-gray-200 mt-52 max-w-lg text-center gap-4">
                <h1 className="text-5xl font-graphik font-bold">The best products start with Figma</h1>
                <p className="font-thin">Most calendars are designed for teams. Slate is designed for freelancers</p>
            </div>

        </header>
    )

}

export default HeaderMenu;