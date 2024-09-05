
interface Profile{
    photo : string,
    name : string,
    profession : string
}

function ClientProfile({photo, name, profession}:Profile){
    return(
        <div className="flex flex-row gap-1 p-1">
            <img className="rounded-full w-10 h-10" src={photo} alt={name} />
            <div className="flex flex-col gap-1">
                <p className="text-xs">{name}</p>
                <p className="text-xs">{profession}</p>
            </div>
        </div>
    )
}

export default ClientProfile