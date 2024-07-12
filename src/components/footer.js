import Image from "next/image";

import ContainerGrid from "./container";
import Logo from "@/assets/logo.svg";

const footerNav = [
    {
        titleMenu: 'NFT Boost®',
        items: ['Download', 'NFTs', 'Rank', 'FAQ']
    },
    {
        titleMenu: 'Links importantes',
        items: ['About us', 'Questions', 'Press', 'Contact us', 'Legal']
    }
]

export default function Footer() {
    return (
        <footer className="gap-10 py-10 @laptop:pt-32 @laptop:pb-14 bg-footer-pattern bg-no-repeat bg-position-footer">
            <ContainerGrid className="flex flex-col @laptop:flex-row justify-between">
                <div className="text-left max-w-full @laptop:max-w-left-cont-footer mb-10 @laptop:mb-0">
                    <Image
                        src={Logo}
                        alt="Logo NFTBoost"
                    />
                    <p className="mt-4 mb-6 text-lg text-white text-opacity-70">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    <button className="bg-blue-primary py-4 px-7 rounded-full font-medium hover:bg-blue-900 transition-all ease-linear w-full @tablet:w-auto">
                        Conectar carteira
                    </button>
                </div>
                <div className="flex flex-col gap-10 @laptop:gap-20 @laptop:flex-row">
                    {
                        footerNav.map(({titleMenu, items}) => (
                            <div key={`Menu-${titleMenu}`}>
                                <strong className="text-xl mb-4 block">{titleMenu}</strong>
                                <ul className="space-y-4">
                                    {
                                        items.map((item, i) => (
                                            <li key={i}>
                                                <a href="#" className="text-lg text-white text-opacity-60">{item}</a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </ContainerGrid>
        </footer>
    );
}