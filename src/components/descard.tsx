

interface Descard{
    title : String,
    description : String
}


function DescriptionCard({title, description}: Descard){
    
    return(
        <div className="flex flex-col max-w-72 gap-3 text-center">
            <h1 className="text-2xl">{title}</h1>
            <p>{description}</p>
        </div>
    )

}


export default DescriptionCard

