"use client"
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import IconBoost from "@/assets/icon-boost.svg";
import SmallNFT01 from "@/assets/nft-small.png";
import SmallNFT02 from "@/assets/double-nft.png";
import GooglePlay from "@/assets/google.svg";
import AppleStore from "@/assets/apple.svg";

export default function AreaText() {
    const areaTextRef = useRef(null)
    const googleRef = useRef(null)
    const appleRef = useRef(null)
    const circleRef = useRef(null)
    const circleGroupRef = useRef(null)

    useEffect(() => {
        const areaText = areaTextRef.current
        const google = googleRef.current
        const apple = appleRef.current
        const circle = circleRef.current
        const circleGroup = circleGroupRef.current

        const tl = gsap.timeline()

        tl.fromTo(areaText, {
            opacity: 0,
            y: 20,
        }, {
            opacity: 1,
            y: 0,
            duration: 1
        }, "start").fromTo(google, {
            opacity: 0,
            x: -30
        }, {
            opacity: 1,
            x: 0,
            duration: 1
        }, ">-0.5").fromTo(apple, {
            opacity: 0,
            x: 30
        }, {
            opacity: 1,
            x: 0,
            duration: 1
        }, "<").fromTo(circle, {
            xPercent: 112
        }, {
            xPercent: 0,
            duration: 1
        }, "start+=0.5").fromTo(circleGroup, {
            opacity: 0,
            y: -30
        }, {
            opacity: 1,
            y: 0,
            duration: 1
        }, "start+=0.5")

    }, [])

    return (
        <>
            <div ref={areaTextRef} className="flex flex-col items-center opacity-0">
                <h3 className="flex items-center gap-2 text-sm mb-3 flex-wrap justify-center">
                        <Image
                            src={IconBoost}
                            alt="Icon Boost"
                        />
                        <span className="text-center @laptop:text-lg">Adentre um reino de possibilidades infinitas</span>
                </h3>
                <h1 className="text-4xl/normal @laptop:text-7xl/[1.4] text-center font-poppins mb-4">
                    Explore um Universo
                    <div className="inline-block align-middle mx-2 p-1 bg-white bg-opacity-5 border border-white border-opacity-5 rounded-full w-20 @laptop:w-28">
                        <Image
                            src={SmallNFT01}
                            alt="Small NFT 01"
                            className="w-9 @laptop:w-12"
                            ref={circleRef}
                        />
                    </div>
                    Digital de
                    <Image
                        src={SmallNFT02}
                        alt="Small NFT 02"
                        className="inline-block w-16 mx-2 @desktop:w-24"
                        ref={circleGroupRef}
                    />
                    Colecionáveis Únicos!
                </h1>
                <p className="w-full text-center text-sm mb-6 text-white text-opacity-85 @laptop:max-w-lg @laptop:text-lg">Adentre um reino de possibilidades infinitas e mergulhe nas coleções de NFT, onde a arte, a cultura e a inovação se unem para criar experiências verdadeiramente exclusivas.</p>
            </div>
            <div className="flex flex-col @laptop:flex-row items-center gap-4">
                <Image
                    src={GooglePlay}
                    alt="Google Play"
                    ref={googleRef}
                    className="opacity-0"
                />
                <Image
                    src={AppleStore}
                    alt="Apple Store"
                    ref={appleRef}
                    className="opacity-0"
                />
            </div>
        </>
    )
}