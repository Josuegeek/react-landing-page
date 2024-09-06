import { useState, useEffect } from "react";

function VideoReader() {

    const [bg, setBg] = useState("url('/img/landing.jpg') center center /cover")

    const handleResize = () => {
        (window.innerWidth >= 768)?
        setBg("url('/img/video.jpeg') center center /cover"):
            setBg("url('/img/banner3.png') center center /cover");
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => {window.removeEventListener('resize', handleResize)};
    }, []);

    return (
        <div className="flex flex-col relative  mt-14 w-full items-center">
            <div className="sm:max-w-md sm:h-80 md:max-w-2xl md:max-h-96 max-w-80 max-h-72 w-full rounded-3xl shadow-xl overflow-clip relative">
                <div className="absolute w-full h-full top-0 bg-cover" style={{background: bg}}>
                </div>
                <div className="absolute text-white sm:w-24 sm:h-24 w-20 h-20 flex flex-row justify-center items-center bg-blue-400 m-auto top-0 bottom-0 left-0 right-0 rounded-full shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="currentColor" d="m10 17l5-5l-5-5z" /></svg>
                </div>
            </div>

        </div>

    )

}

export default VideoReader

