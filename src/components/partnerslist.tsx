import PartnerCard from "./partnercard";

function PartnersList() {
    return (
        <div className="flex flex-row gap-4 flex-wrap mt-10 max-w-3xl p-5 items-center justify-center">
            <PartnerCard name="Google" logo='img/partners/google.svg' />
            <PartnerCard name="Amazon" logo='img/partners/amazon.svg' />
            <PartnerCard name="Microsoft" logo='img/partners/microsoft.svg' />
            <PartnerCard name="Uber" logo='img/partners/uber.svg' />
            <PartnerCard name="Dropbox" logo='img/partners/dropbox.svg' />
            <PartnerCard name="Amazon" logo='img/partners/amazon.svg' />
            <PartnerCard name="Uber" logo='img/partners/uber.svg' />
            <PartnerCard name="Google" logo='img/partners/google.svg' />
        </div>
    )
}

export default PartnersList