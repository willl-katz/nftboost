import ContainerGrid from "../container"
import TitleSection from "../title-section"
import CarrouselCards from "./carrousel-cards"

export default function SectionCarrousel({sectionSubtitle, sectionTitle, data, lineVisible = true}) {
    return (
        <section className="py-10 @laptop:py-28">
            <ContainerGrid className='px-0 @laptop:px-3 relative'>
                <TitleSection
                    subtitle={sectionSubtitle}
                    title={sectionTitle}
                />
                <CarrouselCards
                    data={data}
                />
                {
                    lineVisible && <div className="w-full border-t border-white border-opacity-5 absolute -bottom-10 @laptop:-bottom-28 left-0"></div>
                }
            </ContainerGrid>
        </section>
    )
}