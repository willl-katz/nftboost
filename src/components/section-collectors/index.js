import ContainerGrid from "../container"
import TitleSection from "../title-section"
import AreaCardCollectors from "./area-card-collectors"

export default function SectionCollectors() {

    return (
        <section className="py-10 @laptop:py-28">
            <ContainerGrid className="relative">
                <TitleSection
                    subtitle="Colecionadores em Foco"
                    title="Principais colecionadores"
                />
                <AreaCardCollectors/>
                <div className="w-full border-t border-white border-opacity-5 absolute -bottom-10 @laptop:-bottom-28 left-0"></div>
            </ContainerGrid>
        </section>
    )
}