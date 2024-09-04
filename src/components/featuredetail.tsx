
interface Feature{
    title : string,
    description : string,
    image: string
}

function FeatureDetail({title, description, image}:Feature){
    return(
        <div className="flex flex-col gap-3 max-w-48 text-center items-center p-4">
            <img className="w-14" src={image} alt="feature-img" />
            <p className="font-bold">{title}</p>
            <p className="text-sm" >{description}</p>
        </div>
    )
}

export default FeatureDetail

