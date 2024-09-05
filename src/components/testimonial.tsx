import ClientProfile from './clientprofile'

interface Testimonial{
    brand : string,
    text :string,
    clientName:string,
    cleintPhoto:string,
    profession:string
}

function Testimonial({brand, text, clientName, cleintPhoto, profession}:Testimonial){
    return (
        <div className='mt-1 flex flex-col gap-5 items-center max-w-2xl p-10'>
            <img src={brand} alt="brand-logo" />
            <p className='text-center'>{text}</p>
            <ClientProfile name={clientName} photo={cleintPhoto} profession={profession}/>
        </div>
    )
}

export default Testimonial
