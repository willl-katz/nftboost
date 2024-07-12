import ContainerGrid from "../container";
import AreaText from "./area-text";
import { CardsHero } from "./cards";

export default function SectionHero() {
    return (
        <section className="pt-24 @laptop:pt-32 bg-hero-pattern bg-no-repeat">
            <ContainerGrid className='flex flex-col items-center overflow-hidden'>
                <AreaText/>
                <CardsHero/>
                <div className="w-full border-t border-white border-opacity-5 mt-10 @desktop:mt-36"></div>
            </ContainerGrid>
        </section>
    );
}