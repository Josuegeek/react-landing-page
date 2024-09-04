import DescriptionCard from "./descard"
import FeatureList from "./featureslist"
import VideoReader from "./videoreader"
import PartnersList from "./partnerslist"

function Main() {

    return (
        <main>
            <section className="items-center flex flex-col mt-20">
                <DescriptionCard title="Features" description="Most calendars are designed for teams. 
                    Slate is designed for freelancers"/>
                <FeatureList />
                <VideoReader link="" thumbnail="desktop" />
            </section>
            <section className="items-center flex flex-col mt-20">
                <DescriptionCard title="Partners" description="Most calendars are designed for teams. 
                Slate is designed for freelancers"/>
                <PartnersList/>
            </section>
        </main>
    )

}

export default Main
