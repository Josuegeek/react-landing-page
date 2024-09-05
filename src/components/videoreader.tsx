interface Video {
    link: string,
    thumbnail: string
}

function VideoReader({ link, thumbnail }: Video) {

    return (
        <div className="flex flex-col relative  mt-14 w-full items-center">
            <div className="sm:max-w-md sm:h-80 md:max-w-2xl md:max-h-96 max-w-80 max-h-72 w-full rounded-3xl shadow-xl overflow-clip relative">
                <iframe className=""
                    src={link}
                    frameborder="0"
                    set
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
                <div className="absolute w-full h-full top-0 bg-cover" style={{
                    backgroundImage: (window.screen.width >= 768) ?
                        "url('src/assets/img/video.jpeg')" : "url('src/assets/img/landing.jpg')"
                }}>
                </div>
                <div className="absolute text-white w-24 h-24 flex flex-row justify-center items-center bg-blue-400 m-auto z-10 top-0 bottom-0 left-0 right-0 rounded-full shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="currentColor" d="m10 17l5-5l-5-5z" /></svg>
                </div>
            </div>

        </div>

    )

}

export default VideoReader

