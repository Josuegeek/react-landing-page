import DescriptionCard from "./descard"
import FeatureList from "./featureslist"
import VideoReader from "./videoreader"
import PartnersList from "./partnerslist"
import Testimonial from "./testimonial"

function Main() {

    return (
        <main>
            <section className="items-center flex flex-col mt-20">
                <DescriptionCard title="Features" description="Most calendars are designed for teams. 
                    Slate is designed for freelancers"/>
                <FeatureList />
                <VideoReader/>
            </section>
            <section className="items-center flex flex-col mt-20">
                <DescriptionCard title="Partners" description="Most calendars are designed for teams. 
                Slate is designed for freelancers"/>
                <PartnersList />
            </section>
            <section className="items-center flex flex-col mt-20">
                <DescriptionCard title="Testimonials" description=""/>
                <Testimonial brand='/img/partners/ibm.svg' 
                            text='Most calendars are designed for teams. Slate is designed 
                                for freelancers who want a simple way to plan their schedule.'
                            clientName="Organize across" cleintPhoto="/img/clients-profiles/client1.svg"
                            profession="UI/UX Designer"/>
            </section>
        </main>
    )

}

export default Main
