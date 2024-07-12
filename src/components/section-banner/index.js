'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Image from "next/image";
import ContainerGrid from "../container";

import GooglePlay from "@/assets/google.svg";
import AppleStore from "@/assets/apple.svg";

export default function SectionBanner() {
    const bannerRef = useRef()

    useEffect(() => {
        const banner = bannerRef.current

        gsap.fromTo(banner, {
            opacity: 0,
            scale: 0.7
        }, {
            opacity: 1,
            scale: 1,
            ease: 'power3.out',
            duration: 1.5,
            scrollTrigger: {
                trigger: banner,
                start: 'top-=100% center'
            }
        })

    }, [])

    return (
        <section className="mb-10 @laptop:mb-28">
            <ContainerGrid>
                <div className="w-full h-area-banner bg-banner bg-no-repeat flex flex-col items-center justify-center rounded-2xl opacity-0" ref={bannerRef}>
                    <h2 className="font-poppins font-semibold text-3xl/10 @laptop:text-6xl/snug text-center  max-w-lg @laptop:max-w-4xl mb-4">Abra as Portas para a Próxima Revolução Digital!</h2>
                    <p className="w-full max-w-72 @laptop:max-w-xl text-center text-base @laptop:text-xl text-white text-opacity-90 mb-6">Descubra, Adquira e Possua os NFTs Mais Valiosos do Universo Digital. Sua Oportunidade, Sua História</p>
                    <div className="flex flex-col @laptop:flex-row items-center gap-4">
                        <Image
                            src={GooglePlay}
                            alt="Google Play"
                        />
                        <Image
                            src={AppleStore}
                            alt="Apple Store"
                        />
                    </div>
                </div>
            </ContainerGrid>
        </section>
    );
}