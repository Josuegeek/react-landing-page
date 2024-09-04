

interface Partner {
    name: string,
    logo: string
}

/*
function GetSvgLogo(logo:string){
    const svg = document.createElement("div")
    svg.innerHTML=logo
    return svg
}
*/

function PartnerCard({name, logo}: Partner){
    return(
        <div className="flex flex-col gap-3 border border-slate-500 p-3 max-h-28 text-center">
            <p className="text-xs">{name}</p>
            <div dangerouslySetInnerHTML={{ __html: logo }} />
        </div>
    )
}

export default PartnerCard
