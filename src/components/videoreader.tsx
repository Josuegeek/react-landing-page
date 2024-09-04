interface Video {
    link: string,
    thumbnail: string
}

function VideoReader({ link, thumbnail }: Video) {

    return (
        <div className="relative overflow-clip rounded-3xl mt-14 shadow-xl">
            <iframe
                width={(thumbnail=="desktop")?"678":"480"}
                height="400"
                src={link}
                frameborder="0"
                set
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
            <div className="absolute w-full h-full top-0 bg-cover" style={{ backgroundImage: (thumbnail=="desktop")? 
                            "url('src/assets/img/video.jpeg')" : "url('src/assets/img/video.jpeg')" }}>
            </div>
            <div className="absolute text-white w-24 h-24 flex flex-row justify-center items-center bg-blue-400 m-auto z-10 top-0 bottom-0 left-0 right-0 rounded-full shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="currentColor" d="m10 17l5-5l-5-5z"/></svg>
            </div>
        </div>

    )

}

export default VideoReader

